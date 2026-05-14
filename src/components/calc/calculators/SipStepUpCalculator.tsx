import { fmtFull, fmtINR, sipStepUpSeries } from '@/lib/finance'
import { useMemo, useState } from 'react'
import { GrowthChart } from './GrowthChart'
import { Field, ResultCard } from './shared'

export function SipStepUpCalculator() {
  const [monthly, setMonthly] = useState(10000)
  const [stepUp, setStepUp] = useState(10)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(20)

  const { value, invested, data } = useMemo(() => {
    const series = sipStepUpSeries(monthly, rate, years, stepUp)
    const last = series[series.length - 1]
    return { value: last.value, invested: last.invested, data: series }
  }, [monthly, rate, years, stepUp])

  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        <Field
          label="Initial monthly SIP"
          value={monthly}
          onChange={setMonthly}
          min={500}
          max={200000}
          step={500}
          prefix="₹"
        />
        <hr />
        <Field
          label="Annual step-up"
          value={stepUp}
          onChange={setStepUp}
          min={0}
          max={50}
          step={1}
          suffix="%"
        />
        <hr />
        <Field
          label="Expected return rate"
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
            <ResultCard label="Total invested" value={fmtINR(invested)} />
          </div>
          <div className={'col-12 col-md-6'}>
            <ResultCard label="Est. returns" value={fmtINR(value - invested)} />
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
            keys={[
              {
                key: 'invested',
                label: 'Invested',
                color: 'var(--fixpro-base)',
              },
              { key: 'value', label: 'Value', color: '#ffbe0b' },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
