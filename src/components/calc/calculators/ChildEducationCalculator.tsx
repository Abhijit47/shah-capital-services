import { fmtFull, fmtINR, fvLumpsum, inflate, requiredSIP } from '@/lib/finance'
import { useMemo, useState } from 'react'
import { Field, ResultCard } from './shared'

export function ChildEducationCalculator() {
  const [currentCost, setCurrentCost] = useState(2000000)
  const [yearsToGoal, setYearsToGoal] = useState(15)
  const [inflation, setInflation] = useState(8)
  const [returnRate, setReturnRate] = useState(12)
  const [existing, setExisting] = useState(0)

  const { future, neededAfterExisting, sip } = useMemo(() => {
    const f = inflate(currentCost, inflation, yearsToGoal)
    const grownExisting = fvLumpsum(existing, returnRate, yearsToGoal)
    const need = Math.max(0, f - grownExisting)
    const s = requiredSIP(need, returnRate, yearsToGoal)
    return { future: f, neededAfterExisting: need, sip: s }
  }, [currentCost, yearsToGoal, inflation, returnRate, existing])

  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        <Field
          label="Current education cost"
          value={currentCost}
          onChange={setCurrentCost}
          min={100000}
          max={20000000}
          step={50000}
          prefix="₹"
        />
        <hr />
        <Field
          label="Years to goal"
          value={yearsToGoal}
          onChange={setYearsToGoal}
          min={1}
          max={25}
          suffix="yrs"
        />
        <hr />
        <Field
          label="Education inflation"
          value={inflation}
          onChange={setInflation}
          min={3}
          max={15}
          step={0.5}
          suffix="%"
        />
        <hr />
        <Field
          label="Expected return"
          value={returnRate}
          onChange={setReturnRate}
          min={4}
          max={20}
          step={0.5}
          suffix="%"
        />
        <hr />
        <Field
          label="Existing savings"
          value={existing}
          onChange={setExisting}
          min={0}
          max={10000000}
          step={10000}
          prefix="₹"
        />
        <hr />
      </div>
      <div className="col-12 col-xl-6">
        <div className={'row g-2 g-lg-3'}>
          <div className={'col-12'}>
            <ResultCard label="Future cost" value={`₹${fmtFull(future)}`} />
          </div>
          <div className={'col-12'}>
            <ResultCard
              label="Amount still needed"
              value={`₹${fmtFull(neededAfterExisting)}`}
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
            To fund {fmtINR(future)} in {yearsToGoal} years, invest{' '}
            {fmtINR(sip)}
            /month at {returnRate}% returns.
          </p>
        </div>
      </div>
    </div>
  )
}
