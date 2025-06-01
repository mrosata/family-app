# Family Events Web App

A beautiful web application for sharing and celebrating family events and milestones. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Homepage**: Showcases family photos and featured events
- **Event Pages**: Dedicated pages for each family event with:
  - Custom invitation graphics
  - Event details (date, time, location)
  - Photo galleries (post-event)
  - Guest messages and thank-you notes
- **Responsive Design**: Beautiful on all devices
- **Modern Stack**: Next.js, TypeScript, and Tailwind CSS

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── events/
│   │   ├── [slug]/
│   │   │   └── layout.tsx    # Event page layout
│   │   ├── page.tsx          # Events listing page
│   │   └── pre-baby-summer-2025/
│   │       └── page.tsx      # Sample event page
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
```

## Adding New Events

1. Create a new directory under `src/app/events/` with your event slug
2. Create a `page.tsx` file in the new directory
3. Use the existing event page as a template
4. Update the events listing page to include the new event

## Technologies

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

MIT
