import React from 'react'

import { CALCULATORS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../Common/shared'
import { CustomBtn, CustomTextInput, Label, CustomSelect, CustomResetBtn } from '../custom'
import { FormContainer } from '../custom'
import { EllipseAreaI } from '../../Types'

function FormComponent() {
  return (
    <div>
      <form className="form-container">
        <div className="form-row">
          <Label title={LABELS.semiMajorAxesA} />
          <CustomTextInput
            type={INPUT_TYPE.number}
            id="semi_major_axes_a"
            name="semi_major_axes_a"
            placeholder={PLACEHOLDERS.number}
          />

          <CustomSelect
            measurement="length"
            id="semi_major_axes_a_unit"
          />
        </div>

        <div className="form-row">
          <Label title={LABELS.semiMajorAxesB} />
          <CustomTextInput
            type={INPUT_TYPE.number}
            id="semi_major_axes_b"
            name="semi_major_axes_b"
            placeholder={PLACEHOLDERS.number}
          />

          <CustomSelect
            measurement="length"
            id="semi_major_axes_b_unit"
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

function EllipseArea() {
  const initialValues = {
    semi_major_axes_a: "",
    semi_major_axes_a_unit: "",
    semi_major_axes_b: "",
    semi_major_axes_b_unit: "",
  };

  const payload: EllipseAreaI = {
    semi_major_axes_a: initialValues.semi_major_axes_a,
    semi_major_axes_a_unit: initialValues.semi_major_axes_a_unit,
    semi_major_axes_b: initialValues.semi_major_axes_b,
    semi_major_axes_b_unit: initialValues.semi_major_axes_b_unit,
    method: 'ellipseArea'
  }
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

export default EllipseArea
