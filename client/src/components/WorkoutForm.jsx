const inputStyles =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20";

export default function WorkoutForm({ unit }) {
  return (
    <section className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-xl font-semibold text-gray-900">
        Log Your Workout
      </h2>
      <form className="flex flex-col gap-4">
        <input type="date" className={inputStyles} />
        <select className={inputStyles}>
          <option value="">--Select a workout type--</option>
          <option value="run">Run</option>
          <option value="walk">Walk</option>
          <option value="cycling">Cycling</option>
        </select>
        <div className="flex w-full overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
          <input
            type="number"
            placeholder="Distance"
            className="min-w-0 flex-1 border-0 bg-transparent px-4 py-2.5 text-gray-900 focus:outline-none"
          />
          <span className="flex items-center border-l border-gray-300 bg-gray-50 px-4 py-2.5 text-sm font-medium text-gray-600">
            {unit}
          </span>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </section>
  );
}