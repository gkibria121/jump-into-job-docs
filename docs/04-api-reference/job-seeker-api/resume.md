---
sidebar_position: 3
title: Resume Service
description: Resume creation, updating, management, and public sharing for job seekers.
---

# Resume Service

The Resume Service enables job seekers to create, manage, and share multiple resumes and cover letters. It also allows users to select a default resume and generate a public view link.

---

## Overview

Job seekers can create multiple versions of their resumes and cover letters tailored to different roles. Resumes can be shared via unique public URLs and managed independently.

---

## Resume Schema Format

Each resume follows a structured format:

```json
{
  "id": "resume-uuid",
  "title": "Full-Stack Developer Resume",
  "userId": "user-uuid",
  "isPublic": true,
  "publicId": "abraham-duran",
  "createdAt": "2025-05-03T07:00:00Z",
  "updatedAt": "2025-05-03T07:05:00Z",
  "meta": {
    "template": "modern",
    "locale": "en-US"
  },
  "basics": {
    "name": "Abraham Duran",
    "label": "Full-Stack Web Developer",
    "email": "abraham@example.com",
    "phone": "+1-198-205-1238",
    "location": {
      "city": "Austin",
      "region": "TX",
      "country": "USA"
    },
    "website": "https://abrahamduran.dev",
    "summary": "Full-stack developer with 5+ years of experience building scalable web applications, microservices, and automating dev workflows. Skilled in modern JavaScript, Laravel, Docker, and AWS.",
    "social": [
      {
        "network": "GitHub",
        "url": "https://github.com/abrahamduran"
      },
      {
        "network": "LinkedIn",
        "url": "https://linkedin.com/in/abrahamduran"
      }
    ]
  },
  "work": [
    {
      "company": "Tech Innovations Inc.",
      "position": "Senior Full-Stack Engineer",
      "location": "Remote",
      "startDate": "2021-03",
      "endDate": "2024-12",
      "summary": "Led microservice development and frontend/backend integration using React and Laravel.",
      "highlights": [
        "Reduced server costs by 35% through Docker-based optimization.",
        "Implemented scalable resume service with S3 + Elasticsearch.",
        "Integrated CI/CD workflows using GitHub Actions."
      ],
      "technologies": ["React", "Laravel", "Docker", "AWS"]
    }
  ],
  "education": [
    {
      "institution": "University of Texas",
      "area": "Computer Science",
      "degree": "B.Sc.",
      "startDate": "2012-08",
      "endDate": "2016-05",
      "gpa": "3.9"
    }
  ],
  "projects": [
    {
      "name": "Job Portal Microservices",
      "role": "Lead Developer",
      "description": "Designed a microservices job platform with resume, job, analytics, and search services.",
      "technologies": ["React", "Node.js", "Docker", "NATS", "Elasticsearch"],
      "highlights": [
        "Designed NATS-based event-driven architecture.",
        "Implemented PDF export using Puppeteer.",
        "Built full-text job search with Elasticsearch."
      ],
      "url": "https://github.com/abrahamduran/job-portal"
    }
  ],
  "skills": [
    {
      "name": "Frontend",
      "keywords": [
        { "technology": "React", "rating": 4.5, "learnedFrom": "Self" },
        { "technology": "Next.js", "rating": 4.0, "learnedFrom": "Self" },
        { "technology": "Tailwind", "rating": 4.2, "learnedFrom": "Job" },
        {
          "technology": "TypeScript",
          "rating": 4.3,
          "learnedFrom": "Educational"
        }
      ]
    },
    {
      "name": "Backend",
      "keywords": [
        { "technology": "Laravel", "rating": 4.7, "learnedFrom": "Job" },
        { "technology": "Node.js", "rating": 4.4, "learnedFrom": "Self" },
        { "technology": "Redis", "rating": 4.2, "learnedFrom": "Job" },
        { "technology": "MySQL", "rating": 4.5, "learnedFrom": "Educational" },
        { "technology": "PostgreSQL", "rating": 4.3, "learnedFrom": "Job" }
      ]
    },
    {
      "name": "DevOps & Tools",
      "keywords": [
        { "technology": "Docker", "rating": 4.8, "learnedFrom": "Self" },
        { "technology": "Nginx", "rating": 4.1, "learnedFrom": "Job" },
        { "technology": "CI/CD", "rating": 4.6, "learnedFrom": "Job" },
        { "technology": "Puppeteer", "rating": 4.2, "learnedFrom": "Self" },
        { "technology": "GitHub Actions", "rating": 4.5, "learnedFrom": "Job" }
      ]
    }
  ],
  "certifications": [
    {
      "title": "AWS Certified Developer – Associate",
      "issuer": "Amazon Web Services",
      "date": "2024-10",
      "expiryDate": "2027-10"
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Native"
    },
    {
      "language": "Spanish",
      "fluency": "Professional Working"
    }
  ],
  "interests": [
    {
      "name": "Open Source"
    },
    {
      "name": "Tech Blogging"
    },
    {
      "name": "Competitive Programming"
    }
  ]
}
```

---

## API Endpoints

### `GET /api/resumes`

Fetch all resumes for the authenticated job seeker.

**Response**:

```json
[
  {
    "id": "resume-123456",
    "title": "Senior Frontend Resume",
    "data": {
      /* updated resume content */
    },
    "isDefault": true,
    "isPublic": true
  }
]
```

---

### `GET /api/resumes/:id`

Retrieve detailed information for a specific resume.

**Response**: Full resume schema (see above).

---

### `POST /api/resumes`

Create a new resume.

**Request Body**:

```json
{
  "title": "Backend Engineer Resume",
  "data": {
    /* resume content */
  },
  "isPublic": false
}
```

**Response**:

```json
{
  "message": "Resume created successfully",
  "id": "resume-654321"
}
```

---

### `PUT /api/resumes/:id`

Update an existing resume.

**Request Body**:

```json
{
  "title": "Updated Resume Title",
  "data": {
    /* updated resume content */
  },
  "isPublic": true
}
```

**Response**:

```json
{
  "message": "Resume updated successfully"
}
```

---

### `DELETE /api/resumes/:id`

Delete or archive a resume.

**Response**:

```json
{
  "message": "Resume deleted successfully"
}
```

---

### `POST /api/resumes/:id/default`

Mark a resume as the default for the user.

**Response**:

```json
{
  "message": "Resume set as default"
}
```

---

### `PATCH /api/resumes/:id/visibility`

Update the public sharing setting for a resume.

**Request Body**:

```json
{
  "isPublic": true,
  "publicId": "abraham-duran"
}
```

**Response**:

```json
{
  "publicUrl": "https://cv.example.com/abraham-duran"
}
```

---

### `GET https://cv.example.com/:publicId`

Fetch the public view of a resume.

**Response**: Rendered HTML or JSON resume data (based on headers).

---

## Access Control

| Role       | Permissions                                  |
| ---------- | -------------------------------------------- |
| Job Seeker | Full access to own resumes and cover letters |

---

## Next Steps

- [Search Service Integration](./search.md)
