# Rollback Procedure

## Purpose

This document describes how to recover OpsChecklist using a previously successful AWS Amplify deployment.

## Scenario

Assume the current production version is:

```text
v1.0.1
```

and a previously verified release is:

```text
v1.0.0
```

## Recovery Process

1. Open the AWS Management Console.
2. Open AWS Amplify.
3. Select the OpsChecklist application.
4. Select the production branch.
5. Open deployment history.
6. Identify the known-good v1.0.0 deployment.
7. Open that deployment.
8. Select `Redeploy this version`.
9. Wait for the deployment to complete.
10. Open the production URL.
11. Verify the application reports v1.0.0.

## Recovery Verification

Confirm:

- Production deployment succeeded.
- Application loads successfully.
- HTTPS remains enabled.
- Expected application version is displayed.
- Checklist functionality remains operational.

## Restore Current Release

After the rollback test, locate the verified v1.0.1 deployment in Amplify deployment history.

Select:

`Redeploy this version`

Wait for the deployment to complete.

Confirm production returns to:

```text
Version 1.0.1
```

## Important Principle

Rollback does not require modifying the Git source when the objective is to restore a previously built and verified deployment.

The rollback exercise demonstrates operational recovery using deployment history.