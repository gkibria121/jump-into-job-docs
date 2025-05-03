---
sidebar_position: 2
title: Recruiter Profile Management
description: API documentation for managing recruiter profiles on the Job Portal platform.
---

# Recruiter Profile Management

The **Recruiter Profile Management** section provides APIs that allow recruiters to manage their profiles, job postings, and recruitment activities. These APIs cover profile updates, job posting management, status changes, and the ability to add an image.

## Overview

Recruiters can create, update, and view their profile information, including company details, job preferences, and recruitment status. Additionally, recruiters can manage their job listings and view job applications. This documentation also covers how recruiters can update their basic profile information and upload a profile image.

---

## API Endpoints

### `GET /api/recruiter/profile`

Returns the current profile information for the authenticated recruiter.

**Headers**:

```http
Authorization: Bearer <jwt_token>
```

**Response**:

```json
{
  "id": 1,
  "name": "Jane Doe",
  "email": "jane@techcorp.com",
  "company": "TechCorp",
  "location": {
    "city": "Austin",
    "region": "TX",
    "country": "USA"
  },
  "contact_number": "+1-234-567-8901",
  "website": "https://techcorp.com",
  "profile_status": "active",
  "profile_image_url": "https://example.com/image.jpg",
  "job_posting_count": 5
}
```

---

### `PUT /api/recruiter/profile`

Updates the recruiter’s profile information, including company details and contact information.

**Request Body**:

```json
{
  "name": "Jane Doe",
  "company": "TechCorp",
  "location": {
    "city": "Austin",
    "region": "TX",
    "country": "USA"
  },
  "contact_number": "+1-234-567-8901",
  "website": "https://techcorp.com",
  "profile_status": "active"
}
```

**Response**:

```json
{
  "message": "Profile updated successfully."
}
```

---

### `PUT /api/recruiter/profile/image`

Allows recruiters to upload and update their profile image.

**Request Body**:

- **multipart/form-data** (image file upload)

**Example Request**:

```http
POST /api/recruiter/profile/image
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
Authorization: Bearer <jwt_token>
```

**Request Body (example)**:

```json
{
  "file": "<image-file>"
}
```

**Response**:

```json
{
  "message": "Profile image updated successfully.",
  "image_url": "https://example.com/new-profile-image.jpg"
}
```

---

### `PUT /api/recruiter/profile/status`

Updates the recruiter's profile status. Status options include **active**, **inactive**, and **looking for candidates**.

**Request Body**:

```json
{
  "status": "looking for candidates"
}
```

**Response**:

```json
{
  "message": "Profile status updated successfully."
}
```

---

## Profile Management Best Practices

- **Regular Updates**: Ensure your profile is always up-to-date with current contact information, job posting status, and recruitment needs.
- **Profile Visibility**: Set your profile status to **active** when you're recruiting actively, or **inactive** when you're not looking for candidates.
- **Job Posting Management**: Keep track of job posting status and ensure it reflects the actual hiring situation.

---

## Next Steps

- [Profile Image Upload](./profile-image-upload.md)
- [Job Application Process](./job-application-process.md)
- [API Errors & Responses](./errors.md)
- [Frontend Integration Guide](../03-guides/recruiter-profile-guide.mdx)

```

### Key Updates:
1. **Profile Update Endpoint (`PUT /api/recruiter/profile`)**: Allows the recruiter to update basic profile information like name, company, contact number, and website.
2. **Profile Image Endpoint (`PUT /api/recruiter/profile/image`)**: Allows recruiters to upload and update their profile image.
```
