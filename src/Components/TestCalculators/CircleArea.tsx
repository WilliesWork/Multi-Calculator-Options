import React from 'react'

import { CALCULATORS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../Common/shared'
import { CustomBtn, CustomTextInput, Label, CustomSelect, CustomResetBtn } from '../custom'
import { FormContainer } from '../custom'
import { CircleAreaI } from '../../Types'

function FormComponent() {
  return (
    <div>
      <form className="form-container">
        <div className="form-row">
          <Label title={LABELS.radius} />
          <CustomTextInput
            type={INPUT_TYPE.number}
            name="radius"
            id="radius"
            placeholder={PLACEHOLDERS.number}
          />

          <CustomSelect
            measurement="length"
            id="radius_unit"
            name="radius_unit"
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

function CircleArea() {
  const initialValues = {};
  const handleSubmit = React.useCallback((formData) => {
    console.log(formData);
  }, []);
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
