# Deployment Guide

## Prerequisites

- Node.js
- npm
- Git
- GitHub account
- AWS account
- AWS Amplify Hosting

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Production Build

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Git Workflow

Changes are committed to Git:

```bash
git add .
git commit -m "feat: release OpsChecklist v1.0.1"
git push origin main
```

## Amplify Deployment

AWS Amplify is connected to the GitHub repository and production branch.

A push to the connected branch triggers the Amplify build and deployment workflow.

Expected workflow:

```text
Git push
    |
    v
Amplify detects commit
    |
    v
Install dependencies
    |
    v
npm run build
    |
    v
Deploy dist/
    |
    v
HTTPS production
```

## Build Output

The Vite production build is generated in:

```text
dist/
```

Amplify deploys the contents of this directory.

## Production Verification

After deployment:

1. Open the Amplify production URL.
2. Confirm OpsChecklist loads.
3. Confirm the application version.
4. Verify the PWA manifest.
5. Verify the service worker.
6. Test offline behavior.
7. Confirm the latest Git commit is reflected in production.