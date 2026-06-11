export default function Header({ unit, onUnitChange }) {
  const toggleButtonStyles = (isActive) =>
    `rounded-md px-3 py-1.5 text-sm font-medium transition ${
      isActive
        ? "bg-blue-600 text-white shadow-sm"
        : "text-gray-600 hover:text-gray-900"
    }`;

  return (
    <header className="relative flex items-center justify-end border-b border-gray-200 bg-gray-100 px-4 py-4">
      <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold text-gray-900">
        Dashtrack Workout App
      </h1>

      <div
        className="inline-flex rounded-lg border border-gray-300 bg-white p-1 shadow-sm"
        role="group"
        aria-label="Distance unit"
      >
        <button
          type="button"
          onClick={() => onUnitChange("miles")}
          className={toggleButtonStyles(unit === "miles")}
          aria-pressed={unit === "miles"}
        >
          Miles
        </button>
        <button
          type="button"
          onClick={() => onUnitChange("kilometers")}
          className={toggleButtonStyles(unit === "kilometers")}
          aria-pressed={unit === "kilometers"}
        >
          Kilometers
        </button>
      </div>
    </header>
  );
}
