# ConClick Analytics - Customization Guide

This guide explains how to customize ConClick Analytics to match your brand identity.

## Table of Contents

- [Overview](#overview)
- [Branding Configuration](#branding-configuration)
- [Visual Customization](#visual-customization)
- [Feature Configuration](#feature-configuration)
- [Advanced Customization](#advanced-customization)

---

## Overview

ConClick Analytics is designed to be easily white-labeled. All customization settings are centralized in configuration files, making it simple to maintain and update.

---

## Branding Configuration

### Primary Configuration File

Edit `branding.config.js` in the root directory:

```javascript
module.exports = {
  // Application Information
  app: {
    name: 'Your Analytics Platform',
    shortName: 'YourAnalytics',
    description: 'Your custom description',
    tagline: 'Your tagline here',
    version: '1.0.0',
  },

  // Company Information
  company: {
    name: 'Your Company Inc.',
    url: 'https://yourcompany.com',
    supportEmail: 'support@yourcompany.com',
    salesEmail: 'sales@yourcompany.com',
  },

  // ... more settings
};
```

### Environment Variables

Override branding in `.env`:

```env
# Application Branding
APP_NAME=Your Analytics Platform
COMPANY_NAME=Your Company Inc.
COMPANY_URL=https://yourcompany.com
SUPPORT_EMAIL=support@yourcompany.com

# Tracker Configuration
TRACKER_SCRIPT_NAME=your-tracker.js
COLLECT_API_ENDPOINT=/api/your-endpoint
```

---

## Visual Customization

### Colors and Theme

#### 1. Edit CSS Variables

Modify `src/styles/variables.css`:

```css
html body {
  /* Your Primary Brand Color */
  --primary-color: #YOUR_COLOR;
  --primary-color-hover: #YOUR_HOVER_COLOR;

  /* Accent Color */
  --accent-color: #YOUR_ACCENT;

  /* Chart Colors */
  --chart-color-1: #COLOR_1;
  --chart-color-2: #COLOR_2;
  /* ... more colors */
}
```

#### 2. Available Color Variables

```css
/* Primary Colors */
--primary-color
--primary-color-hover
--primary-color-active

/* Accent Colors */
--accent-color
--accent-color-hover

/* Status Colors */
--success-color
--warning-color
--error-color
--info-color

/* Chart Colors (8 colors for visualizations) */
--chart-color-1 through --chart-color-8
```

### Logo and Favicon

#### 1. Add Your Logo

```bash
# Place your logo files in public/images/
public/
  images/
    logo.svg          # Main logo
    logo-light.svg    # Light theme logo
    logo-dark.svg     # Dark theme logo
    icon.png          # App icon
```

#### 2. Update Logo Component

Edit the logo component (location may vary by version):

```typescript
// src/components/layout/Logo.tsx
export default function Logo() {
  return (
    <img
      src="/images/logo.svg"
      alt="Your Brand"
      className="logo"
    />
  );
}
```

#### 3. Replace Favicon

```bash
# Replace these files in public/:
public/
  favicon.ico
  favicon-16x16.png
  favicon-32x32.png
  apple-touch-icon.png
```

### Typography

#### 1. Add Custom Fonts

```css
/* src/styles/fonts.css */
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

:root {
  --font-family: 'Your Font', -apple-system, sans-serif;
  --font-mono: 'Your Mono Font', monospace;
}
```

#### 2. Configure in branding.config.js

```javascript
typography: {
  fontFamily: {
    sans: 'Your Font, sans-serif',
    mono: 'Your Mono Font, monospace',
  },
},
```

---

## Feature Configuration

### Enable/Disable Features

In `branding.config.js`:

```javascript
features: {
  enableRegistration: true,      // User registration
  enableTeams: true,              // Teams functionality
  enableSharing: true,            // Report sharing
  enableExport: true,             // Data export
  enableAPI: true,                // API access
  showPoweredBy: false,           // "Powered by" footer
  enableTelemetry: false,         // Analytics telemetry
  enableBotCheck: true,           // Bot filtering
},
```

Or via environment variables:

```env
DISABLE_BOT_CHECK=false
DISABLE_TELEMETRY=true
DISABLE_UPDATES=true
CLOUD_MODE=false
DISABLE_LOGIN=false
```

### Tracker Configuration

#### Custom Script Name

Helps bypass ad blockers by using a non-standard name:

```env
TRACKER_SCRIPT_NAME=analytics.js    # or collect.js, stats.js, etc.
```

#### Custom Collection Endpoint

```env
COLLECT_API_ENDPOINT=/api/collect  # or /api/send, /api/track, etc.
```

### Legal Links

In `branding.config.js`:

```javascript
legal: {
  privacyPolicyUrl: 'https://yourcompany.com/privacy',
  termsOfServiceUrl: 'https://yourcompany.com/terms',
  cookiePolicyUrl: 'https://yourcompany.com/cookies',
},
```

### Social Links

```javascript
social: {
  twitter: 'https://twitter.com/yourcompany',
  github: 'https://github.com/yourcompany',
  linkedin: 'https://linkedin.com/company/yourcompany',
  discord: null, // Set to null to hide
},
```

---

## Advanced Customization

### Custom Dashboard Layout

#### 1. Create Custom Component

```typescript
// src/components/custom/CustomDashboard.tsx
export default function CustomDashboard() {
  return (
    <div className="custom-dashboard">
      {/* Your custom dashboard layout */}
    </div>
  );
}
```

#### 2. Replace Default Dashboard

Modify the main dashboard page to use your custom component.

### Custom Reports

#### 1. Create Custom Report Type

```typescript
// src/lib/reports/custom-report.ts
export async function generateCustomReport(websiteId: string, params: any) {
  // Your custom report logic
  return {
    data: [],
    summary: {},
  };
}
```

#### 2. Add to Reports Menu

Update navigation to include your custom report.

### Email Templates

#### 1. Create Template Directory

```bash
mkdir -p src/templates/email
```

#### 2. Create Custom Templates

```html
<!-- src/templates/email/welcome.html -->
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Your email styles */
  </style>
</head>
<body>
  <h1>Welcome to {{APP_NAME}}!</h1>
  <!-- Your email content -->
</body>
</html>
```

### Language Customization

#### 1. Update Language Files

```javascript
// src/lang/en-US.json
{
  "app.name": "Your Analytics Platform",
  "app.description": "Your description",
  "dashboard.welcome": "Welcome to Your Analytics",
  // ... more translations
}
```

#### 2. Add New Language

```bash
# Create new language file
cp src/lang/en-US.json src/lang/es-ES.json

# Edit translations
nano src/lang/es-ES.json
```

### Custom Authentication

#### 1. Add OAuth Provider

```typescript
// src/lib/auth/oauth-providers.ts
export const customProvider = {
  name: 'Custom Provider',
  clientId: process.env.CUSTOM_OAUTH_CLIENT_ID,
  clientSecret: process.env.CUSTOM_OAUTH_SECRET,
  // ... configuration
};
```

#### 2. Configure Environment

```env
CUSTOM_OAUTH_CLIENT_ID=your-client-id
CUSTOM_OAUTH_SECRET=your-client-secret
CUSTOM_OAUTH_REDIRECT_URI=https://your-domain.com/auth/callback
```

### Custom Metrics

#### 1. Define Custom Event Types

```typescript
// src/lib/types/custom-events.ts
export enum CustomEventType {
  SIGNUP = 'signup',
  PURCHASE = 'purchase',
  TRIAL_START = 'trial_start',
  // ... your custom events
}
```

#### 2. Track Custom Events

```javascript
// In your application
umami.track('purchase', {
  product: 'Premium Plan',
  value: 99.99,
  currency: 'USD',
});
```

---

## Build Your Custom Docker Image

After customization, build your own Docker image:

### 1. Create Custom Dockerfile

```dockerfile
# Dockerfile.custom
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json pnpm-lock.yaml ./
COPY branding.config.js ./

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build with customizations
RUN pnpm build

# Production image
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["pnpm", "start"]
```

### 2. Build and Tag

```bash
# Build your custom image
docker build -f Dockerfile.custom -t yourcompany/analytics:latest .

# Tag for versioning
docker tag yourcompany/analytics:latest yourcompany/analytics:v1.0.0

# Push to registry (optional)
docker push yourcompany/analytics:latest
docker push yourcompany/analytics:v1.0.0
```

### 3. Update docker-compose.yml

```yaml
services:
  conclick:
    image: yourcompany/analytics:latest
    # ... rest of configuration
```

---

## Testing Your Customizations

### 1. Development Mode

```bash
# Start in development mode to see changes live
pnpm dev
```

### 2. Test Build

```bash
# Test production build
pnpm build
pnpm start
```

### 3. Docker Test

```bash
# Test Docker build
docker build -t test-analytics .
docker run -p 3000:3000 test-analytics
```

---

## Customization Checklist

- [ ] Update `branding.config.js` with your information
- [ ] Modify `src/styles/variables.css` with your colors
- [ ] Replace logo files in `public/images/`
- [ ] Update favicon files
- [ ] Configure `.env` with your settings
- [ ] Update language files with your branding
- [ ] Test tracker script with custom name
- [ ] Update legal links (privacy, terms)
- [ ] Remove or update social links
- [ ] Test custom color scheme in light/dark mode
- [ ] Build and test Docker image
- [ ] Update documentation with your details

---

## Best Practices

1. **Version Control**: Keep your customizations in version control
2. **Environment-Based**: Use environment variables for environment-specific settings
3. **Documentation**: Document your custom changes
4. **Testing**: Test thoroughly before deploying
5. **Backup**: Keep backups of original files
6. **Updates**: Plan for upstream updates from Umami

---

## Need Help?

- 📧 Email: [support@conclick.io](mailto:support@conclick.io)
- 🐛 Issues: [GitHub Issues](https://github.com/isauravwagh/conclick/issues)
- 📚 Documentation: [https://docs.conclick.io](https://docs.conclick.io)
