// Pure financial math. All rates are annual percentages (e.g. 12 for 12%).
// All "years" are integers; calculations use monthly compounding where applicable.

export const fmtINR = (n: number) => {
  if (!isFinite(n)) return "—";
  const abs = Math.abs(n);
  if (abs >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(2)} Cr`;
  if (abs >= 1_00_000) return `₹${(n / 1_00_000).toFixed(2)} L`;
  if (abs >= 1_000) return `₹${(n / 1_000).toFixed(2)} K`;
  return `₹${n.toFixed(0)}`;
};

export const fmtFull = (n: number) =>
  isFinite(n)
    ? new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n))
    : "—";

/** Future value of a monthly SIP. */
export function fvSIP(monthly: number, annualRatePct: number, years: number) {
  const i = annualRatePct / 100 / 12;
  const n = years * 12;
  if (i === 0) return monthly * n;
  return monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
}

/** SIP with annual step-up of stepUpPct percent. Returns final value and invested. */
export function fvSIPStepUp(
  monthly: number,
  annualRatePct: number,
  years: number,
  stepUpPct: number,
) {
  const i = annualRatePct / 100 / 12;
  let value = 0;
  let invested = 0;
  let cur = monthly;
  for (let y = 0; y < years; y++) {
    for (let m = 0; m < 12; m++) {
      value = (value + cur) * (1 + i);
      invested += cur;
    }
    cur = cur * (1 + stepUpPct / 100);
  }
  return { value, invested };
}

/** Lumpsum compound future value (monthly compounding). */
export function fvLumpsum(principal: number, annualRatePct: number, years: number) {
  const i = annualRatePct / 100 / 12;
  return principal * Math.pow(1 + i, years * 12);
}

/** SWP: how many months a corpus lasts given monthly withdrawal & return. */
export function swpMonths(corpus: number, monthlyWithdraw: number, annualRatePct: number) {
  const i = annualRatePct / 100 / 12;
  let bal = corpus;
  let m = 0;
  const cap = 12 * 100;
  while (bal > 0 && m < cap) {
    bal = bal * (1 + i) - monthlyWithdraw;
    m++;
  }
  return m >= cap ? Infinity : m;
}

/** SWP balance series (yearly snapshots) for charting. */
export function swpSeries(
  corpus: number,
  monthlyWithdraw: number,
  annualRatePct: number,
  years: number,
) {
  const i = annualRatePct / 100 / 12;
  let bal = corpus;
  const out: { year: number; balance: number }[] = [{ year: 0, balance: bal }];
  for (let y = 1; y <= years; y++) {
    for (let m = 0; m < 12; m++) bal = Math.max(0, bal * (1 + i) - monthlyWithdraw);
    out.push({ year: y, balance: bal });
  }
  return out;
}

/** Required monthly SIP to reach a future goal value. */
export function requiredSIP(goal: number, annualRatePct: number, years: number) {
  const i = annualRatePct / 100 / 12;
  const n = years * 12;
  if (i === 0) return goal / n;
  return goal / (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
}

/** Inflate a present value to a future value at given inflation %. */
export function inflate(present: number, inflationPct: number, years: number) {
  return present * Math.pow(1 + inflationPct / 100, years);
}

/** Yearly SIP growth series for charts. */
export function sipSeries(monthly: number, annualRatePct: number, years: number) {
  const i = annualRatePct / 100 / 12;
  let value = 0;
  let invested = 0;
  const out: { year: number; invested: number; value: number }[] = [
    { year: 0, invested: 0, value: 0 },
  ];
  for (let y = 1; y <= years; y++) {
    for (let m = 0; m < 12; m++) {
      value = (value + monthly) * (1 + i);
      invested += monthly;
    }
    out.push({ year: y, invested, value });
  }
  return out;
}

/** Step-up SIP yearly series. */
export function sipStepUpSeries(
  monthly: number,
  annualRatePct: number,
  years: number,
  stepUpPct: number,
) {
  const i = annualRatePct / 100 / 12;
  let value = 0;
  let invested = 0;
  let cur = monthly;
  const out = [{ year: 0, invested: 0, value: 0 }];
  for (let y = 1; y <= years; y++) {
    for (let m = 0; m < 12; m++) {
      value = (value + cur) * (1 + i);
      invested += cur;
    }
    out.push({ year: y, invested, value });
    cur = cur * (1 + stepUpPct / 100);
  }
  return out;
}

/** Lumpsum yearly series. */
export function lumpsumSeries(principal: number, annualRatePct: number, years: number) {
  const i = annualRatePct / 100 / 12;
  const out = [{ year: 0, value: principal }];
  for (let y = 1; y <= years; y++) {
    out.push({ year: y, value: principal * Math.pow(1 + i, y * 12) });
  }
  return out;
}
