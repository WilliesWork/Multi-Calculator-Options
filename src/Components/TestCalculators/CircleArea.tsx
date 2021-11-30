import React from 'react'

import { CALCULATORS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../Common/shared'
import { CustomBtn, CustomTextInput, Label, CustomSelect, CustomResetBtn } from '../custom'
import { FormContainer } from '../custom'
import { CircleAreaI } from '../../Types'

function FormComponent() {
  const [initialValues, setInitialValues] = React.useState({
    radius: "",
    radius_unit: "",
  })
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("RADIUS: ", initialValues.radius)
  };

  const handleChange = (event: any) => {
    event.preventDefault()
    const { id, value } = event.currentTarget;

    if (id === "radius") {
      setInitialValues({ ...initialValues, radius: value });
      console.log("Radius: ", value);
    } else if (id === "radius_unit") {
      setInitialValues({ ...initialValues, radius_unit: value });
      console.log("Radius unit: ", value);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-row">
          <Label title={LABELS.radius} />
          <CustomTextInput
            type={INPUT_TYPE.number}
            id="radius"
            name={initialValues.radius}
            placeholder={PLACEHOLDERS.number}
            value={initialValues.radius}
            onChange={handleChange}
          />

          <CustomSelect
            measurement="length"
            id="radius_unit"
            value={initialValues.radius_unit}
            onChange={handleChange}
          />
        </div>

        <div
          className="form-row"
          style={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <CustomBtn />
          <CustomResetBtn />
        </div>
      </form>
    </div>
  )
}

function CircleArea(props: any) {
  const { initialValues } = props;
  const handleSubmit = (formData: any) => {
    console.log(formData);
  };

  const test = {}
  return (
    <FormContainer
      initialValues={initialValues}
      onSubmit={handleSubmit}
      Component={FormComponent}
      Props={test}
    />
  )
}

export default CircleArea
