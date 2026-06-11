import { useState } from "react";
import Header from "./components/Header";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutStats from "./components/WorkoutStats";
import WorkoutTable from "./components/WorkoutTable";

function App() {
  const [unit, setUnit] = useState("miles");

  return (
    <div className="min-h-screen bg-gray-100">
      <Header unit={unit} onUnitChange={setUnit} />
      <div className="mx-auto max-w-2xl px-4 py-8">
        <WorkoutForm unit={unit} />
        <WorkoutStats />
        <WorkoutTable />
      </div>
    </div>
  );
}

export default App
