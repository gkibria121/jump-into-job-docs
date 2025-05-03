---
sidebar_position: 1
title: Authentication
description: Authentication methods and JWT-based access control for the Job Portal platform
---

# Authentication

The Job Portal platform uses **JWT (JSON Web Tokens)** for stateless authentication. This ensures secure and scalable access to protected resources through bearer tokens passed in API requests.

## Overview

All users (Job Seekers, Recruiters, Admins) must authenticate via login or registration to receive a JWT. This token must be included in the `Authorization` header for accessing authenticated routes.

## Authentication Flow

1. **User Registration**  
   Users sign up via the `/api/register` endpoint.

2. **User Login**  
   Credentials are submitted to the `/api/login` endpoint, returning a JWT token on success.

3. **Token Usage**  
   JWTs must be included in the `Authorization` header:

   ```http
   Authorization: Bearer <jwt_token>
   ```

4. **Accessing Authenticated Routes**
   Use the `/api/current-user` endpoint to retrieve current user information based on the token.

5. **User Logout**
   Optional invalidation (e.g., token blacklisting or frontend logout).

6. **Change Password**
   The user can change their password using the `/api/change-password` endpoint.

---

## API Endpoints

### `POST /api/register`

Registers a new user.

**Request Body**:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "user_type": "job_seeker"
}
```

**Response**:

```json
{
  "message": "Registration successful",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGci... "
}
```

---

### `POST /api/login`

Authenticates a user and returns a JWT.

**Request Body**:

```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response**:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 7200
}
```

---

### `GET /api/current-user`

Returns the currently authenticated user's profile information based on the JWT token.

**Headers**:

```http
Authorization: Bearer <jwt_token>
```

**Response**:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "user_type": "job_seeker",
  "role": "job_seeker"
}
```

---

### `POST /api/logout`

(Optional) Invalidates the token or clears frontend session.

**Headers**:

```http
Authorization: Bearer <jwt_token>
```

**Response**:

```json
{
  "message": "Logout successful"
}
```

---

### `POST /api/change-password`

Allows a user to change their password.

**Request Body**:

```json
{
  "current_password": "securePassword123",
  "new_password": "newSecurePassword456"
}
```

**Response**:

```json
{
  "message": "Password has been changed successfully."
}
```

---

## JWT Structure & Expiry

- **Token Type**: Bearer JWT
- **Claims**: User ID, role(s), expiry, issued time
- **Expiration**: 2 hours (configurable)
- **Storage Recommendation**: In-memory (for SPA) or secure cookies with HttpOnly flag

---

## Role-Based Access (RBAC)

Access is enforced via user roles encoded within the JWT:

- **Job Seeker**: Access to personal resumes, job listings, and applications
- **Recruiter**: Access to job posting and candidate management
- **Admin**: Full platform access
- **Guest**: Unauthenticated access to public data only

---

## Security Best Practices

- Use HTTPS to encrypt all traffic
- Do not store JWTs in localStorage (use HttpOnly cookies or secure memory)
- Rotate and revoke tokens regularly
- Monitor login attempts and audit logs
- Verify JWT signature and expiration on every request

---

## Next Steps

- [RBAC Configuration](./rbac.md)
- [API Errors & Responses](./errors.md)
- [Frontend Integration Guide](../03-guides/authentication-guide.mdx)

In this updated version:

- The **Change Password** endpoint (`POST /api/change-password`) has been added.
- The **Forgot Password** and related endpoints have been removed.
- The overall structure and flow for JWT-based authentication are kept intact.

```

```
