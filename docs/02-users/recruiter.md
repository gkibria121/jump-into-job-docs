(Due to technical issues, the search service is temporarily unavailable.)

### ✅ **Users of the Job Portal and Their Constraints**

---

### **1. Job Seeker**

**Description:**  
A job seeker is an individual who uses the portal to find, apply for, and track job opportunities. They can manage resumes, view job statuses, and receive updates.

**Information They Need:**

- Job listings (local and global).
- Application status (pending, interviewed, rejected, hired).
- Featured and recommended jobs.
- Resume and cover letter management.
- Bookmark and save jobs for future applications.
- Notifications about job matches and interview calls.

**Constraints:**

- **Application Limits:** Cannot apply for the same job multiple times.
- **Resume Restrictions:** Must create a resume.
- **Incomplete Profile:** Cannot apply without completing essential profile information.
- **Privacy:** Cannot view other applicants or employer contact details.
- **Withdraw Policy:** Can only withdraw applications before reaching the "Interview Scheduled" stage.
- **Scope Restriction:** Can only view jobs based on their selected local or global preference.

---

### **2. Recruiter**

**Description:**  
A recruiter is a professional responsible for managing the hiring process. They have access to candidate management and job posting features, with varying levels of access based on their role.

**Information They Need:**

- Job post management (create, edit, delete, and update).
- Applicant profiles and application status.
- Filters to track candidates (e.g., interview pending, shortlisted).
- Analytics for job post performance.
- Applicant communication and interview scheduling.

**Constraints:**

- **Role-Based Access:** Actions are limited by their assigned role (Admin Recruiter, Standard Recruiter, Viewer Recruiter, Interviewer).
- **Applicant Visibility:** Can only access applicants for jobs they posted.
- **Editing Limits:** Cannot edit job posts once applications are closed.
- **Data Privacy:** Cannot share applicant data outside the platform.
- **Scope Control:** Must explicitly select local or global when posting jobs.
- **Audit Logging:** All actions (e.g., edits, communication) are logged for compliance.

**Recruiter Roles:**

1. **Admin Recruiter:**

   - Full access to job postings, candidate management, and analytics.
   - Can manage other recruiters within the company.

2. **Standard Recruiter:**

   - Can create, edit, and delete job posts.
   - Access to candidate profiles and application statuses.
   - Can communicate with candidates and schedule interviews.

3. **Viewer Recruiter:**

   - Read-only access to job posts and candidate information.
   - Cannot edit or delete job posts or interact with candidates.

4. **Interviewer:**
   - Limited to viewing candidate profiles and scheduling interviews.
   - Cannot create or edit job posts.

---

### **3. Company (Employer Organization)**

**Description:**  
A company represents an employer entity managing multiple recruiters and job listings. It controls recruiter access and oversees the hiring process.

**Information They Need:**

- Company-wide job postings and applicant data.
- Recruiter activity and performance tracking.
- Access control to manage recruiter roles.
- Analytics for job performance and applicant sources.
- Branding and public company profile management.

**Constraints:**

- **Role Management:** Can only assign predefined recruiter roles (Admin, Standard, Viewer, Interviewer).
- **Data Access:** Can view all job posts and applicants under their company.
- **Scope Control:** Must maintain consistency in local or global job posts.
- **Action Restrictions:** Cannot edit closed job posts or applications in final stages.
- **Recruiter Limits:** Cannot exceed a set number of active recruiters (subscription-dependent).
- **Compliance:** Must log recruiter activities and applicant interactions.

---

### **4. Admin (Platform Administrator)**

**Description:**  
Admins manage the entire job portal, ensuring platform integrity, data security, and user moderation.

**Information They Need:**

- System-wide job and user analytics.
- User activity logs for audits.
- Moderation tools (e.g., flagging abusive content).
- System settings (e.g., feature toggles, maintenance controls).
- User management (create, suspend, or delete accounts).

**Constraints:**

- **Access Control:** Restricted to platform-level data; cannot interfere with private applicant-recruiter interactions.
- **Data Integrity:** Must log all administrative actions for audits.
- **User Privacy:** Cannot access sensitive user information without authorization.
- **Compliance:** Must follow legal regulations regarding user data.
- **System Safeguards:** Limited access to production data without multi-level authorization.

---

### **5. Guest User (Unregistered Visitor)**

**Description:**  
A guest user is an unregistered individual who can browse public job listings and view company profiles.

**Information They Need:**

- Public job listings (without applicant tracking).
- Company profiles and open roles.
- Overview of platform features and services.

**Constraints:**

- **Limited Access:** Cannot apply for jobs or view private data.
- **No Personalization:** Cannot save jobs or receive recommendations.
- **Interaction Limits:** Cannot contact recruiters or receive notifications.

---

### 🎯 **Summary of User Constraints**

| **User Type**  | **Key Constraints**                                                                                   |
| -------------- | ----------------------------------------------------------------------------------------------------- |
| **Job Seeker** | Limited applications, privacy on applicant data, cannot apply without a complete profile.             |
| **Recruiter**  | Restricted by role, can only view their applicants, cannot edit closed jobs.                          |
| **Company**    | Role-based recruiter management, access limited to company-wide data, cannot exceed recruiter limits. |
| **Admin**      | Must follow data privacy laws, cannot modify user content without logging actions.                    |
| **Guest User** | Cannot apply, save jobs, or interact with recruiters, only public data access.                        |

### **Additional Details**

#### **Recruiter Roles:**

1. **Admin Recruiter:**

   - Full access to job postings, candidate management, and analytics.
   - Can manage other recruiters within the company.

2. **Standard Recruiter:**

   - Can create, edit, and delete job posts.
   - Access to candidate profiles and application statuses.
   - Can communicate with candidates and schedule interviews.

3. **Viewer Recruiter:**

   - Read-only access to job posts and candidate information.
   - Cannot edit or delete job posts or interact with candidates.

4. **Interviewer:**
   - Limited to viewing candidate profiles and scheduling interviews.
   - Cannot create or edit job posts.

#### **Company (Employer Organization):**

- **Organization-Level Account:** Manages multiple recruiters and oversees all recruitment activities.
- **Branding Control:** Manages company branding and public profiles.
- **Recruiter Access Control:** Assigns and manages recruiter roles within the organization.
- **Recruitment Oversight:** Monitors and tracks all recruitment activities and job postings under the company.

---

This updated version includes the new details about recruiter roles and company management, ensuring a comprehensive overview of the job portal's user types and their constraints.
