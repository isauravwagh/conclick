#!/bin/bash

# ConClick Analytics - shadcn/ui Installation Script
# This script installs all necessary dependencies and components for shadcn/ui

set -e

echo "🎨 Installing shadcn/ui for ConClick Analytics..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Step 1: Install core dependencies
echo -e "${BLUE}📦 Installing core dependencies...${NC}"
pnpm install tailwindcss-animate clsx tailwind-merge
pnpm install lucide-react  # Icon library
pnpm install recharts       # Charts library
pnpm install next-themes    # Dark mode support
pnpm install date-fns       # Date utilities
pnpm install @radix-ui/react-slot # Required by shadcn/ui

echo -e "${GREEN}✅ Core dependencies installed${NC}"
echo ""

# Step 2: Install shadcn/ui components
echo -e "${BLUE}📦 Installing shadcn/ui components...${NC}"
echo ""

# Essential UI components
echo "Installing essential UI components..."
npx shadcn-ui@latest add button --yes
npx shadcn-ui@latest add card --yes
npx shadcn-ui@latest add input --yes
npx shadcn-ui@latest add label --yes
npx shadcn-ui@latest add textarea --yes

# Layout components
echo "Installing layout components..."
npx shadcn-ui@latest add sidebar --yes
npx shadcn-ui@latest add separator --yes
npx shadcn-ui@latest add scroll-area --yes

# Navigation components
echo "Installing navigation components..."
npx shadcn-ui@latest add dropdown-menu --yes
npx shadcn-ui@latest add tabs --yes
npx shadcn-ui@latest add breadcrumb --yes
npx shadcn-ui@latest add command --yes

# Form components
echo "Installing form components..."
npx shadcn-ui@latest add select --yes
npx shadcn-ui@latest add checkbox --yes
npx shadcn-ui@latest add radio-group --yes
npx shadcn-ui@latest add switch --yes
npx shadcn-ui@latest add slider --yes

# Data display components
echo "Installing data display components..."
npx shadcn-ui@latest add table --yes
npx shadcn-ui@latest add badge --yes
npx shadcn-ui@latest add avatar --yes
npx shadcn-ui@latest add calendar --yes
npx shadcn-ui@latest add chart --yes

# Overlay components
echo "Installing overlay components..."
npx shadcn-ui@latest add dialog --yes
npx shadcn-ui@latest add alert-dialog --yes
npx shadcn-ui@latest add popover --yes
npx shadcn-ui@latest add tooltip --yes
npx shadcn-ui@latest add hover-card --yes
npx shadcn-ui@latest add sheet --yes

# Feedback components
echo "Installing feedback components..."
npx shadcn-ui@latest add alert --yes
npx shadcn-ui@latest add toast --yes
npx shadcn-ui@latest add progress --yes
npx shadcn-ui@latest add skeleton --yes

echo ""
echo -e "${GREEN}✅ All shadcn/ui components installed${NC}"
echo ""

# Step 3: Verify installation
echo -e "${BLUE}🔍 Verifying installation...${NC}"

if [ -d "src/components/ui" ]; then
    echo -e "${GREEN}✅ UI components directory created${NC}"
    echo "   Components installed: $(ls src/components/ui | wc -l)"
else
    echo "❌ UI components directory not found"
    exit 1
fi

if [ -f "tailwind.config.ts" ]; then
    echo -e "${GREEN}✅ Tailwind config exists${NC}"
else
    echo "❌ Tailwind config not found"
    exit 1
fi

if [ -f "src/app/globals.css" ]; then
    echo -e "${GREEN}✅ Global CSS file exists${NC}"
else
    echo "❌ Global CSS file not found"
    exit 1
fi

echo ""
echo -e "${GREEN}🎉 Installation complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Review docs/SHADCN_UI_IMPLEMENTATION.md for usage guide"
echo "2. Start development server: pnpm dev"
echo "3. Begin building components!"
echo ""
echo "Happy coding! 🚀"
