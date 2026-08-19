# Testing and Validation

## Application Tests

### Checklist Creation

- Add a new checklist item.
- Confirm it appears in the list.

### Checklist Completion

- Mark an item complete.
- Confirm its visual state changes.

### Checklist Deletion

- Delete an item.
- Confirm it is removed from the list.

### Persistence

- Add or modify an item.
- Refresh the browser.
- Confirm the state remains.

Persistence is provided by browser localStorage.

## Production Build Test

Run:

```bash
npm run build
```

Expected result:

```text
Build completed successfully
```

## PWA Validation

Verify:

- Web app manifest is detected.
- PWA icons are detected.
- Service worker is installed.
- Service worker is activated.
- Cache Storage contains application resources.

## Offline Test

1. Load the production application.
2. Confirm the service worker is active.
3. Enable browser offline mode.
4. Reload the application.
5. Confirm OpsChecklist remains available.
6. Add or modify checklist data.
7. Refresh the application.
8. Confirm locally stored data remains available.

## CI/CD Test

Release:

```text
v1.0.0 -> v1.0.1
```

Push the change to GitHub.

Confirm:

1. Amplify detects the commit.
2. Amplify starts a build.
3. The build succeeds.
4. Deployment succeeds.
5. Production displays v1.0.1.

## Rollback Test

Deploy v1.0.1.

Use Amplify deployment history to redeploy the known-good v1.0.0 deployment.

Confirm production returns to:

```text
Version 1.0.0
```

Restore v1.0.1 afterward.

## Result

The project demonstrates:

- Application functionality
- Local persistence
- Production build validation
- PWA installation
- Offline behavior
- Automated deployment
- Release versioning
- Deployment rollback