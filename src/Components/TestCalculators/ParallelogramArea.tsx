import React from 'react'

import { CALCULATORS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../Common/shared'
import { CustomBtn, CustomTextInput, Label, CustomSelect, CustomResetBtn } from '../custom'
import { FormContainer } from '../custom'
import { ParallelogramAreaI } from '../../Types'

function FormComponent() {
  return (
    <div>
      <form className="form-container">
        <div className="form-row">
          <Label title={LABELS.breadth} />
          {/* <CustomTextInput
            type={INPUT_TYPE.number}
            id="breadth"
            placeholder={PLACEHOLDERS.number}
          />
 */}
          <CustomSelect
            measurement="length"
            id="breadth_unit"
          />
        </div>

        <div className="form-row">
          <Label title={LABELS.height} />
          {/* <CustomTextInput
            type={INPUT_TYPE.number}
            id="height"
            placeholder={PLACEHOLDERS.number}
          /> */}

          <CustomSelect
            measurement="length"
            id="height_unit"
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

function ParallelogramArea() {
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

export default ParallelogramArea
