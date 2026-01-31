import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

const docsContent: Record<string, { title: string; content: string }> = {
  "getting-started": {
    title: "Getting Started",
    content: `
# Getting Started

Welcome to my documentation! This guide will help you get started with my projects.

## Prerequisites

- Node.js 18+
- npm or yarn
- Basic knowledge of React

## Installation

\`\`\`bash
npm install
\`\`\`

## Quick Start

1. Clone the repository
2. Install dependencies
3. Run the development server

\`\`\`bash
npm run dev
\`\`\`

Visit [http://localhost:3000](http://localhost:3000) to see your app.
    `,
  },
  "api-reference": {
    title: "API Reference",
    content: `
# API Reference

This section provides detailed information about the available APIs.

## Endpoints

### GET /api/users

Retrieves a list of users.

**Response:**
\`\`\`json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
\`\`\`

### POST /api/users

Creates a new user.

**Request Body:**
\`\`\`json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
\`\`\`
    `,
  },
  "examples": {
    title: "Examples",
    content: `
# Examples

Here are some practical examples to help you understand how to use my projects.

## Basic Component Usage

\`\`\`tsx
import { Button } from './components/Button';

export default function App() {
  return (
    <div>
      <Button onClick={() => console.log('Clicked!')}>
        Click me
      </Button>
    </div>
  );
}
\`\`\`

## API Integration

\`\`\`tsx
import { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`
    `,
  },
};

export default function DocPage({ params }: PageProps) {
  const doc = docsContent[params.slug];

  if (!doc) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-zinc-50 mb-8">
            Documentation Not Found
          </h1>
          <p className="text-zinc-400">
            The documentation you're looking for doesn't exist.
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-zinc-50 mb-8">
          {doc.title}
        </h1>
        <div className="prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: doc.content.replace(/\n/g, '<br />') }} />
        </div>
        <div className="mt-12">
          <Link
            href="/docs"
            className="text-blue-400 hover:underline"
          >
            ← Back to Documentation
          </Link>
        </div>
      </main>
    </div>
  );
}