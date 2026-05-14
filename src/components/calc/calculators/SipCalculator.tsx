import { fmtFull, fmtINR, fvSIP, sipSeries } from '@/lib/finance'
import { useMemo, useState } from 'react'
import { GrowthChart } from './GrowthChart'
import { Field, ResultCard } from './shared'

export function SipCalculator() {
  const [monthly, setMonthly] = useState(10000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(15)

  const { value, invested, gain, data } = useMemo(() => {
    const v = fvSIP(monthly, rate, years)
    const inv = monthly * years * 12
    return {
      value: v,
      invested: inv,
      gain: v - inv,
      data: sipSeries(monthly, rate, years),
    }
  }, [monthly, rate, years])

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
            <ResultCard label="Invested" value={fmtINR(invested)} />
          </div>
          <div className={'col-12 col-md-6'}>
            <ResultCard label="Est. returns" value={fmtINR(gain)} />
          </div>
          <div className={'col-12'}>
            <ResultCard
              label="Future value"
              value={`₹${fmtFull(value)}`}
              highlight
            />
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
                // { key: 'value', label: 'Value', color: 'var(--gold)' },
                { key: 'value', label: 'Value', color: '#ffbe0b' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
