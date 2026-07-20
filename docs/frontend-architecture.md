# Frontend Architecture Documentation

## Overview
This project is built using React with Vite as the build tool. It leverages Material UI for component design, React Router for navigation, Zustand for global state management, Recharts for data visualization, and Axios for centralized API communications.

## Dependencies

### Core Packages
* **react & react-dom (^19.2.7):** The core library for building the UI components.
* **react-router-dom (^7.18.1):** Handles routing and navigation across the application.
* **@mui/material & @mui/icons-material (^9.2.0):** Material-UI component library for styled UI elements.
* **@emotion/react & @emotion/styled (^11.14.0):** Required peer dependencies for MUI styling.
* **zustand (^5.0.14):** Lightweight global state management.
* **axios (^1.18.1):** Centralized HTTP client for making API requests.
* **recharts (^3.9.2):** Used for rendering performance and analytics charts.
* **react-hot-toast (^2.6.0):** For rendering lightweight notification toasts.

### Development Dependencies
* **vite (^8.1.1):** Fast build tool and development server.
* **eslint (^10.6.0):** Code linting.
* **@vitejs/plugin-react (^6.0.3):** Vite plugin for React support.

## File Structure

The `frontend` directory contains the source code for the UI layer.

```text
frontend
├── public/                # Static assets served directly
│   ├── favicon.svg
│   └── icons.svg
├── src/                   # Main application source code
│   ├── api/               # API communications
│   │   └── axios.js       # Configured Axios instance with interceptors
│   ├── components/        # Reusable UI components
│   │   ├── cards/         # Card-based components (e.g., StatCard)
│   │   ├── charts/        # Recharts-based chart components
│   │   ├── common/        # Shared components (e.g., SectionCard, StatusIndicator)
│   │   ├── dashboard/     # Dashboard specific components
│   │   └── layout/        # Layout elements (Navbar, Sidebar)
│   ├── layouts/           # Higher-level layout wrappers
│   │   └── MainLayout.jsx # Primary app layout (sidebar + navbar + content outlet)
│   ├── pages/             # Route-level page components
│   │   ├── AWS/
│   │   ├── Containers/
│   │   ├── Dashboard/
│   │   ├── Deployments/
│   │   ├── Login/
│   │   ├── Logs/
│   │   ├── Monitoring/
│   │   └── Settings/
│   ├── routes/            # Application routing configuration
│   │   └── AppRoutes.jsx  # Defines lazy-loaded, nested routes
│   ├── store/             # Global state management
│   │   └── useAppStore.js # Zustand store configuration
│   ├── styles/            # Theming and styling configuration
│   │   └── theme.js       # MUI theme definitions (colors, fonts)
│   ├── App.jsx            # Main app component, mounts AppRoutes
│   └── main.jsx           # Application entry point, mounts React DOM with providers
├── eslint.config.js       # Linter configuration
├── index.html             # Main HTML template
├── package.json           # Project metadata, scripts, and dependencies
└── vite.config.js         # Vite bundler configuration
```
