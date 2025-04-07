```mermaid
graph TB
subgraph Client Layer
Web[Web Application]
Mobile[Mobile Application]
API[API Clients]
end

    subgraph API Gateway
        ALB[Application Load Balancer]
        Auth[Authentication Service]
        Rate[Rate Limiter]
    end

    subgraph Core Services
        Jobs[Jobs Service]
        Users[Users Service]
        Search[Search Service]
        Notifications[Notification Service]
        Analytics[Analytics Service]
    end

    subgraph Data Layer
        PostgreSQL[(PostgreSQL)]
        ElasticSearch[(ElasticSearch)]
        Redis[(Redis Cache)]
        S3[(S3 Storage)]
    end

    subgraph Background Services
        Workers[Worker Processes]
        Scheduler[Job Scheduler]
    end

    Client Layer --> ALB
    ALB --> Auth
    Auth --> Rate
    Rate --> Core Services
    Core Services --> Data Layer
    Core Services --> Background Services
```
