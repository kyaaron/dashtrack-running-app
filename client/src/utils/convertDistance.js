const KM_PER_MILE = 1.60934;

export default function convertDistance(distance, fromUnit, toUnit) {
  if (fromUnit === toUnit) return distance;
  if (fromUnit === "miles") return distance * KM_PER_MILE;
  if (fromUnit === "kilometers") return distance / KM_PER_MILE;
  throw new Error(`Invalid unit: ${fromUnit}`);
}