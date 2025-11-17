/**
 * ConClick Analytics - White Label Branding Configuration
 *
 * This file contains all branding customization settings for the white-labeled
 * analytics platform. Modify these values to customize your instance.
 */

module.exports = {
  // Application Information
  app: {
    name: 'ConClick Analytics',
    shortName: 'ConClick',
    description: 'A modern, privacy-focused analytics platform for tracking user engagement and behavior.',
    tagline: 'Privacy-First Analytics, Insights That Matter',
    version: '1.0.0',
  },

  // Company Information
  company: {
    name: 'ConClick Inc.',
    url: 'https://conclick.io',
    supportEmail: 'support@conclick.io',
    salesEmail: 'sales@conclick.io',
  },

  // Branding Colors (CSS Variables)
  colors: {
    light: {
      primary: '#0066FF',           // Primary brand color
      primaryHover: '#0052CC',      // Primary hover state
      secondary: '#6B7280',         // Secondary color
      accent: '#10B981',            // Accent color for highlights
      background: '#FFFFFF',        // Main background
      surface: '#F9FAFB',           // Surface/card background
      border: '#E5E7EB',            // Border color
      text: '#111827',              // Primary text
      textSecondary: '#6B7280',     // Secondary text
      success: '#10B981',           // Success state
      warning: '#F59E0B',           // Warning state
      error: '#EF4444',             // Error state
      info: '#3B82F6',              // Info state
    },
    dark: {
      primary: '#3B82F6',           // Primary brand color (dark mode)
      primaryHover: '#2563EB',      // Primary hover state
      secondary: '#9CA3AF',         // Secondary color
      accent: '#34D399',            // Accent color
      background: '#0F172A',        // Main background
      surface: '#1E293B',           // Surface/card background
      border: '#334155',            // Border color
      text: '#F1F5F9',              // Primary text
      textSecondary: '#94A3B8',     // Secondary text
      success: '#34D399',           // Success state
      warning: '#FBBF24',           // Warning state
      error: '#F87171',             // Error state
      info: '#60A5FA',              // Info state
    },
  },

  // Typography
  typography: {
    fontFamily: {
      sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"Fira Code", "Courier New", monospace',
    },
  },

  // Feature Flags
  features: {
    enableRegistration: true,      // Allow new user registration
    enableTeams: true,              // Enable teams functionality
    enableSharing: true,            // Enable report sharing
    enableExport: true,             // Enable data export
    enableAPI: true,                // Enable API access
    showPoweredBy: false,           // Show "Powered by" footer
    enableTelemetry: false,         // Disable telemetry
    enableBotCheck: true,           // Enable bot filtering
  },

  // Tracker Configuration
  tracker: {
    scriptName: 'analytics.js',     // Custom tracker script name
    collectEndpoint: '/api/collect', // Custom collection endpoint
  },

  // Legal & Compliance
  legal: {
    privacyPolicyUrl: 'https://conclick.io/privacy',
    termsOfServiceUrl: 'https://conclick.io/terms',
    cookiePolicyUrl: 'https://conclick.io/cookies',
  },

  // Social Links
  social: {
    twitter: 'https://twitter.com/conclick',
    github: 'https://github.com/conclick',
    linkedin: 'https://linkedin.com/company/conclick',
    discord: null, // Set to null to hide
  },

  // Default Settings
  defaults: {
    language: 'en-US',
    timezone: 'UTC',
    dateFormat: 'YYYY-MM-DD',
    theme: 'light',
  },
};
