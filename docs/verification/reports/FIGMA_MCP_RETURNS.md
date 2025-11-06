# Figma MCP Extraction Returns

**Figma File**: `c7MZaleuiO7WKrIZWaDOrG`
**Node ID**: `1:1434`
**Design Name**: Home Size - 1512x8043
**Extraction Date**: 2024

## Color Palette

### Primary Orange Scale
From Figma variables:
- `color/orange/100` (Soft White 100): `#ffeed6` - Orange 100
- `color/orange/200`: `#ffd094` - Orange 200
- `color/orange/300`: `#ffa63a` - Orange 300
- `color/orange/400` (Tangerine 400): `#f99830` - Primary orange
- `color/orange/500`: `#f27100` - Orange 500
- `color/orange/600`: `#fe6b1c` - Orange 600
- `color/orange/Soft White 100`: `#fffaf3` - Background
- `color/orange/Soft White 50`: `#fffaf3` - Background variant

### Gray Scale
- `color/gray/900` (Dark gray 900): `#161616` - Primary text, borders
- `color/gray/900 primary`: `#161616` - Primary text
- `color/gray/700`: `#44403c` - Gray 700
- `color/gray/500`: `#78716c` - Secondary text
- `color/gray/300`: `#a8a29e` - Muted text
- `color/gray/200`: `#d6d3d1` - Light gray

### Accent Colors
- `color/notification/Sucess green`: `#10b981` - Success/accent green
- `Colors/Green Dark`: `#1E4146` - Dark green variant

### Black
- `Black`: `#161616` - Primary black

## Typography

### Font Families
1. **Roc Grotesk**
   - Weights: Regular (400), Medium (500), Bold (700), ExtraBold (800)
   - Usage: Primary font for headings, buttons, navigation
   - Variants seen in design:
     - `font-['Roc_Grotesk:Regular',sans-serif]` - Body text
     - `font-['Roc_Grotesk:Medium',sans-serif]` - Headings, nav items
     - `font-['Roc_Grotesk:Bold',sans-serif]` - Buttons, emphasis
     - `font-['Roc_Grotesk:ExtraBold',sans-serif]` - Strong emphasis

2. **Lato**
   - Weights: Regular (400), Medium (500), Semibold (600)
   - Usage: Secondary font for some headings
   - Variants seen:
     - `font-['Lato:Medium',sans-serif]` - Section headings
     - `font-['Lato:Semibold',sans-serif]` - Emphasis

### Typography Scale
- **Hero Title**: 80px (Roc Grotesk Bold) - "O plano de saúde pet para gatos exigentes."
- **H1**: 46px (Roc Grotesk Medium/Bold, Lato Medium) - Section headings
- **H2**: 40px (Roc Grotesk Medium) - Subsection headings
- **H3**: 30px (Roc Grotesk Medium/Bold) - Card titles
- **H4**: 26px (Roc Grotesk Medium) - Table headers
- **Body Large**: 23px (Roc Grotesk Regular) - Subheadings, descriptions
- **Body**: 20px (Roc Grotesk Regular/Medium) - Standard body text
- **Body Small**: 18px (Roc Grotesk Regular) - Nav items, small text
- **Button**: 16px-20px (Roc Grotesk Bold) - Button text
- **Input Placeholder**: 18px (Roc Grotesk Regular) - Form placeholders

### Line Heights
- Hero: `leading-none` (1.0)
- Headings: `leading-[1.1]` to `leading-[1.15]`
- Body: `leading-[1.1]` to `leading-[1.5]`
- Nav items: `leading-[1.2]`

## Spacing Scale

From Figma design analysis:
- **4px**: Minimal spacing
- **8px**: Small gaps, icon padding
- **16px**: Standard gaps, padding
- **24px**: Medium spacing, nav item gaps
- **32px**: Large gaps, section spacing
- **40px**: Extra large spacing
- **48px**: Section padding
- **56px**: Large section padding, button heights
- **68px**: Extra large section spacing
- **100px**: Section vertical padding

## Border Radius

From Figma design:
- **rounded-full** (1000px): Buttons, pills, circular elements
- **rounded-[11.426px]**: Small rounded elements
- **rounded-[12.732px]**: Small-medium rounded elements
- **rounded-[16px]**: FAQ items, cards
- **rounded-[27.852px]**: Image containers
- **rounded-[32px]**: Form cards, medium containers
- **rounded-[32.722px]**: Plan cards (inactive)
- **rounded-[35.145px]**: Carousel items
- **rounded-[40px]**: Carousel items, step cards
- **rounded-[40.902px]**: Plan cards (active)
- **rounded-[48px]**: Info cards, large containers
- **rounded-[56px]**: Large section containers
- **rounded-[5138.889px]**: Circular icon containers (essentially full circle)

## Shadow Patterns

From Figma design analysis:
- **Default shadow**: `2px 2px 0px 0px rgba(22, 22, 22, 1)` - Standard button shadow
- **Hover shadow**: `3px 3px 0px 0px rgba(22, 22, 22, 1)` - Button hover state
- **Active shadow**: `1px 1px 0px 0px rgba(22, 22, 22, 1)` - Button active state
- **Transform on hover**: `translate-x-[-1px] translate-y-[-1px]` - Lift effect
- **Transform on active**: `translate-x-[1px] translate-y-[1px]` - Press effect

## Component Structure

### 1. Header/Navbar (node-id: 1:1435)
- **Structure**: Sticky header with backdrop blur
- **Menu Icon**: 56x56px, rounded-full, `bg-[rgba(255,250,243,0.2)]`
- **Logo**: 158.652x32px
- **Nav Items**:
  - "Planos", "Como funciona", "Rede credenciada"
  - 18px, Roc Grotesk Medium, `text-[#161616]`
- **Sign In Button**: 84x40px, border, rounded-full, transparent background
- **Simulate Button**: 144x40px, `bg-[#f99830]`, border `#161616`, rounded-full
- **User Avatar**: 40x40px circular

### 2. Hero Section (node-id: 1:1462)
- **Background**: `bg-[#ffd094]` (Orange 200)
- **Title**: 80px, Roc Grotesk Bold, `text-[#161616]`
- **Subtitle**: 23px, Roc Grotesk Regular, `text-[#161616]`
- **Cats Image**: 523x363px
- **Floating Form Card**:
  - 288x216px
  - `bg-[rgba(255,250,243,0.2)]`
  - `rounded-[32px]`
  - Contains input and CTA button
- **Input**: 48px height, `bg-[rgba(255,250,243,0.2)]`, border `#fffaf3`, rounded-full
- **CTA Button**: `bg-[#161616]`, border `#f99830`, text `#fffaf3`, rounded-full

### 3. Info Cards (node-id: 1:1479)
Multiple variants:
- **Info 1**: `bg-[#f27100]` (Orange 500), 700x500px, `rounded-[56px]`, border-2 `#161616`
- **Info 2**: `bg-[#f99830]` (Orange 400), 574x500px, `rounded-[56px]`, border-2 `#161616`
- **Info 3**: `bg-[#ffa63a]` (Orange 300), `rounded-[48px]`, border-2 `#161616`
- **Info 4**: `bg-[#ffd094]` (Orange 200), `rounded-[48px]`, border-2 `#161616`

### 4. Plans Carousel (node-id: 1:1613)
- **Inactive Cards**: `bg-[#f99830]`, `opacity-40`, `border-[1.023px]`, `rounded-[32.722px]`
- **Active Card**: `bg-[#f99830]`, `border-[1.278px]`, `rounded-[40.902px]`, larger padding
- **Plan Names**: 24.541px-30.677px, Roc Grotesk Medium
- **Prices**: 56.241px-70.301px, Roc Grotesk Bold
- **Descriptions**: 18.406px-23.008px, Roc Grotesk Regular
- **Simulate Buttons**: `bg-[#fffaf3]`, border-2 `#161616`, rounded-full

### 5. Coverage Table (node-id: 1:1562)
- **Container**: `bg-[#ffd094]`, `rounded-[48px]`
- **Table**: `bg-[#fffaf3]`, `border-2` `#161616`, `rounded-tl-[14.159px]`
- **Rows**: 26px text, Roc Grotesk Medium, `text-[#161616]`
- **Check Icons**: Orange circles with add_circle icon
- **Inner Borders**: `border-[#78716c]` (Gray 500)

### 6. Telemedicine Section (node-id: 1:1644)
- **Background**: `bg-[#fffaf3]`
- **Content Card**: `bg-[#ffd094]`, 1368x562px, `rounded-[56px]`
- **Title**: 46px, Roc Grotesk Medium
- **Description**: 23px, Roc Grotesk Regular
- **CTA Button**: `bg-[#f99830]`, border `#161616`, rounded-full
- **Image**: Right side, `rounded-br-[56px] rounded-tr-[56px]`

### 7. Testimonials (node-id: 1:1721)
- **Background**: `bg-[#ffeed6]` (Orange 100)
- **Banner Ribbon**:
  - Rotated ~9.187deg
  - `bg-[#f99830]`
  - `border-[1.572px]` `#161616`
  - Text: 46px, Roc Grotesk Medium
- **Testimonial Cards**: Circular, 172-173px
- **Text**: 23px, Roc Grotesk Regular
- **Author**: 23px, Roc Grotesk Medium

### 8. FAQ Accordion (node-id: 1:1847)
- **Background**: `bg-[#ffd094]`
- **Accordion Items**:
  - `bg-[#fffaf3]`
  - `border` `#161616`
  - `rounded-[16px]`
- **Question Text**: 20px, Roc Grotesk Regular, `text-[#161616]`
- **Icon**: 28px add_circle
- **Left Side**: Title 46px + illustration

### 9. Footer (node-id: 1:1902)
- **Background**: `bg-[#ffd094]`
- **Border Top**: `border-t` `#78716c` (Gray 500)
- **Multi-column navigation layout**
- **Logo and links sections**

## Design Patterns

### Button Patterns
- **Primary CTA**: `bg-[#f99830]`, border-2 `#161616`, rounded-full, shadow effects
- **Dark Button**: `bg-[#161616]`, border `#f99830`, text `#fffaf3`, rounded-full
- **Ghost Button**: Transparent background, border-2 `#161616`, rounded-full
- **Hover**: Shadow increases, translate up/left
- **Active**: Shadow decreases, translate down/right

### Card Patterns
- **Info Cards**: Large rounded corners (48px-56px), border-2, various orange backgrounds
- **Form Cards**: Medium rounded (32px), semi-transparent background
- **Plan Cards**: Varying sizes based on active state, orange background

### Border Patterns
- **Standard**: `border-2` `#161616` (2px solid black)
- **Thin**: `border-[0.904px]`, `border-[1.023px]`, `border-[1.241px]`, `border-[1.278px]`, `border-[1.572px]`
- **All borders**: Use `#161616` (black) or `#78716c` (gray 500) for subtle borders

### Opacity Patterns
- **Backdrop blur**: `rgba(255,250,243,0.2)` - 20% opacity
- **Very light**: `rgba(255,250,243,0.01)` - 1% opacity
- **Card inactive**: `opacity-40` - 40% opacity

## Image Assets

All images are stored as Figma MCP asset URLs (valid for 7 days):
- Avatar images
- Cat illustrations
- Icons (menu, check circles, add circles, arrows, etc.)
- Logo variants
- Background images

## Notes

1. **Color Format**: All colors extracted as hex. Need to convert to OKLCH format for shadcn convention.
2. **Font Loading**: Roc Grotesk and Lato need to be loaded (Google Fonts or self-hosted).
3. **Responsive**: Design is for 1512px width, needs responsive breakpoints.
4. **Token Mapping**: Standard shadcn tokens should map to semantic roles, custom catlife-* tokens for specific design elements.

