import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      items: ["introduction/overview", "introduction/getting-started", "introduction/architecture"],
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
          label: "Job Seeker Features",
          items: [
            "features/job-seeker/resume-management",
            "features/job-seeker/job-search",
            "features/job-seeker/application-process",
            "features/job-seeker/job-discovery",
            "features/job-seeker/profile-management",
          ],
        },
        {
          type: "category",
          label: "Recruiter Features",
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
    // Future sections to be added
    // {
    //   type: "category",
    //   label: "API Reference",
    //   items: [], // To be populated later
    // },
    // {
    //   type: "category",
    //   label: "Data Models",
    //   items: [], // To be populated later
    // },
    // {
    //   type: "category",
    //   label: "Data Flow",
    //   items: [], // To be populated later
    // },
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

export default sidebars;
