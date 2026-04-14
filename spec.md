# SmallHandsTech — Tech Database for Small Hands

## Problem
No tech review site lets you filter by hand size. People with small hands
(women under 155cm, teens, people with hand conditions) can't find mice,
keyboards, or phones that fit them. They resort to scattered Reddit threads
and trial-and-error purchasing.

TinyFit Jewelry proved the "petite niche" works (189 upvotes on r/XXS).
SmallHandsTech is the tech equivalent.

## Solution
Database of 50+ tech products filterable by hand length (cm), grip width (mm),
and weight — the world's only hand-size-first tech curation site.

### Core features
1. **Hand Size Finder** — input your hand length (cm) → get filtered products
2. **Product Database** — mice, keyboards, phones, tablets, styluses
   Filterable by: hand size range, category, grip style, price, brand
3. **Grip Style Guide** — claw/palm/fingertip recommendations per hand size
4. **First-hand reviews** — owner has small hands, can do authentic testing

### Killer differentiators
- Hand size (cm) as primary filter = world first
- Grip width measurements (not available on Amazon/manufacturer sites)
- Grip style recommendations per hand size
- Crossover with TinyFit audience (same demographic)

## Tech Stack
- GitHub Pages (static)
- Vanilla JS + Tailwind CSS
- data/products.json (existing, needs ASIN fill)
- GA4 + Clarity

## GitHub Repos
- humancronadmin/small-hands-tech (existing)

## MVP Scope (ASIN fill + SEO articles)
1. Fill all 50 amazon_asin fields via Amazon US search
2. Verify hand_length_cm ranges are accurate per product
3. Add grip_width_mm where missing
4. 3 SEO articles:
   - "Best Mouse for Small Hands (2026 Guide)"
   - "Ergonomic Keyboard for Petite Hands"
   - "Grip Style Guide: Claw vs Palm vs Fingertip for Small Hands"

## Data Sources
- RTINGS measurements (where available)
- Amazon product dimensions
- Rocket Jump Ninja hand size guides (for reference)
- r/MouseReview community data
- Owner's physical testing

## Revenue Model
- Amazon US affiliate (japantool-20)
- Average cart: $50-100 (mice/keyboards)

## SEO Keywords
| Priority | Keyword |
|---|---|
| Main | small mouse for small hands |
| Main | best keyboard for small hands |
| Long-tail | mouse for women with small hands |
| Long-tail | ergonomic mouse for petite hands |
| Long-tail | best phone for small hands 2026 |
| Long-tail | left-handed mouse for small hands |
