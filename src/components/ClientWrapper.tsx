'use client';

import dynamic from "next/dynamic";

const MouseFollower = dynamic(() => import("@/components/MouseFollower"), {
  ssr: false,
});

export default function ClientWrapper() {
  return <MouseFollower />;
}