# Changelog

All notable changes to ConClick Analytics (white-label version of Umami) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-11-17

### Added - White-Label Customization

#### Branding & Configuration
- ✨ Created `branding.config.js` - Centralized branding configuration file
- ✨ Created `.env.example` - Comprehensive environment configuration template
- ✨ Custom ConClick Analytics branding throughout the application
- ✨ Configurable color schemes for light and dark modes
- ✨ Company information and contact details configuration

#### Visual Identity
- 🎨 Updated CSS variables in `src/styles/variables.css` with ConClick brand colors
- 🎨 Custom primary color: #0066FF (ConClick Blue)
- 🎨 Custom accent color: #10B981 (ConClick Green)
- 🎨 Custom chart color palette (8 colors)
- 🎨 Dark mode theme with adjusted colors

#### Application Metadata
- 📝 Updated `package.json` with ConClick Analytics identity
  - Name: conclick-analytics
  - Version: 1.0.0
  - Author: ConClick Inc.
  - Repository: https://github.com/isauravwagh/conclick
- 📝 Updated `README.md` with comprehensive ConClick Analytics documentation
- 📝 Created `QUICKSTART.md` for rapid deployment guide

#### Docker Configuration
- 🐳 Updated `docker-compose.yml` with ConClick branding
- 🐳 Service name changed from "umami" to "conclick"
- 🐳 Database name changed to "conclick"
- 🐳 Volume name changed to "conclick-db-data"
- 🐳 Added ConClick-specific environment variables
- 🐳 Enhanced security configurations and health checks
- 🐳 Added detailed comments for production deployment

#### Documentation
- 📚 Created `docs/INSTALLATION.md` - Complete installation guide
  - Docker Compose installation
  - Source installation
  - Cloud deployment options (Vercel, DigitalOcean, AWS)
  - Post-installation setup
  - Troubleshooting guide
- 📚 Created `docs/CUSTOMIZATION.md` - Comprehensive customization guide
  - Branding configuration
  - Visual customization (colors, logos, typography)
  - Feature configuration
  - Advanced customization (custom reports, email templates)
  - Language customization
  - Custom authentication
  - Docker image building
- 📚 Created `docs/WHITE_LABEL_GUIDE.md` - Complete white-labeling strategy
  - Step-by-step white-labeling process
  - Distribution strategies (SaaS, Self-hosted, Agency)
  - Maintenance and updates
  - Legal considerations
  - Marketing guidance
  - Success metrics

#### Features
- ⚙️ Configurable tracker script name (bypasses ad blockers)
- ⚙️ Configurable collection endpoint
- ⚙️ Privacy-focused defaults (telemetry disabled, updates disabled)
- ⚙️ Feature flags for enabling/disabling functionality
- ⚙️ Legal links configuration (Privacy Policy, Terms, Cookies)
- ⚙️ Social links configuration

#### Developer Experience
- 🛠️ Centralized configuration for easy branding updates
- 🛠️ Clear documentation for all customization points
- 🛠️ Environment variable overrides for all settings
- 🛠️ Comprehensive examples and templates

### Changed

#### From Umami to ConClick Analytics
- 🔄 Application name: "Umami" → "ConClick Analytics"
- 🔄 Tagline: Updated to "Privacy-First Analytics, Insights That Matter"
- 🔄 Package name: "umami" → "conclick-analytics"
- 🔄 Repository references updated
- 🔄 Support email: Updated to ConClick Inc. contacts
- 🔄 Company information: Updated throughout

#### Visual Updates
- 🔄 Primary color scheme updated to ConClick brand colors
- 🔄 Logo placeholder created (customizable)
- 🔄 README badges updated with ConClick repository

#### Configuration Updates
- 🔄 Default database name: "umami" → "conclick"
- 🔄 Default tracker script: "script.js" → "analytics.js"
- 🔄 Default telemetry: enabled → disabled
- 🔄 Default updates check: enabled → disabled

### Technical Details

#### File Changes
```
Modified:
  - package.json
  - README.md
  - docker-compose.yml
  - src/styles/variables.css

Created:
  - branding.config.js
  - .env.example
  - QUICKSTART.md
  - CHANGELOG.md
  - docs/INSTALLATION.md
  - docs/CUSTOMIZATION.md
  - docs/WHITE_LABEL_GUIDE.md
```

#### Environment Variables Added
```
APP_NAME
COMPANY_NAME
COMPANY_URL
SUPPORT_EMAIL
TRACKER_SCRIPT_NAME
COLLECT_API_ENDPOINT
DISABLE_TELEMETRY
DISABLE_UPDATES
```

### Upgrade Notes

This is the initial white-label release based on Umami v3.0.0.

If you're coming from vanilla Umami:
1. Review `branding.config.js` for customization options
2. Update `.env` with your branding details
3. Rebuild Docker images or run `pnpm build`
4. Update your reverse proxy configuration if domain/paths changed

### Acknowledgments

ConClick Analytics is built upon the excellent work of [Umami Analytics](https://umami.is/).
We're grateful to the Umami team and contributors for creating such a solid foundation.

### License

MIT License - See LICENSE file for details.

Copyright (c) 2024 ConClick Inc.
Based on Umami by Umami Software, Inc.

---

## [Unreleased]

### Planned Features
- 🔮 Custom logo upload UI
- 🔮 Advanced white-label theme builder
- 🔮 Multi-tenant support
- 🔮 Custom email templates
- 🔮 Advanced API customization
- 🔮 Custom report builder
- 🔮 Webhook integrations
- 🔮 SSO integrations (SAML, OAuth)

---

For more information, visit: https://github.com/isauravwagh/conclick
