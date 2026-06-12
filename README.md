# Dashtrack (Under Construction)
This is an open-source application using localStorage to store running history for the user. The user can store their runs each day, and the application will remember the historical running workouts in future browser sessions! This application is available on both mobile and desktop viewports.

**Link to project:** https://kyaaron.github.io/dashtrack-running-app/

## How it's made
It's built using HTML, CSS, and JavaScript (mostly procedural but each run is an object that is created). Originally I was planning to use Tailwind CSS, but then I forgot and was mostly through the normal CSS, so I ended up finishing it in my own CSS styling. Each run is an object that is created, and there are several functions used to take the object data and apply them in several places. The object data is also stored in localStorage, and I use the localStorage API to set, get, and clear storage based on what the user inputs.

## How to use
1. Go to https://kyaaron.github.io/dashtrack-running-app/ on the mobile/desktop device of your choice
2. Enter your running data for the day and submit
3. The application will keep track of all your running exercises using your device's browser localStorage
4. If you want to clear data, such as keeping track of weekly running, you can do that with the 'clear data' button

## A note on localStorage
If you have not used or are not familiar with localStorage, it is a built-in mini-database of sorts that all browsers come with. It will save data in key: value pairs across multiple browser sessions, so when you enter data in this app, close the browser, then reopen, the data is still there! A popular app that uses this type of technology is Wordle.

HOWEVER, data is not saved across multiple browsers at the same time. There is no syncing. If you enter in running data on your mobile phone, then access this app later on your laptop, the data will not be there. So it is recommended to pick one device (probably your mobile phone) and use it exclusively.

This also means I do not have your data. It ONLY resides on your device, not in some secret server I have in my underground layer.

## Optimizations
- I would like to improve the stats, such as automatically calculating weekly runs and average pace
- I would like to add a table to show all running records for all time (until cleared by the user)
- I would like to improve the desktop UI to separate it from mobile and take advantage of extra screenspace

## Running the app locally

The project has two apps: the **backend** (`server/`) and the **frontend** (`client/`). Start the backend first so the API is available when the frontend loads.

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [pnpm](https://pnpm.io/) installed (`npm install -g pnpm`)
- A MongoDB Atlas cluster and database user (see backend steps below)
- Your MongoDB connection string stored in a password manager or secrets storage (e.g. 1Password, Bitwarden) — **never commit this value to git**

### Backend (`server/`)

Run these steps in order from the project root:

1. **Go to the server directory**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   This installs Express, Mongoose, CORS, and dotenv.

3. **Create your environment file**
   ```bash
   cp .env.example .env
   ```

4. **Add your MongoDB connection string**
   - Open MongoDB Atlas (or your secrets storage) and copy your connection string.
   - Paste it into `server/.env` as `MONGODB_URI`.
   - Example format:
     ```env
     MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/dashtrack_database
     PORT=3001
     ```
   - Replace `<username>`, `<password>`, and the cluster host with your real values.
   - `server/.env` is listed in `server/.gitignore` and must stay local.

5. **Start the backend dev server**
   ```bash
   pnpm dev
   ```
   You should see `Connected to MongoDB` and `Server running on http://localhost:3001`.

6. **Verify the API (optional)**
   ```bash
   curl http://localhost:3001/api/health
   ```
   Expected response: `{"status":"ok"}`

Leave this terminal running while you use the app.

### Frontend (`client/`)

Open a **second terminal** and run these steps in order:

1. **Go to the client directory**
   ```bash
   cd client
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   This installs React, Vite, and ESLint.

3. **Start the frontend dev server**
   ```bash
   pnpm dev
   ```
   Vite prints a local URL (usually `http://localhost:5173`). Open it in your browser.

4. **How the frontend reaches the backend**
   - No `.env` file is required on the frontend for local development.
   - Vite proxies `/api` requests to `http://localhost:3001`, so the React app talks to the Express server automatically.

### Quick reference

| App      | Directory | Start command | URL                          |
|----------|-----------|---------------|------------------------------|
| Backend  | `server/` | `pnpm dev`    | http://localhost:3001        |
| Frontend | `client/` | `pnpm dev`    | http://localhost:5173 (typical) |

Both terminals must stay open while developing.

## Miles / Kilometers toggle and distance input

The distance field in the workout form shows an appended label (`miles` or `kilometers`) that stays in sync with the toggle in the header. The connection works through shared state in `App.jsx`.

### Data flow

1. **`App.jsx`** holds the current unit in React state with `useState("miles")`. Miles is the default on initial page load. This is done so any child component that uses the current unit will re-render when the toggle changes.
2. **`Header.jsx`** receives two props from `App`:
   - `unit` — the active unit (`"miles"` or `"kilometers"`)
   - `onUnitChange` — updates that state when the user clicks a toggle button
3. When the user clicks **Miles** or **Kilometers** in the header, `onUnitChange` runs with the selected value and updates `unit` in `App`.
4. **`WorkoutForm.jsx`** receives the same `unit` value as a prop and renders it in the `<span>` appended to the distance `<input>`.

```
App (unit state)
 ├── Header (toggle buttons → onUnitChange)
 └── WorkoutForm (displays {unit} next to distance input)
```

### Where to look in the code

| File | Role |
|------|------|
| `client/src/App.jsx` | Owns `unit` state and passes it to child components |
| `client/src/components/Header.jsx` | Toggle UI; calls `onUnitChange("miles")` or `onUnitChange("kilometers")` |
| `client/src/components/WorkoutForm.jsx` | Shows `{unit}` beside the distance input |

Because `unit` lives in `App`, a single toggle click re-renders both the header (active button style) and the form (appended label) with the same value.

## Lessons learned
This was my first project using localStorage. It's really easy to work with, and big time apps like Wordle prove that localStorage is a great way to store data locally in the browser that is private for the user. The user is also in control of the data. I also used GenAI (I gave it the "role" of being a product owner) to create an image of what the app could look like, and I used that to help plan the design. This is something I plan to do more with my upcoming apps so I can mimic the real world of working with a product team.
