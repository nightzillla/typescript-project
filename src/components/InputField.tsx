import React from 'react'
import "./style.css"

const InputField = () => { 
  return (
    <form className='input'>
        <input type = 'input' placeholder='Enter a task' className="input_box"/>
        <button className='input_sumbit' type='submit'>Go</button>
    </form>
  )
}

export default InputField