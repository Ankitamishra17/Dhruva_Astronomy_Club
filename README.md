# Dhruva Astronomy Club Website

The official website for **DHRUVA**, the Astronomy Club. This project is a modern, responsive web application built to showcase the club's events, podcasts, team members.

![DHRUVA Astronomy Club](public/og-image.png)

### Key Features

- **Immersive Hero Section:** An engaging landing page with 3D-style moon animations and starry backgrounds.
- **Events Carousel:** A dynamic 3D coverflow swiper showcasing past and upcoming events.
- **Interactive UI:** Built with `Framer Motion` for smooth page transitions and scroll animations.
- **Podcast Section:** A dedicated space for the club's astronomical podcasts.

## Tech Stack

- **Framework:** [React 19]
- **Build Tool:** [Vite]
- **Language:** [TypeScript]
- **Styling:** [Tailwind CSS v4]
- **Animations:** [Framer Motion]
- **Routing:** [React Router DOM]
- **Carousel:** [Swiper.js]

### Prerequisites

Ensure you have the following installed:

- [Node.js] (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1.  **Clone the repository:**

 ```bash
   https://github.com/Ankitamishra17/Dhruva_Astronomy_Club.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

###  Running the Server

Start the development server with Hot Module Replacement:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create an optimized production build:

```bash
npm run build
```

You can preview the production build locally using:

```bash
npm run preview
```

## Project Structure

```bash
src/
├── assets/         # Static assets like images and styles
├── components/     # Reusable UI components (Navbar, Hero, Carousel, etc.)
├── pages/          # Page views (Home, About, Event, Podcast)
├── App.tsx         # Main application component & Routing setup
├── main.tsx        # Entry point
└── index.css       # Global styles & Tailwind directives
```
