import { fmtFull, fmtINR, fvLumpsum, lumpsumSeries } from '@/lib/finance'
import { useMemo, useState } from 'react'
import { GrowthChart } from './GrowthChart'
import { Field, ResultCard } from './shared'

export function LumpsumCalculator() {
  const [principal, setPrincipal] = useState(100000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)

  const { value, data } = useMemo(
    () => ({
      value: fvLumpsum(principal, rate, years),
      data: lumpsumSeries(principal, rate, years),
    }),
    [principal, rate, years],
  )

  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        <Field
          label="Total investment"
          value={principal}
          onChange={setPrincipal}
          min={1000}
          max={10000000}
          step={1000}
          prefix="₹"
        />
        <hr />
        <Field
          label="Expected return"
          value={rate}
          onChange={setRate}
          min={1}
          max={30}
          step={0.5}
          suffix="%"
        />
        <hr />
        <Field
          label="Time period"
          value={years}
          onChange={setYears}
          min={1}
          max={40}
          suffix="yrs"
        />
        <hr />
      </div>
      <div className="col-12 col-xl-6">
        <div className={'row g-2 g-lg-3'}>
          <div className={'col-12 col-md-6'}>
            <ResultCard label="Invested" value={fmtINR(principal)} />
          </div>
          <div className={'col-12 col-md-6'}>
            <ResultCard
              label="Est. returns"
              value={fmtINR(value - principal)}
            />
          </div>
          <div className={'col-12'}>
            <ResultCard
              label="Future value"
              value={`₹${fmtFull(value)}`}
              highlight
            />
          </div>
        </div>
        <div className={'col-12 mt-2'}>
          <GrowthChart
            data={data}
            keys={[{ key: 'value', label: 'Value', color: '#ffb703' }]}
          />
        </div>
      </div>
    </div>
  )
}
