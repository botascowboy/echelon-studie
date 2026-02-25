# Astro SSR Implementation for Clinical Trials Platform

This document summarizes the server-side rendering implementation for the Echelon Clinical Studies platform.

## Architecture Overview

### Backend (Edge Functions)
- **Framework**: Astro SSR with server-side rendering
- **Database**: libSQL/Turso (SQLite for the edge)
- **API Style**: RESTful endpoints using Astro's file-based routing

### Frontend
- **Framework**: Astro with islands architecture
- **Styling**: Tailwind CSS 4.x
- **Components**: Astro components (.astro) with vanilla JavaScript
- **Icons**: Lucide (via SVG)

## API Endpoints

### `/api/trials`
- **Method**: `GET`
- **Query Params**:
  - `page`: Page number (default: 1)
  - `pageSize`: Items per page (default: 9)
  - `q`: Search query
  - `location`: City/State filter
  - `phase`: Trial phase filter (PHASE1, PHASE2, PHASE3)
  - `compensation`: Paid studies filter (true/false)
  - `featured`: Return only featured trials
- **Response**: JSON with trials array, pagination info

### `/api/trials/[nctId]`
- **Method**: `GET`
- **Response**: Detailed trial information with AI-enriched fields

### `/api/stats`
- **Method**: `GET`
- **Response**: Platform statistics (total trials, by phase, by location)

### `/api/chat`
- **Method**: `POST`
- **Body**: `{ message: string, context?: object }`
- **Response**: AI-generated response about clinical trials
- **AI Model**: OpenAI GPT-4o-mini

### `/api/prescreen`
- **Method**: `POST`
- **Body**: `{ trialId: string, answers: object }`
- **Response**: Eligibility assessment with AI analysis
- **AI Model**: OpenAI GPT-4o-mini

## Database Schema

### `trials` Table
Core table storing clinical trial information:
- `nct_id` (TEXT, UNIQUE): ClinicalTrials.gov identifier
- `title`, `official_title`: Study names
- `brief_summary`, `detailed_description`: AI-enriched descriptions
- `overall_status`, `phase`: Recruitment status
- `eligibility_criteria`, `eligibility_summary_*`: Patient criteria
- `primary_location_*`: Main study site
- `has_compensation`, `compensation_amount`: Payment info
- `ai_summary`, `ai_tags`: AI-generated metadata
- `weight_loss_relevance_score`: Custom relevance metric

### Supporting Tables
- `trial_locations`: Multiple study sites
- `trial_contacts`: Study team contacts
- `patient_interests`: Interested participants
- `user_alerts`: Notification preferences
- `sync_logs`: Data synchronization tracking

## Components

### StudiesGrid.astro
- **Purpose**: Display paginated trial listings
- **Features**:
  - Real-time search and filtering
  - Responsive grid layout
  - Loading skeletons
  - Empty state handling
  - Client-side pagination

### ChatBot.astro
- **Purpose**: AI-powered trial assistant
- **Features**:
  - Floating chat button
  - Full-screen chat interface
  - Pre-defined quick questions
  - OpenAI integration for responses
  - Bilingual support (EN/ES)

### PreScreener.astro
- **Purpose**: Multi-step eligibility checker
- **Features**:
  - 5-question flow
  - Progress indicator
  - Conditional logic
  - AI-powered results
  - Email capture

### [nctId].astro (Trial Detail Page)
- **Purpose**: Individual trial information
- **Features**:
  - Dynamic routing
  - AI-enriched content display
  - Location mapping
  - Compensation details
  - Pre-screener integration

## Animation System

### Tailwind Animations
```css
/* Pulse for indicators */
.animate-pulse

/* Float for decorative elements */
.animate-float

/* Fade in for content */
.animate-fade-in

/* Bounce for typing indicators */
.animate-bounce
```

### Custom Keyframes
- `float`: Vertical floating animation
- `shake`: Error indication
- `fadeIn`: Content reveal
- `pulse`: Attention indicators
- `bounce`: Loading states

## Environment Variables

Required environment variables:
```env
# Database
TURSO_DATABASE_URL=libsql://...
TURSO_AUTH_TOKEN=

# AI
OPENAI_API_KEY=sk-...
```

## File Structure

```
src/
├── components/
│   ├── ChatBot.astro
│   ├── PreScreener.astro
│   ├── StudiesGrid.astro
│   └── ...
├── pages/
│   ├── api/
│   │   ├── trials.astro
│   │   ├── prescreen.astro
│   │   └── ...
│   ├── trial/
│   │   └── [nctId].astro
│   └── ...
├── lib/
│   └── db/
│       └── operations.ts
└── styles/
    └── global.css
```

## Deployment

The application is configured for Cloudflare Pages with:
- SSR adapter: `@astrojs/cloudflare`
- Database: Turso (libSQL)
- Edge runtime: Cloudflare Workers

## Security Considerations

1. **API Keys**: Stored in environment variables, never exposed client-side
2. **CORS**: Configured for allowed origins only
3. **Input Validation**: All user inputs sanitized before processing
4. **SQL Injection**: Parameterized queries used throughout
5. **XSS Protection**: Content escaped in templates

## Performance

- **Edge Rendering**: SSR at the edge for minimal latency
- **Database**: Indexed queries for fast lookups
- **Assets**: Optimized images and fonts
- **JavaScript**: Minimal client-side JS with islands architecture

## Monitoring

- Error logging to console (extend to monitoring service)
- Request/response timing
- Database query performance
- AI API usage tracking

---

Built with ❤️ using Astro, Tailwind CSS, and libSQL.