# Color Verification Report - Figma vs Rendered

**Date:** 2024-11-06
**Method:** Playwright browser color sampling using Canvas API
**Figma Variables:** Extracted from Figma MCP

## Critical Color Mismatches Found

### 🔴 CRITICAL ISSUES

#### 1. Navbar Simulate Button
- **Figma Expected:** `#F99830` (orange-400)
- **Rendered:** `#C87B00`
- **Difference:** Significant - much darker/more saturated
- **CSS OKLCH:** `oklch(0.65 0.15 70)` ❌ INCORRECT

#### 2. Hero Background
- **Figma Expected:** `#FFD094` (orange-200)
- **Rendered:** `#F7D19C`
- **Difference:** Slight but noticeable
- **CSS OKLCH:** `oklch(0.88 0.08 75)` ❌ INCORRECT

#### 3. Hero CTA Button
- **Background - Figma Expected:** `#161616` (gray-900)
- **Background - Rendered:** `#0B0B0B`
- **Difference:** Too dark
- **Border - Figma Expected:** `#F99830` (orange-400)
- **Border - Rendered:** `#C87B00`
- **Difference:** Same issue as simulate button

#### 4. Info Cards - All Variants
- **orange-500:**
  - Figma: `#F27100`
  - Rendered: `#C35700`
  - Difference: Much darker
  
- **orange-400:**
  - Figma: `#F99830`
  - Rendered: `#C87B00`
  - Difference: Much darker
  
- **orange-300:**
  - Figma: `#FFA63A`
  - Rendered: `#D49648`
  - Difference: Darker and less saturated
  
- **orange-200:**
  - Figma: `#FFD094`
  - Rendered: `#F7D19C`
  - Difference: Slight but noticeable

## Root Cause

The OKLCH values in `globals.css` are **incorrectly converted** from the Figma hex colors. The OKLCH to RGB conversion is producing darker, more saturated colors than expected.

## Required Fixes

All OKLCH values need to be recalculated to match the exact Figma hex colors:

1. `--catlife-primary` (orange-400): `#F99830`
2. `--catlife-primary-hover` (orange-300): `#FFA63A`
3. `--catlife-primary-active` (orange-500): `#F27100`
4. `--catlife-primary-light` (orange-200): `#FFD094`
5. `--catlife-primary-lightest` (orange-100): `#FFEED6`
6. `--catlife-text-primary` (gray-900): `#161616`

## Verification Method

Used Playwright's Canvas API to sample actual rendered colors:
- Created a canvas element
- Set fillStyle to the computed color value
- Read back RGB values from ImageData
- Converted to hex for comparison

This method accurately captures what users actually see, regardless of how the browser stores the color internally (LAB, OKLCH, RGB, etc.).

