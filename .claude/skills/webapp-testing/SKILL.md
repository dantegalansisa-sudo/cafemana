---
name: webapp-testing
description: Use when testing local web applications, verifying frontend functionality, debugging UI behavior, or capturing screenshots. Activates Playwright for automated browser testing.
---

# Webapp Testing Skill

## When to Use
- After building any section or component
- When a form, button, or interaction needs verification
- When you need to capture screenshots of the current state
- When debugging visual or functional issues

## Testing Approach

### 1. Visual Verification
- Take screenshot of each section at desktop (1440px) and mobile (375px)
- Verify spacing between sections is consistent
- Check fonts are loading correctly
- Verify images are not distorted

### 2. Functional Testing
- Test all buttons and links
- Test form submission and validation
- Test navigation and scroll behavior
- Test hover states and animations

### 3. Responsive Testing
- Test at 375px (mobile)
- Test at 768px (tablet)
- Test at 1280px (desktop)
- Verify no horizontal scroll on mobile

### 4. Performance Checks
- Verify images load correctly
- Check for console errors
- Verify fonts load without flash

## Playwright Commands
```javascript
// Screenshot
await page.screenshot({ path: 'screenshot.png', fullPage: true });

// Mobile viewport
await page.setViewportSize({ width: 375, height: 812 });

// Test form
await page.fill('input[name="email"]', 'test@test.com');
await page.click('button[type="submit"]');
```