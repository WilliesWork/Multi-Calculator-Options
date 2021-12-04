import React from 'react'

const CustomForm = (props: any) => {
    return (
        <input
          name={props.name}
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
    )
  }

  export default CustomForm