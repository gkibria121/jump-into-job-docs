---
title: Search Service
description: Provide filtered, recommended, and featured job listings to job seekers
---

# Search Service

The **Search Service** is responsible for delivering job listings to **Job Seekers**. It performs advanced filtering, searching, and recommendation of jobs based on the user's profile, preferences, and search queries. This service aggregates data from the **Jobs Service** and enriches the user experience by offering dynamic discovery features.

## Responsibilities

- Provide search and filtering capabilities for job listings
- Suggest jobs based on seeker profiles
- Display featured jobs on the home page
- Offer personalized and location-based recommendations

## Data Sources

- Job metadata from **Jobs Service**
- User profiles from **Profile Service**
- Trending and engagement data from **Analytics Service**

## Features

### 🔍 Search Jobs

- Keyword search (title, description, company, etc.)
- Filter by:
  - Category
  - Location (city, state, country, remote)
  - Employment type
  - Experience level
  - Salary range
  - Skills / tags

### 🌟 Featured Jobs

- Curated list of promoted or popular jobs
- Based on admin-configured flags or ranking algorithms

### 🎯 Recommended Jobs

- Based on user profile (skills, location, preferences)
- Uses rules or ML ranking algorithms
- Takes into account recent job seeker activity

---

## API Endpoints

### `GET /api/search`

Perform a filtered search across job listings.

**Query Parameters**:

- `q`: search query keyword
- `category`: job category
- `location`: city/state/country
- `remote`: true/false
- `experienceLevel`: INTERN / ENTRY / MID / SENIOR
- `employmentType`: FULL_TIME / PART_TIME / CONTRACT
- `skills[]`: array of skills to match

**Response**:

```json
[
  {
    "id": "job-123456",
    "title": "Senior Software Engineer",
    "company": {
      "id": "comp-789",
      "name": "Tech Innovations Inc.",
      "location": { "city": "Austin", "state": "TX", "country": "USA" },
      "logo": "https://example.com/logo.png"
    },
    "experienceLevel": "SENIOR",
    "skills": ["JavaScript", "React"],
    "employmentType": "FULL_TIME",
    "category": "SOFTWARE_ENGINEERING",
    "remote": true,
    "salaryRange": { "min": 120000, "max": 150000 },
    "status": "ACTIVE"
  }
]
```

---

### `GET /api/recommendations`

Return jobs recommended for the currently authenticated user.

**Headers**:

```http
Authorization: Bearer <jwt_token>
```

**Response**: Same format as job listing array.

---

### `GET /api/featured`

Return a curated list of featured jobs.

**Response**: Same format as job listing array.

---

## Access Control

| Role       | Access Type                 |
| ---------- | --------------------------- |
| Job Seeker | Full access                 |
| Guest      | Public featured jobs only   |
| Recruiter  | No access to this service   |
| Admin      | Can configure featured jobs |

---

## Notes

- This service is **read-only** for job seekers
- Powered by ElasticSearch or similar indexing technology
- Syncs with **Jobs Service** via event listeners (e.g., `job.created`, `job.updated`, `job.closed`)
- Caches frequently accessed queries for performance

---

## Related Services

- [Jobs Service](./jobs.md)
- [Profile Service](./profiles.md)
- [Analytics Service](./analytics.md)
