import React from 'react'

export const InputBox = ({label="default",placeholder,onChange,type = "text",size="large",extraClasses="", value}) => {
  return (
    <div>
      {
        label !== "default" ? 
        <div className='font-medium mb-1'><label>{label}</label></div> : <></>
      }
      <input placeholder={placeholder}  type={type} className={`p-2 border border-gray-500 rounded-md  ${size === "large" ? "w-full" : "w-auto"} ${extraClasses}`}  onChange={onChange} value={value}></input>
    </div>
  )
}

