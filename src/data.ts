import { CareerData } from './types';

export const careerData: CareerData = {
  name: "Akash Nauhwar",
  title: "Senior Cloud & Data Engineer",
  tagline: "Architecting scalable, observable, and cost-efficient enterprise cloud data platforms.",
  bio: [
    "I am a Senior Cloud & Data Engineer with more than nine years of experience designing, building, and supporting enterprise-scale cloud data platforms on Microsoft Azure.",
    "My expertise spans Azure Data Explorer, Azure Data Factory, Azure Databricks, PySpark, Python, SQL, and enterprise integration patterns. I specialize in bridging the gap between business problems and scalable architecture.",
    "Currently, I lead the design of an Enterprise Observability & FinOps Platform that consolidates cloud cost analytics, operational telemetry, and engineering dashboards into a centralized analytics platform serving ~1,000 stakeholders."
  ],
  email: "akash.nauhwar@outlook.com",
  phone: "+91 7715043501",
  linkedin: "https://linkedin.com/in/akash-nauhwar",
  github: "https://github.com/anauhwar",
  projects: [
    {
      title: "ADX Centralized Monitoring Platform",
      role: "Senior Data Engineer",
      duration: "Aug 2025 – Present",
      description: "Architected a centralized observability and FinOps platform using Azure Data Explorer to consolidate operational telemetry, job health, and cloud costs across multiple Azure and third-party services.",
      impact: "Reduced dashboard response time from ~120s to 3–5s via KQL optimization and Materialized Views. Supported ~1,000 consumers and 12TB of data.",
      technologies: ["Azure Data Explorer", "KQL", "Azure Monitor", "Grafana", "Event Hub"]
    },
    {
      title: "Data One Lakehouse",
      role: "Senior Data Engineer",
      duration: "Sep 2023 – Jul 2025",
      description: "Led cross-functional delivery of an enterprise Azure lakehouse designed to reduce analytical dependency on SAP HANA, implementing layered processing (landing, staging, business, interface).",
      impact: "Improved query performance, processing efficiency, and platform stability while enabling governed enterprise data access.",
      technologies: ["SAP HANA", "Azure Data Factory", "Azure Databricks", "PySpark", "FastAPI", "APIM"]
    },
    {
      title: "Foresight – AI Forecasting Platform",
      role: "Data Engineer",
      duration: "Jan 2023 – Aug 2023",
      description: "Modernized legacy R and Jupyter-based demand-forecasting workflows for Consumer Health stakeholders by migrating data processing and transformation activities to Azure Databricks.",
      impact: "Reduced processing time by ~15% and saved >20 hours of recurring manual effort per month.",
      technologies: ["Azure Databricks", "Python", "Feature Engineering", "Time-Series Transformations"]
    },
    {
      title: "AIA Marketing Intelligence Tool",
      role: "Data Engineer",
      duration: "Feb 2022 – Dec 2022",
      description: "Developed centralized data pipelines integrating structured and unstructured Pharma data for market-intelligence and stakeholder-mapping use cases.",
      impact: "Improved insight relevance by ~40% and stakeholder engagement by ~20%. Improved backend query performance by ~20%.",
      technologies: ["AWS Aurora PostgreSQL", "Python", "Flask", "TF-IDF", "LDA"]
    },
    {
      title: "Automated Scouting Tool",
      role: "Data Engineer",
      duration: "Jul 2021 – Jan 2022",
      description: "Designed a cloud-native application for automated scouting across healthcare datasets, implementing NLP-powered cognitive search and personalized dashboards.",
      impact: "Improved API response time by ~30% through backend optimization and troubleshooting.",
      technologies: ["FastAPI", "Flask", "REST APIs", "Cognitive Search"]
    }
  ],
  skills: [
    {
      title: "Cloud Platforms",
      icon: "Cloud",
      skills: ["Microsoft Azure", "AWS", "ADLS Gen2", "Event Hub", "Azure Functions", "APIM"]
    },
    {
      title: "Data Engineering",
      icon: "Database",
      skills: ["Azure Data Factory", "Azure Databricks", "Azure Synapse", "Snowflake", "SAP HANA"]
    },
    {
      title: "Programming",
      icon: "Code2",
      skills: ["Python", "PySpark", "SQL", "KQL", "PostgreSQL"]
    },
    {
      title: "Observability & FinOps",
      icon: "LineChart",
      skills: ["Azure Data Explorer", "Azure Monitor", "Grafana", "Plotly", "Materialized Views"]
    },
    {
      title: "AI & NLP",
      icon: "Brain",
      skills: ["Generative AI", "Agentic AI", "TF-IDF", "LDA", "Cognitive Search"]
    },
    {
      title: "Architecture",
      icon: "Layers",
      skills: ["Lakehouse", "Medallion Architecture", "Event-driven", "Azure RBAC"]
    }
  ],
  certifications: [
    "Databricks Certified Data Engineer – Professional",
    "Databricks Certified Generative AI Engineer – Associate",
    "Databricks Certified Data Engineer – Associate",
    "Microsoft Certified: Azure Data Engineer Associate",
    "Microsoft Certified: Fabric Analytics Engineer Associate",
    "Microsoft Certified: Azure Administrator Associate",
    "Lean Six Sigma Green Belt"
  ]
};
