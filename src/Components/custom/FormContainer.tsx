import React from 'react'
import { Formik } from 'formik';


interface FormI {
  initialValues: any;
  onSubmit: any;
  Component: React.ComponentType;
  Props: any;
}

function FormContainer(props: FormI) {
  const { initialValues, onSubmit, Component, Props } = props
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <Component
          {...formikProps}
          {...Props}
        />
      )}
    </Formik>
  )
}

export default FormContainer
