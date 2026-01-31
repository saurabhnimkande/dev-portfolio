'use client';

import { useEffect, useState, useLayoutEffect } from 'react';

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClient, setIsClient] = useState(() => typeof window !== 'undefined');
  const [windowSize, setWindowSize] = useState(() =>
    typeof window !== 'undefined' ? { width: window.innerWidth, height: window.innerHeight } : { width: 0, height: 0 }
  );

  useEffect(() => {
    if (!isClient) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if mouse is over an element with the expand or hide classes
      const elements = document.elementsFromPoint(e.clientX, e.clientY);

      let hasHideClass = false;
      let hasExpandClass = false;

      // Check all elements at this point (handles z-index stacking)
      for (const element of elements) {
        if (!hasHideClass && (element.classList.contains('hide-mouse-circle') ||
            element.closest('.hide-mouse-circle'))) {
          hasHideClass = true;
        }
        if (!hasExpandClass && (element.classList.contains('expand-mouse-circle') ||
            element.closest('.expand-mouse-circle'))) {
          hasExpandClass = true;
        }
        // Stop checking if we found both
        if (hasHideClass && hasExpandClass) break;
      }

      // Hide takes precedence over expand
      if (hasHideClass) {
        setIsHidden(true);
        setIsExpanded(false);
      } else if (hasExpandClass) {
        setIsHidden(false);
        setIsExpanded(true);
      } else {
        setIsHidden(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isClient]);

  const baseCircleSize = 50; // Always use 50px base size
  const scale = isHidden ? 0 : (isExpanded ? 6 : 1); // Scale to 0 when hidden, 1.6 when expanded
  const opacity = isHidden ? 0 : 1; // Fade out when hidden

  // Only render on client side to avoid window access issues
  if (!isClient || windowSize.width === 0) return null;

  return (
    <div
      suppressHydrationWarning
      className="fixed pointer-events-none z-50"
      style={{
        left: '50%', // Center horizontally
        top: '50%',  // Center vertically
        width: `${baseCircleSize}px`,
        height: `${baseCircleSize}px`,
        borderRadius: '50%',
        backgroundColor: '#ffe76e',
        opacity: opacity,
        mixBlendMode: 'difference',
        transform: `translate(${mousePosition.x - windowSize.width / 2 - baseCircleSize / 2}px, ${mousePosition.y - windowSize.height / 2 - baseCircleSize / 2}px) scale(${scale})`, // Use translate for position delay, scale for expansion
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out', // Smooth transitions for hide/show
      }}
    />
  );
}
