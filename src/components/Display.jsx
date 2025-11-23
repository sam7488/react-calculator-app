import css from './Display.module.css'

function Display({value}) {
  return <input 
  className={css.display} 
  value={value}
  readOnly
  ></input>
}

export default Display;