import { useId } from 'react'

interface FieldProps {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step?: number
  suffix?: string
  prefix?: string
}

export function Field({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix,
  prefix,
}: FieldProps) {
  const id = useId()

  return (
    <div>
      <div className="d-flex flex-wrap">
        <label htmlFor={label} className="d-block form-label flex-grow-1">
          {label}
        </label>
        <div className="input-group" style={{ width: 'fit-content' }}>
          {prefix && <span className="input-group-text">{prefix}</span>}
          <input
            id={label}
            type="number"
            value={Number.isFinite(value) ? value : 0}
            onChange={(e) => {
              const v = e.target.value
              // onChange(Number.isFinite(v) ? v : 0)
              onChange(Number.isFinite(Number(v)) ? Number(v) : 0)
            }}
            className="form-control"
          />
          {suffix && <span className="input-group-text">{suffix}</span>}
        </div>
      </div>

      <div className={'mt-2'}>
        <label htmlFor={id} className="form-label visually-hidden">
          {label}
        </label>
        <input
          type="range"
          className="form-range"
          id={id}
          min={min}
          max={max}
          step={step}
          // value={[Math.min(Math.max(value, min), max)]}
          value={
            Number.isFinite(value)
              ? Math.min(Math.max(Number(value), min), max)
              : min
          }
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  )
}

export function ResultCard({
  label,
  value,
  highlight = false,
}: {
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div
      className={`card p-0 ${
        highlight ? 'border border-warning' : 'border border-success'
      }`}
    >
      <div className="card-body">
        <h5 className="">{label}</h5>
        <p className={` ${highlight ? '' : ''}`}>{value}</p>
      </div>
    </div>
  )
}
