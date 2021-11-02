import * as React from 'react'
import { Units } from './../../Common/MathUnits'

const CustomSelect = (props: any) => {
  const { label, id, value, onChange } = props
  return (
    <div className="form-group col">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className="form-control"
        value={value}
        onChange={onChange}
      >
        <option selected>Select unit</option>
        {Units.map(({ name, unit }) => (
          <option
            key={unit}
            value={unit}
          >
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CustomSelect
