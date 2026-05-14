import { fmtFull, fmtINR, fvSIP } from '@/lib/finance'
import { useMemo, useState } from 'react'
import { GrowthChart } from './GrowthChart'
import { Field, ResultCard } from './shared'

export function CostOfDelayCalculator() {
  const [monthly, setMonthly] = useState(10000)
  const [rate, setRate] = useState(12)
  const [totalYears, setTotalYears] = useState(25)
  const [delay, setDelay] = useState(5)

  const { now, later, gap, data } = useMemo(() => {
    const a = fvSIP(monthly, rate, totalYears)
    const b = fvSIP(monthly, rate, Math.max(0, totalYears - delay))
    const series = Array.from({ length: totalYears + 1 }, (_, y) => ({
      year: y,
      'Start now': fvSIP(monthly, rate, y),
      [`Delay ${delay} yrs`]: y < delay ? 0 : fvSIP(monthly, rate, y - delay),
    }))
    return { now: a, later: b, gap: a - b, data: series }
  }, [monthly, rate, totalYears, delay])

  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        <Field
          label="Monthly investment"
          value={monthly}
          onChange={setMonthly}
          min={500}
          max={200000}
          step={500}
          prefix="₹"
        />
        <hr />
        <Field
          label="Expected return"
          value={rate}
          onChange={setRate}
          min={1}
          max={25}
          step={0.5}
          suffix="%"
        />
        <hr />
        <Field
          label="Total horizon"
          value={totalYears}
          onChange={setTotalYears}
          min={5}
          max={40}
          suffix="yrs"
        />
        <hr />
        <Field
          label="Delay starting by"
          value={delay}
          onChange={setDelay}
          min={1}
          max={Math.max(1, totalYears - 1)}
          suffix="yrs"
        />
        <hr />
      </div>
      <div className="col-12 col-xl-6">
        <div className={'row g-2 g-lg-3'}>
          <div className={'col-12 col-md-6'}>
            <ResultCard label="If you start now" value={fmtINR(now)} />
          </div>
          <div className={'col-12 col-md-6'}>
            <ResultCard
              label={`If you delay ${delay} yrs`}
              value={fmtINR(later)}
            />
          </div>
          <div className={'col-12'}>
            <ResultCard
              label="Cost of delay"
              value={`₹${fmtFull(gap)}`}
              highlight
            />
          </div>
        </div>
        <div className={'col-12 mt-2'}>
          <GrowthChart
            data={data}
            keys={[
              // { key: 'Start now', label: 'Start now', color: 'var(--gold)' },
              { key: 'Start now', label: 'Start now', color: '#ffbe0b' },
              {
                key: `Delay ${delay} yrs`,
                label: `Delay ${delay} yrs`,
                color: 'var(--fixpro-base)',
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
