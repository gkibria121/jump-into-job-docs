/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  documentationSidebar: [
    {
      type: "category",
      label: "Introduction",
      items: [
        "introduction/overview",
        "introduction/getting-started",
        "introduction/architecture",
      ],
    },
    {
      type: "category",
      label: "Users",
      items: [
        "users/overview",
        "users/job-seeker",
        "users/recruiter",
        "users/company",
        "users/admin",
        "users/guest-user",
      ],
    },
    {
      type: "category",
      label: "Features",
      items: [
        {
          type: "category",
          label: "Job Seeker",
          items: [
            "features/job-seeker/resume-management",
            "features/job-seeker/job-search",
            "features/job-seeker/application-process",
            "features/job-seeker/bookmarking",
            "features/job-seeker/job-discovery",
            "features/job-seeker/profile-management",
            "features/job-seeker/job-discovery",
            "features/job-seeker/feedback",
          ],
        },
        {
          type: "category",
          label: "Recruiter",
          items: [
            "features/recruiter/job-management",
            "features/recruiter/applicant-management",
            "features/recruiter/communication",
            "features/recruiter/insights-reporting",
            "features/recruiter/team-management",
            "features/recruiter/candidate-evaluation",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        "api-reference/authentication",
        "api-reference/error",
        {
          type: "category",
          label: "Job Seeker API",
          items: [
            "api-reference/job-seeker-api/search",
            "api-reference/job-seeker-api/resume",
            "api-reference/job-seeker-api/profile",
            "api-reference/job-seeker-api/applications",
          ],
        },
        {
          type: "category",
          label: "Recruiter API",
          items: [
            "api-reference/recruiter-api/jobs",
            "api-reference/recruiter-api/profile",
            "api-reference/recruiter-api/applicants",
            "api-reference/recruiter-api/analytics",
          ],
        },
        {
          type: "category",
          label: "Company API",
          items: ["api-reference/company-api/service"],
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/deployment",
        "guides/security",
        "guides/best-practices",
        "guides/troubleshooting",
      ],
    },
  ],
};

module.exports = sidebars;
