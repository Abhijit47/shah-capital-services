import { fmtFull, fmtINR, inflate } from '@/lib/finance'
import { useMemo, useState } from 'react'
import { Field, ResultCard } from './shared'

export function InflationCalculator() {
  const [present, setPresent] = useState(100000)
  const [rate, setRate] = useState(6)
  const [years, setYears] = useState(20)

  const future = useMemo(
    () => inflate(present, rate, years),
    [present, rate, years],
  )
  const purchasingPower = present * (present / future)

  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        <Field
          label="Current amount"
          value={present}
          onChange={setPresent}
          min={1000}
          max={10000000}
          step={1000}
          prefix="₹"
        />
        <hr />
        <Field
          label="Inflation rate"
          value={rate}
          onChange={setRate}
          min={1}
          max={15}
          step={0.5}
          suffix="%"
        />
        <hr />
        <Field
          label="Years from now"
          value={years}
          onChange={setYears}
          min={1}
          max={50}
          suffix="yrs"
        />
        <hr />
      </div>
      <div className="col-12 col-xl-6">
        <div className={'row g-2 g-lg-3'}>
          <div className={'col-12'}>
            <ResultCard label="Today's value" value={`₹${fmtFull(present)}`} />
          </div>
          <div className={'col-12'}>
            <ResultCard
              label={`Equivalent in ${years} years`}
              value={`₹${fmtFull(future)}`}
              highlight
            />
          </div>
          <div className={'col-12'}>
            <ResultCard
              label="Purchasing power of today's ₹"
              value={`₹${fmtFull(purchasingPower)}`}
            />
          </div>
        </div>
        <div className={'col-12 mt-2'}>
          <p className="">
            {fmtINR(present)} today will need {fmtINR(future)} in {years} years
            to buy the same things at {rate}% inflation.
          </p>
        </div>
      </div>
    </div>
  )
}
