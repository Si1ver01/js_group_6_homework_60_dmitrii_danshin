import React from 'react'
import classes from './Input.module.css';

const Input = ({label,value,handler,required,type='text'}) => {
  return (
    <div className={classes.Input}>
      <input type={type} placeholder={label} value={value} onChange={handler} required={required}/>
    </div>
  )
}

export default Input
