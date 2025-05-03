---
sidebar_position: 3
title: Companies Service
description: Company creation, listing, updating, and deletion for recruiters and admin users.
---

# Companies Service

The Companies Service handles all operations related to company profiles. Only authenticated **Recruiters**, **Company Administrators**, and **Platform Administrators** are allowed to manage companies.

## Overview

Recruiters and Company Administrators can create and manage company profiles. These records are linked to job postings and are visible to job seekers during job exploration. Platform Administrators have system-wide oversight.

---

## Company Schema Format

Each company record follows this structured format:

```json
{
  "id": "comp-789",
  "name": "Tech Innovations Inc.",
  "logo": "https://example.com/logos/techinn.png",
  "website": "https://techinn.com",
  "description": "A forward-thinking technology company building AI solutions.",
  "industry": "Technology",
  "location": {
    "city": "Austin",
    "state": "TX",
    "country": "USA",
    "remote": true
  },
  "createdBy": "user-12345",
  "createdAt": "2025-03-15T12:00:00Z",
  "updatedAt": "2025-04-01T08:00:00Z"
}
```

---

## API Endpoints

### `GET /api/companies`

Fetch all companies created by the authenticated recruiter or all companies for Company Administrators and Platform Admins.

**Response**:

```json
[
  {
    "id": "comp-789",
    "name": "Tech Innovations Inc.",
    "industry": "Technology"
  }
]
```

---

### `GET /api/companies/:id`

Retrieve detailed information about a specific company by ID.

**Response**: Returns the full company schema (see above).

---

### `POST /api/companies`

Create a new company profile. Only allowed for authenticated Recruiters, Company Administrators, or Platform Admins.

**Request Body**: Must conform to the company schema structure.

**Response**:

```json
{
  "message": "Company created successfully",
  "id": "comp-890"
}
```

---

### `PUT /api/companies/:id`

Update an existing company profile by ID. Only the owner (recruiter), assigned Company Administrator, or Platform Admin can perform this action.

**Request Body**: Partial or full company schema fields.

**Response**:

```json
{
  "message": "Company updated successfully"
}
```

---

### `DELETE /api/companies/:id`

Soft-delete or archive a company profile. This does not permanently delete the record from the database.

**Response**:

```json
{
  "message": "Company deleted successfully"
}
```

---

### `POST /api/companies/:id/apply`

Apply to join a company as a recruiter. Requires authentication.

**Request Body**:

```json
{
  "message": "Please consider me for a recruiter role"
}
```

**Response**:

```json
{
  "message": "Application submitted successfully"
}
```

---

### `POST /api/companies/:id/recruiters/:recruiterId/promote`

Promote a recruiter to Admin Recruiter. Only Admin Recruiters or Company Administrators can perform this action.

```json
{
  "role": "admin-recrutier"
}
```

**Response**:

```json
{
  "message": "Recruiter promoted to Admin Recruiter"
}
```

---

### `POST /api/companies/:id/recruiters/:recruiterId/demote`

Demote an Admin Recruiter to Standard Recruiter. Only Admin Recruiters or Company Administrators can perform this action.

**Response**:

```json
{
  "message": "Recruiter demoted to Standard Recruiter"
}
```

---

### `DELETE /api/companies/:id/recruiters/:recruiterId`

Remove a recruiter from the company. Only Admin Recruiters or Company Administrators can perform this action.

**Response**:

```json
{
  "message": "Recruiter removed from company"
}
```

---

## Access Control

| Role                  | Permissions                                                |
| --------------------- | ---------------------------------------------------------- |
| Recruiter             | Create, update, delete own company profiles, apply to join |
| Admin Recruiter       | Manage recruiters within the same company                  |
| Company Administrator | Manage all companies linked to their organization          |
| Platform Admin        | Full access to all company records                         |

---

## Constraints

- **Role Management:** Can only assign predefined recruiter roles (Admin, Standard, Viewer, Interviewer).
- **Data Access:** Can view all job posts and applicants under their company.
- **Scope Control:** Must maintain consistency in local or global job posts.
- **Action Restrictions:** Cannot edit closed job posts or applications in final stages.
- **Recruiter Limits:** Cannot exceed a set number of active recruiters (subscription-dependent).
- **Compliance:** Must log recruiter activities and applicant interactions.

---

## Next Steps

- [Jobs Service](./jobs.md)
- [Users Overview](./users.md)
- [RBAC Configuration](./rbac.md)

```


```
