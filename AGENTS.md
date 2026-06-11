# Dashtrack — Agent Guide

## Project Overview

Dashtrack is a workout tracking application. Users log workouts with a type, distance, and date. Submitted data is persisted in MongoDB via an Express.js backend.

This is a rewrite of the original localStorage-based app into a React + Vite frontend with a full-stack architecture.

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React, Vite                         |
| Styling    | Tailwind CSS (CDN version for now)  |
| Backend    | Express.js                          |
| Database   | MongoDB                             |
| Package mgr| pnpm                                |

## Architecture

```
┌─────────────────┐       HTTP API        ┌─────────────────┐       ┌──────────┐
│  React + Vite   │  ◄──────────────────► │   Express.js    │ ◄───► │ MongoDB  │
│  (Tailwind CDN) │                       │   (REST API)    │       │          │
└─────────────────┘                       └─────────────────┘       └──────────┘
```

- The frontend submits workout form data to the Express API.
- The backend validates and stores workouts in MongoDB.
- The frontend fetches workouts from the API to populate the table and statistics.

## Workout Data Model

Each workout record includes:

| Field    | Type   | Details                                      |
|----------|--------|----------------------------------------------|
| `type`   | string | One of: `run`, `walk`, `cycling`             |
| `distance` | float  | Decimal distance value (e.g. 3.5, 10.25)     |
| `unit`   | string | `miles` or `kilometers`                      |
| `date`   | date   | Date the workout was performed               |

## React Component Structure

```
App
├── WorkoutForm          # Form to input and submit a new workout
├── WorkoutTable         # Table listing all previous workouts
└── WorkoutStats         # Section showing aggregate statistics
    ├── TotalWorkouts    # Sub-component: count of all workouts
    └── TotalDistance    # Sub-component: sum of all distances
```

### WorkoutForm

Collects user input and submits to the backend:

- **Workout type** — select or radio: run, walk, cycling
- **Distance** — float input for decimal values (e.g. 3.5)
- **Unit toggle** — a toggle button to switch between miles and kilometers. When toggled, the displayed distance converts in real time (e.g. 5 miles ↔ 8.05 km) so the user always sees the equivalent value in the selected unit
- **Date** — date picker
- **Submit** — POSTs the workout to the Express API with the distance and currently selected unit

### WorkoutTable

Displays all workouts fetched from the backend. Columns should reflect type, distance (with unit), and date.

### WorkoutStats

Container for summary statistics. Contains two sub-components:

- **TotalWorkouts** — displays the total number of logged workouts
- **TotalDistance** — displays the combined distance across all workouts

## Conventions

- **Readability first** — write code that is easy to read and follow. The project owner will review the codebase and needs to understand how everything is connected. Prefer clear names, straightforward logic, and obvious data flow over clever abstractions.
- Use functional React components and hooks.
- Keep API calls in a dedicated service or hook layer (e.g., `api/workouts.js` or `useWorkouts`) so the connection between UI and backend is easy to trace.
- Match existing naming and file organization as the project grows.
- Tailwind utility classes for styling; CDN script in `index.html` until a build-time Tailwind setup is added.
