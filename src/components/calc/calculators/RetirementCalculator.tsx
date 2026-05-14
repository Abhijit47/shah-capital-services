import { fmtFull, fmtINR, inflate, requiredSIP } from '@/lib/finance'
import { useMemo, useState } from 'react'
import { Field, ResultCard } from './shared'

export function RetirementCalculator() {
  const [age, setAge] = useState(30)
  const [retireAge, setRetireAge] = useState(60)
  const [lifeExpectancy, setLifeExpectancy] = useState(85)
  const [monthlyExpense, setMonthlyExpense] = useState(50000)
  const [inflation, setInflation] = useState(6)
  const [preReturn, setPreReturn] = useState(12)
  const [postReturn, setPostReturn] = useState(7)

  const { corpus, sip, futureMonthly } = useMemo(() => {
    const yearsToRetire = Math.max(1, retireAge - age)
    const yearsInRetirement = Math.max(1, lifeExpectancy - retireAge)
    const futMonthly = inflate(monthlyExpense, inflation, yearsToRetire)
    // Real return after retirement (post-return adjusted for inflation)
    const realRate = (1 + postReturn / 100) / (1 + inflation / 100) - 1
    const i = realRate / 12
    const n = yearsInRetirement * 12
    const requiredCorpus =
      i === 0 ? futMonthly * n : futMonthly * ((1 - Math.pow(1 + i, -n)) / i)
    const monthlySip = requiredSIP(requiredCorpus, preReturn, yearsToRetire)
    return {
      corpus: requiredCorpus,
      sip: monthlySip,
      futureMonthly: futMonthly,
    }
  }, [
    age,
    retireAge,
    lifeExpectancy,
    monthlyExpense,
    inflation,
    preReturn,
    postReturn,
  ])

  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        <Field
          label="Current age"
          value={age}
          onChange={setAge}
          min={18}
          max={60}
          suffix="yrs"
        />
        <hr />
        <Field
          label="Retirement age"
          value={retireAge}
          onChange={setRetireAge}
          min={40}
          max={75}
          suffix="yrs"
        />
        <hr />
        <Field
          label="Life expectancy"
          value={lifeExpectancy}
          onChange={setLifeExpectancy}
          min={60}
          max={100}
          suffix="yrs"
        />
        <hr />
        <Field
          label="Current monthly expense"
          value={monthlyExpense}
          onChange={setMonthlyExpense}
          min={5000}
          max={500000}
          step={1000}
          prefix="₹"
        />
        <hr />
        <Field
          label="Inflation"
          value={inflation}
          onChange={setInflation}
          min={2}
          max={12}
          step={0.5}
          suffix="%"
        />
        <hr />
        <Field
          label="Return till retirement"
          value={preReturn}
          onChange={setPreReturn}
          min={4}
          max={20}
          step={0.5}
          suffix="%"
        />
        <hr />
        <Field
          label="Return after retirement"
          value={postReturn}
          onChange={setPostReturn}
          min={3}
          max={15}
          step={0.5}
          suffix="%"
        />
        <hr />
      </div>
      <div className="col-12 col-xl-6">
        <div className={'row g-2 g-lg-3'}>
          <div className={'col-12'}>
            <ResultCard
              label="Monthly expense at retirement"
              value={`₹${fmtFull(futureMonthly)}`}
            />
          </div>
          <div className={'col-12'}>
            <ResultCard
              label="Retirement corpus needed"
              value={`₹${fmtFull(corpus)}`}
            />
          </div>
          <div className={'col-12'}>
            <ResultCard
              label="Monthly SIP required now"
              value={`₹${fmtFull(sip)}`}
              highlight
            />
          </div>
        </div>
        <div className={'col-12 mt-2'}>
          <p className="">
            Save {fmtINR(sip)}/month for {Math.max(1, retireAge - age)} years to
            build a {fmtINR(corpus)} corpus.
          </p>
        </div>
      </div>
    </div>
  )
}
