export type CorpusBin = { min: number; max: number; count: number };

export const DEFAULT_THRESHOLD = 0.9;

/** A bin auto-posts only when every line in it is at or above the threshold. */
export function splitAtThreshold(bins: CorpusBin[], threshold: number) {
  let auto = 0;
  let review = 0;
  for (const bin of bins) {
    if (bin.min >= threshold) auto += bin.count;
    else review += bin.count;
  }
  const total = auto + review;
  const autoPct = total === 0 ? 0 : (auto / total) * 100;
  const reviewPct = total === 0 ? 0 : (review / total) * 100;
  return { auto, review, total, autoPct, reviewPct };
}

export function formatPct(value: number) {
  return `${value.toFixed(1)}%`;
}

export function formatThreshold(value: number) {
  return value.toFixed(2);
}
