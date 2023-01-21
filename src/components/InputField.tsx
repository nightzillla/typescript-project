import React from 'react'
import "./style.css"

interface Props {
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField: React.FC <Props> = ({ todo, setTodo }: Props) => {

  return (
    <form className='input'>
        <input 
        type = 'input'
        value={todo}
        onChange={(e) => setTodo(e.target.value)} 
        placeholder='Enter a task' 
        className="input_box"/>
        <button className='input_sumbit' type='submit'>Go</button>
    </form>
  )
}

export default InputField