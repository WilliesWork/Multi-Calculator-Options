import * as React from 'react'
//import { Units } from './../../Common/MathUnits'

import Capacity from './../../Lib/Capacity.json'
import Length from './../../Lib/Length.json'
import Speed from './../../Lib/Speed.json'
import Storage from './../../Lib/Storage.json'
import Time from './../../Lib/Time.json'
import Units from './../../Lib/Units.json'
import Weight from './../../Lib/Weight.json'


const CustomSelect = (props: any) => {
  const { id, value, onChange, measurement } = props

  // If you have a better way to make this happen, have at it using the Units file, comparing the `measurement` to the `type`, and return the units for that object.
  if (measurement === "capacity") {
    return (
      <div className="form-group col">
        <select
          id={id}
          className="form-control"
          value={value}
          onChange={onChange}
        >
          <option selected style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Select unit</option>
          {Capacity.map(({ type, units }) => (
            units.map(({ name, unit }) => (
              <option
                key={unit}
                value={unit}
              >
                {name}
              </option>
            ))
          ))}
        </select>
      </div>
    )

  } else if (measurement === "length") {
    return (
      <div className="form-group col">
        <select
          id={id}
          className="form-control"
          value={value}
          onChange={onChange}
        >
          <option selected style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Select unit</option>
          {Length.map(({ type, units }) => (
            units.map(({ name, unit }) => (
              <option
                key={unit}
                value={unit}
              >
                {name}
              </option>
            ))
          ))}
        </select>
      </div>
    )

  } else if (measurement === "speed") {
    return (
      <div className="form-group col">
        <select
          id={id}
          className="form-control"
          value={value}
          onChange={onChange}
        >
          <option selected style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Select unit</option>
          {Speed.map(({ type, units }) => (
            units.map(({ name, unit }) => (
              <option
                key={unit}
                value={unit}
              >
                {name}
              </option>
            ))
          ))}
        </select>
      </div>
    )

  } else if (measurement === "storage") {
    return (
      <div className="form-group col">
        <select
          id={id}
          className="form-control"
          value={value}
          onChange={onChange}
        >
          <option selected style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Select unit</option>
          {Storage.map(({ type, units }) => (
            units.map(({ name, unit }) => (
              <option
                key={unit}
                value={unit}
              >
                {name}
              </option>
            ))
          ))}
        </select>
      </div>
    )

  } else if (measurement === "time") {
    return (
      <div className="form-group col">
        <select
          id={id}
          className="form-control"
          value={value}
          onChange={onChange}
        >
          <option selected style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Select unit</option>
          {Time.map(({ type, units }) => (
            units.map(({ name, unit }) => (
              <option
                key={unit}
                value={unit}
              >
                {name}
              </option>
            ))
          ))}
        </select>
      </div>
    )
  } else if (measurement === "weight") {
    return (
      <div className="form-group col">
        <select
          id={id}
          className="form-control"
          value={value}
          onChange={onChange}
        >
          <option selected style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Select unit</option>
          {Weight.map(({ type, units }) => (
            units.map(({ name, unit }) => (
              <option
                key={unit}
                value={unit}
              >
                {name}
              </option>
            ))
          ))}
        </select>
      </div>
    )
  } else {
    return (
      <div className="form-group col">
        <select
          id={id}
          className="form-control"
          value={value}
          onChange={onChange}
        >
          <option selected style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Select unit</option>
          {Units.map(({ type, units }) => (
            units.map(({ name, unit }) => (
              <option
                key={unit}
                value={unit}
              >
                {name}
              </option>
            ))
          ))}
        </select>
      </div>
    )
  }
}

export default CustomSelect
