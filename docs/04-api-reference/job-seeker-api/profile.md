---
sidebar_position: 3
title: Profile Service
description: Resume creation, updating, management, and public sharing for job seekers.
---

# Job Seeker Profile Management API Documentation

This documentation provides details for managing the profile of a job seeker. It includes endpoints for updating availability status, job preferences, and other aspects of a job seeker's profile.

## Table of Contents

- [Overview](#overview)
- [Endpoints](#endpoints)
  - [Update Availability Status](#update-availability-status)
  - [Update Job Type Preferences](#update-job-type-preferences)
  - [Update Contact Information](#update-contact-information)
  - [Update Resume](#update-resume)
  - [Update Skills](#update-skills)
  - [Add Social Links](#add-social-links)
  - [Update Summary](#update-summary)
- [Error Handling](#error-handling)

---

## Overview

The Job Seeker Profile Management API allows users to manage their job-seeking profile. This includes setting their availability status, preferred job types, contact information, resume, skills, and summary.

---

## Endpoints

### Update Availability Status

#### Endpoint

```

POST /availability

```

#### Description

Updates the job seeker's availability status. This helps recruiters know when the job seeker is open to new opportunities.

#### Request Body

```json
{
  "status": "currently_in_a_job" | "looking_for_opportunities" | "ready_to_join"
}
```

#### Status Options

- **currently_in_a_job**: The job seeker is currently employed and not looking for new opportunities.
- **looking_for_opportunities**: The job seeker is actively seeking new opportunities.
- **ready_to_join**: The job seeker is available and ready to start a new role.

#### Response

- **200 OK**: Availability status updated successfully.
- **400 Bad Request**: Invalid status value.

#### Example Request:

```http
POST /availability HTTP/1.1
Host: api.jobportal.com
Content-Type: application/json

{
  "status": "looking_for_opportunities"
}
```

#### Example Response:

```json
{
  "message": "Availability status updated successfully."
}
```

---

### Update Job Type Preferences

#### Endpoint

```
POST /job-preferences
```

#### Description

Updates the job seeker's preferred job type. This helps recruiters understand the job environment the seeker is interested in.

#### Request Body

```json
{
  "preferred_job_types": [
    "remote",
    "hybrid",
    "on-site",
    "contract",
    "full-time",
    "other"
  ]
}
```

#### Job Type Options:

- **remote**: Job seeker prefers remote positions.
- **hybrid**: Job seeker prefers hybrid (partly remote, partly on-site) positions.
- **on-site**: Job seeker prefers to work on-site.
- **contract**: Job seeker is looking for contract-based work.
- **full-time**: Job seeker is looking for full-time positions.
- **other**: Other types of job preferences not covered by the above options.

#### Response

- **200 OK**: Job preferences updated successfully.
- **400 Bad Request**: Invalid job type value.

#### Example Request:

```http
POST /job-preferences HTTP/1.1
Host: api.jobportal.com
Content-Type: application/json

{
  "preferred_job_types": ["remote", "full-time"]
}
```

#### Example Response:

```json
{
  "message": "Job preferences updated successfully."
}
```

---

### Update Contact Information

#### Endpoint

```
POST /contact-information
```

#### Description

Updates the job seeker's contact details, including email, phone, and location.

#### Request Body

```json
{
  "email": "newemail@example.com",
  "phone": "+1-123-456-7890",
  "location": {
    "city": "New York",
    "region": "NY",
    "country": "USA"
  }
}
```

#### Response

- **200 OK**: Contact information updated successfully.
- **400 Bad Request**: Invalid or missing contact information.

#### Example Request:

```http
POST /contact-information HTTP/1.1
Host: api.jobportal.com
Content-Type: application/json

{
  "email": "abraham.duran@example.com",
  "phone": "+1-198-205-1238",
  "location": {
    "city": "Austin",
    "region": "TX",
    "country": "USA"
  }
}
```

#### Example Response:

```json
{
  "message": "Contact information updated successfully."
}
```

## Conclusion

The Job Seeker Profile Management API provides essential functionalities for managing a job seeker's profile, including availability, job preferences, contact information, This helps recruiters match candidates with suitable opportunities and allows job seekers to maintain an up-to-date profile.

## Next Steps

- [Resume mangement](./resume.md)
- [Search Service Integration](./search.md)
- [Sharing & Privacy Settings](./privacy.md)
