import * as React from 'react'

interface CustomTextInputProps {
  type: string;
  id: string;
  placeholder: string,
  value: string;
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
  };
}

const CustomTextInput = (props: CustomTextInputProps) => {
  const { type, id, placeholder, value, onChange } = props
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

export default CustomTextInput
