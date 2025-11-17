# shadcn/ui Implementation Guide for ConClick Analytics

This document provides a comprehensive guide for transforming ConClick Analytics into a top-tier, polished SaaS application using **shadcn/ui**.

## Table of Contents

- [Overview](#overview)
- [Setup Complete](#setup-complete)
- [Architecture](#architecture)
- [Component Library](#component-library)
- [Implementation Plan](#implementation-plan)
- [Installing Components](#installing-components)
- [Examples](#examples)
- [Design System](#design-system)
- [Next Steps](#next-steps)

---

## Overview

**shadcn/ui** is a collection of beautifully designed, accessible, and customizable React components built with Radix UI and Tailwind CSS. Unlike traditional component libraries, shadcn/ui components are copied directly into your project, giving you complete control and ownership.

### Why shadcn/ui?

- ✅ **Beautiful by default** - Modern, polished design out of the box
- ✅ **Fully customizable** - Components live in your codebase
- ✅ **Accessible** - Built with Radix UI primitives (WCAG compliant)
- ✅ **Type-safe** - Full TypeScript support
- ✅ **No vendor lock-in** - You own the code
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Dark mode** - Built-in dark mode support

---

## Setup Complete ✅

The following has been configured and is ready to use:

### 1. Configuration Files

#### `components.json`
```json
{
  "style": "new-york",    // Modern, clean style
  "rsc": true,            // React Server Components support
  "tsx": true,            // TypeScript
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "blue",  // ConClick Blue
    "cssVariables": true  // Use CSS variables for theming
  }
}
```

#### `tailwind.config.ts`
- ✅ ConClick brand colors configured
- ✅ Custom animations added
- ✅ Typography setup
- ✅ Chart colors defined
- ✅ Dark mode support

#### `src/app/globals.css`
- ✅ Tailwind directives
- ✅ CSS variables for theming
- ✅ Light and dark mode colors
- ✅ Custom utility classes
- ✅ Scrollbar styling
- ✅ Gradient utilities

#### `src/lib/utils.ts`
- ✅ `cn()` function for className merging
- ✅ Utility functions for formatting
- ✅ Helper functions

### 2. Color System

#### Light Mode
```css
--primary: 217 100% 50%         /* #0066FF - ConClick Blue */
--accent: 158 84% 39%           /* #10B981 - ConClick Green */
```

#### Dark Mode
```css
--primary: 217 91% 60%          /* #3B82F6 - Lighter Blue */
--accent: 158 64% 52%           /* #34D399 - Lighter Green */
```

#### Chart Colors (8 colors)
1. **Blue** (#0066FF) - Primary ConClick color
2. **Green** (#10B981) - Accent color
3. **Amber** (#F59E0B)
4. **Purple** (#8B5CF6)
5. **Pink** (#EC4899)
6. **Teal** (#14B8A6)
7. **Orange** (#F97316)
8. **Indigo** (#6366F1)

---

## Architecture

### Directory Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── table.tsx
│   │   ├── chart.tsx
│   │   └── ...
│   ├── dashboard/             # Dashboard-specific components
│   │   ├── overview-stats.tsx
│   │   ├── traffic-chart.tsx
│   │   ├── top-pages.tsx
│   │   └── ...
│   ├── analytics/             # Analytics components
│   └── layout/                # Layout components
│       ├── app-sidebar.tsx
│       ├── app-header.tsx
│       └── ...
├── app/
│   ├── (main)/                # Main app routes
│   │   ├── dashboard/
│   │   ├── analytics/
│   │   ├── settings/
│   │   └── ...
│   ├── (auth)/                # Authentication routes
│   │   ├── login/
│   │   └── signup/
│   ├── globals.css
│   └── layout.tsx
└── lib/
    ├── utils.ts               # Utility functions
    └── ...
```

---

## Component Library

### Core Components to Install

Use the shadcn/ui CLI to install components:

```bash
# Install all components at once
npx shadcn-ui@latest add button card dialog dropdown-menu \
  table input label select checkbox radio-group switch \
  tabs accordion alert badge avatar calendar popover \
  tooltip separator sheet sidebar scroll-area command

# Or install individually as needed
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
# etc.
```

### Essential Components

#### 1. Layout & Navigation
- `sidebar` - Modern collapsible sidebar
- `sheet` - Slide-over panels
- `command` - Command palette (⌘K)
- `tabs` - Tab navigation
- `breadcrumb` - Breadcrumb navigation

#### 2. Data Display
- `card` - Container for content
- `table` - Data tables with sorting/filtering
- `badge` - Status indicators
- `avatar` - User avatars
- `calendar` - Date picker
- `chart` - Recharts integration

#### 3. Forms & Inputs
- `input` - Text inputs
- `textarea` - Multi-line input
- `select` - Dropdown selects
- `checkbox` - Checkboxes
- `radio-group` - Radio buttons
- `switch` - Toggle switches
- `slider` - Range sliders
- `date-picker` - Date selection

#### 4. Feedback
- `dialog` - Modals
- `alert-dialog` - Confirmation dialogs
- `toast` - Toast notifications
- `alert` - Alert messages
- `progress` - Progress bars
- `skeleton` - Loading skeletons

#### 5. Overlays
- `dropdown-menu` - Dropdown menus
- `popover` - Popovers
- `tooltip` - Tooltips
- `hover-card` - Hover cards
- `context-menu` - Right-click menus

---

## Implementation Plan

### Phase 1: Core Components (Week 1)

#### Install Essential Components
```bash
npx shadcn-ui@latest add button card input label
npx shadcn-ui@latest add dialog dropdown-menu table
npx shadcn-ui@latest add badge avatar tooltip
```

#### Create Layout
1. **App Sidebar** - Modern collapsible sidebar with navigation
2. **App Header** - Top navigation bar with user menu
3. **Page Layout** - Container for dashboard pages

### Phase 2: Authentication (Week 1)

#### Login Page
```typescript
// src/app/(auth)/login/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            Welcome back
          </CardTitle>
          <CardDescription>
            Sign in to ConClick Analytics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
              />
            </div>
            <Button className="w-full gradient-primary">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Phase 3: Dashboard (Week 2)

#### Overview Stats Component
```typescript
// src/components/dashboard/overview-stats.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, MousePointerClick, Clock } from "lucide-react"

const stats = [
  {
    title: "Total Visitors",
    value: "45,231",
    change: "+20.1%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Page Views",
    value: "123,456",
    change: "+15.3%",
    trend: "up",
    icon: MousePointerClick,
  },
  {
    title: "Avg. Session",
    value: "3m 42s",
    change: "-2.4%",
    trend: "down",
    icon: Clock,
  },
  {
    title: "Bounce Rate",
    value: "42.5%",
    change: "-5.2%",
    trend: "up",
    icon: TrendingUp,
  },
]

export function OverviewStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="card-interactive">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${
              stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
```

### Phase 4: Analytics (Week 2)

#### Charts
```bash
# Install chart components
npx shadcn-ui@latest add chart
```

#### Traffic Chart
```typescript
// src/components/dashboard/traffic-chart.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { date: "Jan", visitors: 4000 },
  { date: "Feb", visitors: 3000 },
  { date: "Mar", visitors: 5000 },
  { date: "Apr", visitors: 4500 },
  { date: "May", visitors: 6000 },
  { date: "Jun", visitors: 5500 },
]

export function TrafficChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Visitor Trend</CardTitle>
        <CardDescription>Monthly visitors over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{
          visitors: {
            label: "Visitors",
            color: "hsl(var(--chart-1))",
          },
        }}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <ChartTooltip />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

### Phase 5: Data Tables (Week 3)

#### Top Pages Table
```bash
npx shadcn-ui@latest add table
```

```typescript
// src/components/analytics/top-pages-table.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const pages = [
  { page: "/", views: 12345, bounce: "42%", avgTime: "3:24" },
  { page: "/pricing", views: 8901, bounce: "38%", avgTime: "4:12" },
  { page: "/blog", views: 5432, bounce: "51%", avgTime: "2:45" },
  { page: "/docs", views: 3210, bounce: "29%", avgTime: "5:33" },
]

export function TopPagesTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Page</TableHead>
            <TableHead className="text-right">Views</TableHead>
            <TableHead className="text-right">Bounce Rate</TableHead>
            <TableHead className="text-right">Avg. Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pages.map((page) => (
            <TableRow key={page.page}>
              <TableCell className="font-medium">{page.page}</TableCell>
              <TableCell className="text-right">{page.views.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <Badge variant="secondary">{page.bounce}</Badge>
              </TableCell>
              <TableCell className="text-right">{page.avgTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

### Phase 6: Settings & Forms (Week 3)

#### Website Settings Form
```typescript
// src/app/(main)/settings/website/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function WebsiteSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Website Settings</h1>
        <p className="text-muted-foreground">
          Manage your website tracking configuration
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General</CardTitle>
          <CardDescription>
            Basic website information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Website Name</Label>
            <Input id="name" placeholder="My Website" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="domain">Domain</Label>
            <Input id="domain" placeholder="example.com" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enable Tracking</Label>
              <p className="text-sm text-muted-foreground">
                Collect analytics data for this website
              </p>
            </div>
            <Switch />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  )
}
```

---

## Installing Components

### Method 1: CLI (Recommended)

```bash
# Install a single component
npx shadcn-ui@latest add button

# Install multiple components
npx shadcn-ui@latest add button card dialog

# Install all components
npx shadcn-ui@latest add --all
```

### Method 2: Manual Installation

1. Go to [ui.shadcn.com](https://ui.shadcn.com)
2. Browse components
3. Click "Installation"
4. Copy the component code
5. Paste into `src/components/ui/[component-name].tsx`
6. Install any required dependencies

---

## Design System

### Typography

```typescript
// Headings
<h1 className="text-4xl font-bold">Heading 1</h1>
<h2 className="text-3xl font-bold">Heading 2</h2>
<h3 className="text-2xl font-bold">Heading 3</h3>
<h4 className="text-xl font-semibold">Heading 4</h4>

// Body text
<p className="text-base">Regular text</p>
<p className="text-sm text-muted-foreground">Secondary text</p>
<p className="text-xs text-muted-foreground">Caption</p>
```

### Spacing

```typescript
// Consistent spacing
<div className="space-y-4">  // Vertical spacing
<div className="space-x-4">  // Horizontal spacing
<div className="gap-4">      // Grid/Flex gap
```

### Colors

```typescript
// Text colors
<span className="text-primary">Primary text</span>
<span className="text-secondary">Secondary text</span>
<span className="text-muted-foreground">Muted text</span>

// Background colors
<div className="bg-primary">Primary background</div>
<div className="bg-accent">Accent background</div>
<div className="bg-card">Card background</div>

// Border colors
<div className="border border-border">With border</div>
```

### Buttons

```typescript
// Variants
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>

// With icons
<Button>
  <PlusIcon className="mr-2 h-4 w-4" />
  Add Website
</Button>
```

### Cards

```typescript
// Basic card
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Interactive card
<Card className="card-interactive">
  {/* Adds hover effect */}
</Card>
```

---

## Next Steps

### Immediate Actions

1. **Install Dependencies**
   ```bash
   cd /home/user/conclick
   pnpm install tailwindcss-animate clsx tailwind-merge
   pnpm install lucide-react  # Icon library
   pnpm install recharts       # Charts library
   ```

2. **Install Core Components**
   ```bash
   npx shadcn-ui@latest add button card input label
   npx shadcn-ui@latest add dialog dropdown-menu
   npx shadcn-ui@latest add table badge avatar
   ```

3. **Update Next.js Config**
   Add Tailwind to your build:
   ```typescript
   // next.config.ts
   // Tailwind is automatically included with Next.js 13+
   ```

4. **Import Global CSS**
   Make sure `src/app/globals.css` is imported in your root layout:
   ```typescript
   // src/app/layout.tsx
   import './globals.css'
   ```

### Development Workflow

1. **Design in Figma** (optional but recommended)
   - Sketch out pages
   - Define component hierarchy
   - Plan user flows

2. **Build Component by Component**
   - Start with smallest components (buttons, inputs)
   - Build up to composite components (forms, cards)
   - Finally create full pages

3. **Test Responsiveness**
   - Mobile-first approach
   - Test all breakpoints (sm, md, lg, xl, 2xl)
   - Use responsive utilities (`hidden md:block`)

4. **Add Interactions**
   - Hover states
   - Loading states
   - Error states
   - Empty states

5. **Optimize Performance**
   - Use React Server Components where possible
   - Lazy load heavy components
   - Optimize images

### Resources

- **shadcn/ui Documentation**: https://ui.shadcn.com
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Radix UI Docs**: https://www.radix-ui.com/docs/primitives
- **Lucide Icons**: https://lucide.dev
- **Recharts**: https://recharts.org

---

## Migration Strategy

### Progressive Enhancement

Don't try to rebuild everything at once. Migrate page by page:

1. **Start with Auth Pages** (login, signup) - Isolated, simple
2. **Build New Dashboard** - Most visible, high impact
3. **Settings Pages** - Forms and inputs
4. **Analytics Pages** - Charts and tables
5. **Admin Pages** - Complex data management

### Coexistence Strategy

- Keep old components in separate directory (`components/legacy/`)
- New components go in `components/ui/`
- Gradually replace old with new
- Use feature flags if needed

---

## Tips & Best Practices

### 1. Use the `cn()` Utility

```typescript
import { cn } from "@/lib/utils"

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className // Allow prop overrides
)}>
```

### 2. Extend Components

```typescript
// Don't modify ui components directly
// Instead, create wrapper components

// src/components/analytics-card.tsx
import { Card } from "@/components/ui/card"

export function AnalyticsCard({ children, ...props }) {
  return (
    <Card className="card-interactive gradient-card" {...props}>
      {children}
    </Card>
  )
}
```

### 3. Use Composition

```typescript
// Build complex UIs from simple components
<Card>
  <CardHeader>
    <div className="flex items-center justify-between">
      <CardTitle>Visitors</CardTitle>
      <Button variant="ghost" size="icon">
        <MoreHorizontal />
      </Button>
    </div>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

### 4. Dark Mode

Components automatically support dark mode via the `dark:` prefix:

```typescript
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Adapts to theme
</div>
```

Toggle dark mode:
```typescript
// src/components/theme-toggle.tsx
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  )
}
```

---

## Conclusion

This setup provides everything needed to build a world-class SaaS UI with shadcn/ui. The components are installed into your codebase, fully customizable, and themed with ConClick's brand colors.

**Key takeaways:**
- ✅ Configuration is complete
- ✅ Color system matches ConClick brand
- ✅ Utilities and helpers are ready
- ✅ Examples provided for common patterns
- ✅ Clear migration path defined

Start building components and watch ConClick Analytics transform into a polished, modern SaaS application!

---

**Need help?** Reference the [shadcn/ui docs](https://ui.shadcn.com) and the examples in this guide.
