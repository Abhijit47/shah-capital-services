import { fmtINR, swpMonths, swpSeries } from '@/lib/finance'
import { useMemo, useState } from 'react'
import { GrowthChart } from './GrowthChart'
import { Field, ResultCard } from './shared'

export function SwpCalculator() {
  const [corpus, setCorpus] = useState(5000000)
  const [withdraw, setWithdraw] = useState(30000)
  const [rate, setRate] = useState(8)
  const [years, setYears] = useState(20)

  const { months, data } = useMemo(() => {
    return {
      months: swpMonths(corpus, withdraw, rate),
      data: swpSeries(corpus, withdraw, rate, years),
    }
  }, [corpus, withdraw, rate, years])

  const lastsLabel =
    months === Infinity
      ? 'Never depletes'
      : `${Math.floor(months / 12)} yrs ${months % 12} mo`
  const totalWithdrawn = withdraw * Math.min(months, years * 12)

  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        <Field
          label="Total corpus"
          value={corpus}
          onChange={setCorpus}
          min={100000}
          max={50000000}
          step={50000}
          prefix="₹"
        />
        <hr />
        <Field
          label="Monthly withdrawal"
          value={withdraw}
          onChange={setWithdraw}
          min={1000}
          max={500000}
          step={500}
          prefix="₹"
        />
        <hr />
        <Field
          label="Expected return rate"
          value={rate}
          onChange={setRate}
          min={1}
          max={20}
          step={0.5}
          suffix="%"
        />
        <hr />
        <Field
          label="Projection period"
          value={years}
          onChange={setYears}
          min={5}
          max={50}
          suffix="yrs"
        />
        <hr />
      </div>
      <div className="col-12 col-xl-6">
        <div className={'row g-2 g-lg-3'}>
          <div className={'col-12 col-md-6'}>
            <ResultCard
              label="Total withdrawn"
              value={fmtINR(totalWithdrawn)}
            />
          </div>
          <div className={'col-12 col-md-6'}>
            <ResultCard
              label="Final balance"
              value={fmtINR(data[data.length - 1]?.balance ?? 0)}
            />
          </div>
          <div className={'col-12'}>
            <ResultCard label="Corpus lasts" value={lastsLabel} highlight />
          </div>
        </div>
        <div className={'col-12 mt-2'}>
          <GrowthChart
            data={data}
            keys={[{ key: 'balance', label: 'Balance', color: '#ffbe0b' }]}
          />
        </div>
      </div>
    </div>
  )
}
