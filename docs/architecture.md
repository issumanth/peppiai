# Peppi System Architecture

## 1. Overview

Peppi is an AI-powered emotional well-being and self-development companion.

The application provides users with a personalized space to:

- Explore emotions and personal patterns
- Communicate with an AI companion
- Develop skills
- Track personal progress
- Discover personalized content
- Customize their AI experience

Peppi is a non-clinical well-being and self-development application.
It does not diagnose or treat mental health conditions.

---

## 2. High-Level Architecture

```text
                    PEPPI MOBILE APP
                           │
                           │
              React Native + Expo
                           │
                           ▼
                    FastAPI Backend
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
       AI Layer        Database Layer    Auth Layer
          │                │                │
          │                ▼                ▼
          │            PostgreSQL       Supabase Auth
          │
          ├── Emotion Analysis
          ├── Context Analysis
          ├── AI Conversation
          ├── Memory
          ├── Recommendations
          ├── Skill Coaching
          ├── Voice Processing
          ├── Multilingual AI
          └── Safety Layer