/** Published case-study rate for routine invoices. Not a benefit multiplier. */
export const ROUTINE_AUTOMATION_RATE = 0.99;

export const WEEKS_PER_YEAR = 52;

export function routineRoi(invoicesPerWeek: number, minutesEach: number, hourlyRate: number) {
  const hoursWeek = invoicesPerWeek * ROUTINE_AUTOMATION_RATE * (minutesEach / 60);
  const annualHours = hoursWeek * WEEKS_PER_YEAR;
  const annualCost = annualHours * hourlyRate;
  return { hoursWeek, annualHours, annualCost };
}

const hours = new Intl.NumberFormat('en-GB', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const money = new Intl.NumberFormat('en-GB', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatHours(value: number) {
  return hours.format(value);
}

export function formatAmount(value: number) {
  return money.format(value);
}
