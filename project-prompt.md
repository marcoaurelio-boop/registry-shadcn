# Catlife Project - Complete Chat Summary

## Project Overview

Change this **shadcn/ui registry** for Catlife (cat insurance company) that contains some stuff to match the styles from the Figma design.
- Design tokens mapped from Figma
- Basic components (button, floating card, navbar, etc.) based on Figma design
- Custom Catlife-specific components

**Figma Design:** https://www.figma.com/design/7YaKpGYjOiYJor8aM1F8zd/Catlife-Site-1.0--Copy-?node-id=647-825&t=FmikKPTIdMv3JC9V-4

## Key Decisions & Requirements

- **Purpose**: Create reusable components and design tokens that can be used in other projects via shadcn registry

### 2. Design Token Strategy
- **Standard shadcn tokens**: Use shadcn semantic tokens (`--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--card`, `--popover` with `-foreground` variants) where Figma colors match semantic roles
- **Custom tokens**: Create custom tokens (`--catlife-*`) for Catlife-specific design elements that don't fit standard roles
- Follow shadcn naming patterns for custom tokens (include `-foreground` variants)
- Document when to use standard vs custom tokens

### 3. Component Requirements
Extract and create basic components from Figma design:
- Button
- Floating Card
- Navbar
- All other basic components visible in the Figma section

### 4. Technology Stack
- **React** 19.2.0
- **Next.js** 16.0.1
- **TypeScript** 5.9.3
- **Tailwind CSS 4** (latest)
- **shadcn/ui** (as registry)
- **pnpm** (package manager)

### 5. Project Configuration
- **Path Aliases**:
  - `@/components` → `./src/components`
  - `@/lib` → `./src/lib`
  - `@/styles` → `./src/styles`
  - `@/assets` → `./src/assets`

- Dont worry about creating the files for the registry, shadcn will do it for you.

## Implementation Plan

### Phase 1: Foundation & Figma Extraction
1. ✅ Initialize Next.js + React + TypeScript project
2. ⏳ Extract Figma design using MCP tools
3. ⏳ Document all Figma MCP returns in `FIGMA_MCP_RETURNS.md`
4. ⏳ Analyze extracted Figma data

### Phase 2: Design System & Registry Setup
5. ⏳ Configure Tailwind CSS 4 with shadcn tokens (standard + custom)
6. ⏳ Set up shadcn/ui registry structure

### Phase 3: Component Implementation
8. ⏳ Map styles from Figma
9. ⏳ Create basic components:
   - Button
   - Floating Card
   - Navbar
   - Other basic components from Figma
10. ⏳ Build components matching Figma design exactly


## Critical Principles

1. **No Assumptions**: All components, styles, and tokens MUST come from Figma design
2. **Data-Driven**: Component list determined AFTER Figma extraction
3. **Documentation First**: `FIGMA_MCP_RETURNS.md` is the source of truth
4. **shadcn Token Strategy**: Use standard semantic tokens where applicable, create custom tokens for Catlife-specific elements
5. **Best Practices**: Follow React, TypeScript, Tailwind, and shadcn/ui documentation
6. **Type Safety**: Use TypeScript interfaces, no `any` types
7. **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
8. **Registry Structure**: Follow shadcn/ui registry conventions for component organization


Use the following MCP tools to extract the Figma design:
- Figma MCP Tool
- Chrome DevTools MCP Tool
- Server Sequential Thinking MCP Tool
- Shadcn MCP Tool
- Context7 MCP Tool

