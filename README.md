# Developer Portfolio

A clean, modern, and responsive personal portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- Modern, clean design with good vertical rhythm
- Responsive layout that works on all devices
- Light and dark mode that follows system preferences
- Project showcase section with cards
- Social links and contact information
- Built with Next.js App Router for optimal performance
- Styled with Tailwind CSS for consistent design

## Tech Stack

- **Next.js**: React framework with App Router
- **React**: Frontend library
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information
- Edit `src/components/Header.tsx` to update your name, tagline, and social links.
- Update your profile information and links to your actual social media accounts.

### Projects
- Edit the projects array in `src/app/page.tsx` to showcase your own projects.
- Each project can include title, description, tech stack tags, and links to GitHub and live demos.

### Styling
- Modify the color scheme and design tokens in `src/app/globals.css`.
- All styling is done with Tailwind CSS, so you can customize any component by changing the utility classes.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

This project is open source and available under the [MIT License](LICENSE).
