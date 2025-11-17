# shadcn/ui Quick Start for ConClick Analytics

Get your polished SaaS UI up and running in minutes!

## 🚀 Installation

### Option 1: Automated Installation (Recommended)

```bash
# Run the installation script
./scripts/install-shadcn.sh
```

This will:
- ✅ Install all dependencies
- ✅ Install all shadcn/ui components
- ✅ Verify the setup

### Option 2: Manual Installation

```bash
# 1. Install dependencies
pnpm install tailwindcss-animate clsx tailwind-merge lucide-react recharts next-themes

# 2. Install shadcn/ui components (examples)
npx shadcn-ui@latest add button card input label dialog table

# 3. Start development
pnpm dev
```

---

## ✅ What's Already Configured

Everything is ready to use! The following has been set up:

### 1. Tailwind CSS Configuration
- ✅ ConClick brand colors
- ✅ Dark mode support
- ✅ Custom animations
- ✅ Typography system
- ✅ Chart colors

### 2. Global Styles
- ✅ CSS variables for theming
- ✅ Light/dark mode colors
- ✅ Custom utility classes
- ✅ Scrollbar styling
- ✅ Gradient utilities

### 3. Utilities
- ✅ `cn()` function for className merging
- ✅ Helper functions
- ✅ Formatting utilities

### 4. Component Structure
- ✅ `src/components/ui/` - shadcn/ui components
- ✅ TypeScript support
- ✅ Accessibility built-in

---

## 📖 Quick Examples

### Button

```typescript
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <div className="space-x-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}
```

### Card

```typescript
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function StatsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Visitors</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">45,231</div>
        <p className="text-xs text-green-600">+20.1% from last month</p>
      </CardContent>
    </Card>
  )
}
```

### Form

```typescript
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  return (
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
        <Input id="password" type="password" />
      </div>
      <Button className="w-full">Sign In</Button>
    </form>
  )
}
```

### Dialog (Modal)

```typescript
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function AddWebsiteDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Website</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Website</DialogTitle>
          <DialogDescription>
            Enter the details for the website you want to track.
          </DialogDescription>
        </DialogHeader>
        {/* Form content here */}
      </DialogContent>
    </Dialog>
  )
}
```

### Data Table

```typescript
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const data = [
  { page: "/", views: 12345, bounce: "42%" },
  { page: "/pricing", views: 8901, bounce: "38%" },
]

export function PageViewsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Page</TableHead>
          <TableHead className="text-right">Views</TableHead>
          <TableHead className="text-right">Bounce Rate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.page}>
            <TableCell className="font-medium">{row.page}</TableCell>
            <TableCell className="text-right">{row.views.toLocaleString()}</TableCell>
            <TableCell className="text-right">
              <Badge variant="secondary">{row.bounce}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
```

---

## 🎨 Using ConClick Brand Colors

### In Components

```typescript
// Primary blue
<Button className="bg-conclick-blue-500 hover:bg-conclick-blue-600">
  Primary Action
</Button>

// Accent green
<Badge className="bg-conclick-green-500">
  Success
</Badge>

// Gradient
<div className="gradient-primary p-6 text-white">
  Hero Section
</div>
```

### Chart Colors

```typescript
import { Line, LineChart } from "recharts"

<LineChart data={data}>
  <Line
    dataKey="value"
    stroke="hsl(var(--chart-1))"  // ConClick Blue
  />
</LineChart>
```

---

## 🌙 Dark Mode

Toggle between light and dark mode:

```typescript
"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components (auto-generated)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   ├── dashboard/             # Your custom dashboard components
│   ├── analytics/             # Analytics-specific components
│   └── layout/                # Layout components (header, sidebar, etc.)
├── app/
│   ├── globals.css            # Global styles with Tailwind
│   ├── layout.tsx             # Root layout
│   └── ...
└── lib/
    └── utils.ts               # Utility functions (includes cn())
```

---

## 🛠️ Common Commands

```bash
# Install a new component
npx shadcn-ui@latest add [component-name]

# Examples:
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add table

# Install multiple at once
npx shadcn-ui@latest add button card dialog input

# Start development
pnpm dev

# Build for production
pnpm build

# Type checking
pnpm tsc --noEmit
```

---

## 📚 Resources

- **Full Implementation Guide**: [docs/SHADCN_UI_IMPLEMENTATION.md](./docs/SHADCN_UI_IMPLEMENTATION.md)
- **shadcn/ui Docs**: https://ui.shadcn.com
- **Tailwind CSS**: https://tailwindcss.com
- **Lucide Icons**: https://lucide.dev
- **Recharts**: https://recharts.org

---

## 🚦 Next Steps

1. **Install Components** - Run `./scripts/install-shadcn.sh`

2. **Start Building** - Create your first page:
   ```bash
   # src/app/(main)/dashboard/page.tsx
   ```

3. **Use Examples** - Reference the examples above

4. **Customize** - Modify colors in `tailwind.config.ts`

5. **Read the Guide** - See `docs/SHADCN_UI_IMPLEMENTATION.md` for detailed examples

---

## 💡 Pro Tips

1. **Use the `cn()` utility** for conditional classes:
   ```typescript
   import { cn } from "@/lib/utils"

   <div className={cn("base-class", isActive && "active-class")} />
   ```

2. **Leverage composition** - Build complex UIs from simple components

3. **Keep components small** - One component, one responsibility

4. **Use TypeScript** - Full type safety out of the box

5. **Extend, don't modify** - Create wrapper components instead of modifying UI components

---

**Happy building! 🚀**
