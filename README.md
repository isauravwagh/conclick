<p align="center">
  <img src="https://via.placeholder.com/100x100/0066FF/FFFFFF?text=C" alt="ConClick Logo" width="100">
</p>

<h1 align="center">ConClick Analytics</h1>

<p align="center">
  <i>Privacy-First Analytics, Insights That Matter</i>
</p>

<p align="center">
  <strong>A modern, privacy-focused analytics platform for tracking user engagement and behavior.</strong>
</p>

<p align="center">
  <a href="https://github.com/isauravwagh/conclick/releases">
    <img src="https://img.shields.io/github/release/isauravwagh/conclick.svg" alt="GitHub Release" />
  </a>
  <a href="https://github.com/isauravwagh/conclick/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/isauravwagh/conclick.svg" alt="MIT License" />
  </a>
  <a href="https://github.com/isauravwagh/conclick/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/isauravwagh/conclick/ci.yml" alt="Build Status" />
  </a>
</p>

---

## 🌟 About ConClick Analytics

ConClick Analytics is a white-labeled, privacy-focused web analytics platform built on the foundation of open-source excellence. We provide powerful insights while respecting user privacy and data ownership.

### ✨ Key Features

- 🔒 **Privacy-First**: No cookies, GDPR compliant, full data ownership
- 🚀 **Fast & Lightweight**: Minimal footprint, maximum performance
- 📊 **Comprehensive Analytics**: Track pageviews, events, user behavior, and more
- 🎨 **Custom Branding**: Fully white-labeled for your organization
- 🌐 **Multi-Website Support**: Manage multiple sites from one dashboard
- 📱 **Real-Time Data**: Live visitor tracking and real-time reports
- 📈 **Beautiful Dashboards**: Clean, intuitive interface with customizable reports
- 🔌 **Easy Integration**: Simple tracking script, works with any platform
- 🌍 **Self-Hosted**: Complete control over your data and infrastructure
- 🔓 **Open Source**: Built on open-source technology, MIT licensed

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.18 or newer
- **PostgreSQL** v12.14 or newer
- **Docker & Docker Compose** (recommended for easiest setup)

### Option 1: Docker Compose (Recommended)

The fastest way to get started:

```bash
# 1. Clone the repository
git clone https://github.com/isauravwagh/conclick.git
cd conclick

# 2. Copy and configure environment file
cp .env.example .env
# Edit .env and set APP_SECRET (generate with: openssl rand -base64 32)

# 3. Start with Docker Compose
docker compose up -d

# 4. Access the application
# Open http://localhost:3000
# Default login: admin / umami (change immediately!)
```

### Option 2: Install from Source

For development or custom deployments:

```bash
# 1. Clone the repository
git clone https://github.com/isauravwagh/conclick.git
cd conclick

# 2. Install dependencies
npm install -g pnpm
pnpm install

# 3. Configure environment
cp .env.example .env
# Edit .env with your database URL and APP_SECRET

# 4. Build the application
pnpm build

# 5. Start the application
pnpm start
```

---

## 📋 Installation Guide

For detailed installation instructions, see [INSTALLATION.md](./docs/INSTALLATION.md)

### Environment Configuration

Key environment variables to configure:

```env
# Database (Required)
DATABASE_URL=postgresql://user:password@localhost:5432/conclick

# Application Secret (Required) - Generate with: openssl rand -base64 32
APP_SECRET=your-random-secret-here

# Branding
APP_NAME=ConClick Analytics
COMPANY_NAME=ConClick Inc.

# Features
TRACKER_SCRIPT_NAME=analytics.js
DISABLE_TELEMETRY=true
DISABLE_UPDATES=true
```

---

## 🎨 Customization

ConClick Analytics is designed to be easily customized for your brand:

### Branding Configuration

Edit `branding.config.js` to customize:
- Application name and description
- Company information
- Brand colors (light/dark themes)
- Typography
- Feature flags
- Legal links

### White-Label Features

- ✅ Custom logo and favicon
- ✅ Custom color schemes
- ✅ Custom tracker script naming
- ✅ Remove all external branding
- ✅ Custom email templates
- ✅ Configurable features

See [CUSTOMIZATION.md](./docs/CUSTOMIZATION.md) for detailed customization guide.

---

## 📊 Using ConClick Analytics

### Adding Your Website

1. Login to your ConClick Analytics dashboard
2. Navigate to **Settings** → **Websites**
3. Click **Add Website**
4. Enter your website details
5. Copy the tracking code

### Installing the Tracking Code

Add this script to your website's `<head>` section:

```html
<script
  async
  src="http://your-domain.com/analytics.js"
  data-website-id="your-website-id"
></script>
```

### Tracking Events

Track custom events in your application:

```javascript
// Track a custom event
umami.track('button-click', { button: 'signup' });

// Track with custom properties
umami.track('purchase', {
  product: 'Premium Plan',
  value: 99.99
});
```

---

## 🔄 Updating

### Docker:
```bash
docker compose pull
docker compose up --force-recreate -d
```

### From Source:
```bash
git pull
pnpm install
pnpm build
pnpm start
```

---

## 🏗️ Architecture

ConClick Analytics is built with modern technologies:

- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: Node.js, Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: CSS Modules, PostCSS
- **Charts**: Chart.js
- **State Management**: Zustand
- **Authentication**: JWT

---

## 📖 Documentation

- [Installation Guide](./docs/INSTALLATION.md)
- [Customization Guide](./docs/CUSTOMIZATION.md)
- [API Documentation](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Troubleshooting](./docs/TROUBLESHOOTING.md)

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### Development

```bash
# Start development server
pnpm dev

# Run tests
pnpm test

# Lint code
pnpm lint

# Build for production
pnpm build
```

---

## 📝 License

ConClick Analytics is built on [Umami](https://github.com/umami-software/umami) and maintains the MIT License.

```
MIT License

Copyright (c) 2024 ConClick Inc.
Based on Umami by Umami Software, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

See [LICENSE](./LICENSE) for full details.

---

## 🛟 Support

<p align="center">
  <a href="https://github.com/isauravwagh/conclick">
    <img src="https://img.shields.io/badge/GitHub--blue?style=social&logo=github" alt="GitHub" />
  </a>
  <a href="https://twitter.com/conclick">
    <img src="https://img.shields.io/badge/Twitter--blue?style=social&logo=twitter" alt="Twitter" />
  </a>
  <a href="https://linkedin.com/company/conclick">
    <img src="https://img.shields.io/badge/LinkedIn--blue?style=social&logo=linkedin" alt="LinkedIn" />
  </a>
</p>

### Getting Help

- 📧 Email: [support@conclick.io](mailto:support@conclick.io)
- 🌐 Website: [https://conclick.io](https://conclick.io)
- 📚 Documentation: [https://docs.conclick.io](https://docs.conclick.io)
- 🐛 Issues: [GitHub Issues](https://github.com/isauravwagh/conclick/issues)

---

## 🙏 Acknowledgments

ConClick Analytics is built upon the excellent work of [Umami Analytics](https://umami.is/), an open-source, privacy-focused analytics platform. We're grateful to the Umami team and contributors for creating such a solid foundation.

---

<p align="center">
  Made with ❤️ by ConClick Inc.
</p>
