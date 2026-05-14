import { fmtFull, fmtINR, requiredSIP } from '@/lib/finance'
import { useMemo, useState } from 'react'
import { Field, ResultCard } from './shared'

export function GoalPlannerCalculator() {
  const [goal, setGoal] = useState(5000000)
  const [years, setYears] = useState(10)
  const [rate, setRate] = useState(12)

  const sip = useMemo(() => requiredSIP(goal, rate, years), [goal, rate, years])
  const invested = sip * years * 12

  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        <Field
          label="Target amount"
          value={goal}
          onChange={setGoal}
          min={50000}
          max={100000000}
          step={50000}
          prefix="₹"
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
      </div>
      <div className="col-12 col-xl-6">
        <div className={'row g-2 g-lg-3'}>
          <div className={'col-12'}>
            <ResultCard label="Goal" value={`₹${fmtFull(goal)}`} />
          </div>
          <div className={'col-12'}>
            <ResultCard
              label="Total invested"
              value={`₹${fmtFull(invested)}`}
            />
          </div>
          <div className={'col-12'}>
            <ResultCard
              label="Required monthly SIP"
              value={`₹${fmtFull(sip)}`}
              highlight
            />
          </div>
        </div>
        <div className={'col-12 mt-2'}>
          <p className="">
            Invest {fmtINR(sip)} every month for {years} years at {rate}% to
            reach {fmtINR(goal)}.
          </p>
        </div>
      </div>
    </div>
  )
}
