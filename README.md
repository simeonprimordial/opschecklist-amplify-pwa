# OpsChecklist

> AWS 80 Projects — Project 09

OpsChecklist is a lightweight operational checklist Progressive Web App (PWA) designed for cloud and DevOps teams.

The project demonstrates how a frontend application can be developed locally, version-controlled with GitHub, automatically deployed through AWS Amplify, and enhanced with offline capabilities.

---

## Overview

OpsChecklist provides a simple interface for managing operational tasks such as:

- Reviewing deployment status
- Confirming monitoring dashboards
- Checking outstanding incidents
- Adding custom operational tasks
- Completing tasks
- Deleting tasks

Checklist data is stored locally in the browser, allowing the application to retain task state without requiring a backend database.

---

## Architecture

```text
                    Developer
                        |
                        | git push
                        v
                     GitHub
                        |
                        | Connected repository
                        v
                AWS Amplify Hosting
                        |
                 +------+------+
                 |             |
              Build          Deploy
                 |             |
                 v             v
             Vite Build    HTTPS Hosting
                               |
                               v
                        OpsChecklist PWA
                               |
                    +----------+----------+
                    |                     |
                    v                     v
              Service Worker        localStorage
                    |                     |
                    v                     v
              Cache Storage          Task Data
                    |
                    v
              Offline Support
```

---

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Build Tool | Vite |
| Source Control | Git / GitHub |
| Hosting | AWS Amplify Hosting |
| PWA | Web Manifest + Service Worker |
| Offline Resources | Cache Storage |
| Local Data | Browser localStorage |
| Deployment | Git-connected CI/CD |
| Protocol | HTTPS |

---

## Features

### Operational Checklist

Users can:

- Add operational tasks
- Mark tasks as completed
- Delete tasks
- View the number of open tasks
- Persist checklist state locally

### Progressive Web App

OpsChecklist includes:

- Web App Manifest
- Application icons
- Service Worker
- Cache Storage
- Offline application support
- Installable application experience

### Local Persistence

Checklist state is stored using browser `localStorage`.

This allows task data to remain available after refreshing the application.

### Automated Deployment

The application is connected to GitHub and AWS Amplify.

The deployment workflow is:

```text
Developer
    |
    | git push
    v
GitHub
    |
    v
AWS Amplify
    |
    +--> Install dependencies
    |
    +--> Build application
    |
    +--> Deploy production files
    |
    v
Production
```

---

## Project Structure

```text
opschecklist-amplify-pwa/
│
├── docs/
│   ├── architecture.md
│   ├── deployment.md
│   ├── rollback.md
│   └── testing.md
│
├── public/
│   ├── manifest.webmanifest
│   ├── sw.js
│   └── PWA assets
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Local Development

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## CI/CD

The project uses a GitHub-connected AWS Amplify deployment workflow.

A normal release follows:

```bash
git add .
git commit -m "feat: release OpsChecklist"
git push origin main
```

The push triggers the connected Amplify deployment pipeline.

```text
GitHub Commit
      |
      v
Amplify Build
      |
      v
Vite Production Build
      |
      v
dist/
      |
      v
AWS Amplify Hosting
      |
      v
Production Application
```

---

## PWA and Offline Architecture

The application uses a Service Worker to cache application resources.

```text
                    Service Worker
                         |
                         v
                    Cache Storage
                         |
                         v
                Application Resources
                         |
                         v
                  Offline Access
```

Application checklist data is stored separately:

```text
User Action
     |
     v
localStorage
     |
     v
Checklist State
```

This separates:

- Application-resource caching
- User checklist data persistence

---

## Release Versioning

The project uses explicit application versions.

### v1.0.0

Initial production release.

### v1.0.1

Release used to validate:

- Versioned application deployment
- GitHub → AWS Amplify CI/CD
- PWA cache versioning
- Production release verification

---

## Rollback

AWS Amplify deployment history provides a mechanism for restoring a previously deployed version.

Example:

```text
Production
    |
    v
v1.0.1
    |
    | rollback
    v
v1.0.0
    |
    | restore
    v
v1.0.1
```

The rollback procedure is documented in:

`docs/rollback.md`

---

## Testing

The project validates:

- Checklist creation
- Checklist completion
- Checklist deletion
- Local persistence
- Production builds
- PWA manifest
- Service Worker
- Cache Storage
- Offline application access
- GitHub → Amplify deployment
- Release versioning
- Deployment rollback

Detailed testing procedures are available in:

`docs/testing.md`

---

## Documentation

| Document | Description |
|---|---|
| `docs/architecture.md` | Application and cloud architecture |
| `docs/deployment.md` | Local and AWS deployment process |
| `docs/testing.md` | Application, PWA, CI/CD and offline testing |
| `docs/rollback.md` | Production rollback procedure |

---

## Engineering Objectives

This project focuses on practical cloud and DevOps engineering rather than application complexity.

The primary objectives are:

- Git-based development
- Continuous deployment
- AWS managed hosting
- Production frontend deployment
- Progressive Web App architecture
- Offline capability
- Browser-based persistence
- Release management
- Deployment rollback
- Technical documentation

---

## Project Status

**Completed**

- [x] React application
- [x] Operational checklist functionality
- [x] Local persistence
- [x] PWA manifest
- [x] Service Worker
- [x] Offline support
- [x] AWS Amplify Hosting
- [x] GitHub integration
- [x] Automated deployment
- [x] Application versioning
- [x] Rollback validation
- [x] Technical documentation

---

## AWS 80 Projects

This project is part of the **AWS 80 Projects** cloud engineering portfolio challenge.

The objective of the challenge is to build progressively more practical cloud, DevOps, security, automation, and engineering projects while documenting the implementation and operational lessons learned.