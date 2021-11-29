import React from 'react'

import { CustomBtn, CustomTextInput, Label } from './index'
import { CALCULATORS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE, COLORS } from '../../Common/shared'
import FormContainer from './FormContainer'

function FormComponent() {
  return (
    <div>
      <form className="form-container">
        <div className="form-row">
          <Label title="First name" />
          <CustomTextInput
            type={INPUT_TYPE.text}
            name="firstName"
            id="firstName"
            placeholder="Jane"
          />
        </div>

        <div className="form-row">
          <Label title="Last name" />
          <CustomTextInput
            type={INPUT_TYPE.text}
            name="lastName"
            id="lastName"
            placeholder="Doe"
          />
        </div>

        <div className="form-row">
          <Label title="Email" />
          <CustomTextInput
            type='email'
            name="email"
            id="email"
            placeholder="jane@acme.com"
          />
        </div>

        <div className="form-row">
          <Label title="Password" />
          <CustomTextInput
            type='password'
            name="password"
            id="password"
            placeholder="password"
          />
        </div>

        <CustomBtn />
      </form>
    </div>
  )
}

const TestCalculator = () => {
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

export default TestCalculator
