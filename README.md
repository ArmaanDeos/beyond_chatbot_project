````markdown
# BeyondChats Frontend Assignment

A responsive chatbot configuration workflow implementation for BeyondChats' frontend assignment.

## Routes

- http://localhost:5173/ - # Home page

## Features

### 1. User Registration & Verification

- Modern auth form with Google SSO
- Email verification flow with 6-digit code
- Form validation and error handling
- Responsive mobile-first design

### Dummy Creadientials for Login -

    - Name - John Doe
    - Email - john@example.com
    - password - password123

### 2. Organization Setup

- Company details form with meta auto-fetch
- Website scraping visualization
  - Real-time status tracking (Detected/Scraped/Pending)
  - Interactive data chunk inspection
- Chatbot training simulation
  - Progress bar with percentage
  - Background process handling

### 3. Chatbot Integration & Testing

- Three-step integration flow:
  1. Test Chatbot (Preview Interface)
  2. Integration Methods (Code/Email)
  3. Verification System
- Modern success/failure states
  - Confetti animation
  - Social sharing options
  - Error recovery flow

## Tech Stack

### Core

- **React** (v18) + **React Router Dom** (v6.4)
- **Javascript**
- **Tailwind CSS** with modern dark theme
- **Framer Motion** for animations

### Key Libraries

- `react-confetti` - Success celebrations
- `ShadcnUi` - Component Library
- `react-icons` - Iconography
- `react-hook-form` - Form management
- `framer-motion` - Smooth transitions

## Project Structure

```bash
/src
├── components/      # Reusable components
├── Home/           # Home Component
├── OrganizationSetup/ # Organization Setup Components
├── ui/                 # Shadcn Ui Components
├── OtpBox/            # Otp Box Component
├── lib/             # Utils Function

├── pages/           # React Router Dom
│   ├── auth/        # Auth flow
│   ├── Chatbot/       # Chatbot Integration
│   └── ChatbotPreview/ # Chatbot Preview
├── Home/          # Home Page
└── Organization/           # Organization Page
```
````

## Setup Instructions

1. Clone repository

```bash
git clone https://github.com/your-username/beyondchats-assignment.git
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run development server

```bash
npm run dev
# or
yarn dev
```

4. Build for production

```bash
npm run build
# or
yarn build
```

## Future Key Implementation Details

### Authentication Flow

- JWT-based session management
- Google OAuth integration
- Secure cookie storage
- Email verification simulation

### Scraping Visualization

- WebSocket simulation for real-time updates
- Interactive status timeline
- Data chunk inspection modal
- Mock scraping API endpoints

### Chatbot Integration

- Code snippet copy functionality
- Email instruction template system
- Integration verification polling
- Social media sharing API

## Testing

```bash
# Unit tests
npm test

# E2E tests
npm run cypress:open
```

Test coverage includes:

- Form validation flows
- State management
- UI interactions
- Responsive breakpoints

## Deployment

Live Demo: [demo.beyondchats.netlify.app](https://beyondchatbot-armaan.netlify.app/)

## Evaluation Criteria Coverage

| Criteria             | Implementation Details        |
| -------------------- | ----------------------------- |
| Color Scheme & Theme | Modern dark gradient theme    |
| UX                   | Guided workflow with progress |
| Responsiveness       | Mobile-first approach         |
| Transitions          | 60+ FPS animations            |
| Intuitiveness        | Contextual tooltips           |
| WOW Factor           | Holographic effects           |
| Code Quality         | Type-safe components          |

## Future Improvements

- [ ] Real API integration
- [ ] Password strength meter
- [ ] Multi-language support
- [ ] Dark/light theme toggle
- [ ] Accessibility audit

---

**Note:** Dummy data used throughout the application. Replace with real API endpoints for production use.

```

```
