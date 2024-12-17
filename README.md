# Marketplace Website

A modern marketplace website built with React, TypeScript, and Tailwind CSS.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── data/          # Data files and mock data
├── types/         # TypeScript type definitions
└── App.tsx        # Main application component
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Development

- Use `npm run dev` to start the development server
- Use `npm run build` to create a production build
- Use `npm run preview` to preview the production build locally

## Adding New Items

To add new items for sale, edit the `src/data/items.ts` file. Each item should follow the `Item` interface defined in `src/types.ts`.

Example:
```typescript
{
  id: '4',
  title: 'Your Item',
  description: 'Item description',
  price: 100, // or 'Free'
  image: 'image-url',
  condition: 'New' // 'New' | 'Like New' | 'Good' | 'Fair'
}
```