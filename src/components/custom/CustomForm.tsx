import * as React from 'react'

const CustomForm = (props: any) => {
  const { label, type, id, placeholder, value, onChange, colValue } = props
  return (
    <div className="form-group col">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default CustomForm
