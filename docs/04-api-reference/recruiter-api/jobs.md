---
sidebar_position: 2
title: Jobs Service
description: Job creation, listing, updating, and publishing for recruiters and admin users.
---

# Jobs Service

The Jobs Service handles all operations related to job postings, including creation, updating, publishing, and deletion. Only authenticated **Recruiters** and **Admins** are allowed to manage job postings.

## Overview

Recruiters can create and manage job listings which are then visible to job seekers through the search and browse interfaces.

---

## Job Schema Format

Each job post follows a rich structured format:

```json
{
  "id": "job-123456",
  "title": "Senior Software Engineer",
  "company": {
    "id": "comp-789",
    "name": "Tech Innovations Inc.",
    "logo": "https://example.com/logos/techinn.png",
    "location": {
      "city": "Austin",
      "state": "TX",
      "country": "USA",
      "remote": true
    }
  },
  "description": "We are looking for an experienced software engineer to join our team...",
  "requirements": [
    "5+ years of experience with JavaScript",
    "Experience with React or similar frameworks",
    "Bachelor's degree in Computer Science or related field"
  ],
  "responsibilities": [
    "Design and implement new features",
    "Collaborate with cross-functional teams",
    "Mentor junior developers"
  ],
  "employmentType": "FULL_TIME",
  "jobType": "PERMANENT",
  "experienceLevel": "SENIOR",
  "salaryRange": {
    "min": 120000,
    "max": 150000,
    "currency": "USD",
    "period": "YEAR"
  },
  "benefits": ["Health insurance", "401(k) matching", "Flexible working hours"],
  "skills": ["JavaScript", "React", "Node.js", "AWS"],
  "category": "SOFTWARE_ENGINEERING",
  "applicationUrl": "https://example.com/careers/job-123456/apply",
  "applicationEmail": "careers@techinn.com",
  "postedDate": "2025-04-01T10:00:00Z",
  "closingDate": "2025-05-01T23:59:59Z",
  "status": "ACTIVE"
}
```

---

## API Endpoints

### `GET /api/jobs`

Fetch all job postings created by the authenticated recruiter or all jobs for admin.

**Response**:

```json
[
  {
    "id": "job-123456",
    "title": "Senior Software Engineer",
    "company": { "id": "comp-789", "name": "Tech Innovations Inc." },
    "status": "ACTIVE"
  }
]
```

---

### `GET /api/jobs/:id`

Retrieve detailed information about a specific job post by ID.

**Response**: Returns the full job schema (see above).

---

### `POST /api/jobs`

Create a new job posting. Only allowed for authenticated recruiters or admins.

**Request Body**: Must conform to the job schema structure.

**Response**:

```json
{
  "message": "Job created successfully",
  "id": "job-654321"
}
```

---

### `PUT /api/jobs/:id`

Update an existing job post by ID. Only the owner (recruiter) or admin can perform this action.

**Request Body**: Partial or full job schema fields.

**Response**:

```json
{
  "message": "Job updated successfully"
}
```

---

### `DELETE /api/jobs/:id`

Soft-delete or archive a job post. This does not permanently delete the record from the database.

**Response**:

```json
{
  "message": "Job deleted successfully"
}
```

---

### `POST /api/jobs/:id/publish`

Mark a job as published and visible to all users.

**Response**:

```json
{
  "message": "Job published successfully"
}
```

---

### `POST /api/jobs/:id/close`

Close a job posting. It will no longer be visible in search results.

**Response**:

```json
{
  "message": "Job closed successfully"
}
```

---

## Access Control

| Role      | Permissions                              |
| --------- | ---------------------------------------- |
| Recruiter | Create, update, publish, delete own jobs |
| Admin     | Full access to all job listings          |

---

## Next Steps

- [Application Service](./applications.md)
- [Search Service](./search.md)
- [RBAC Configuration](./rbac.md)
