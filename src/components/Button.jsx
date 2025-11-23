import css from './Button.module.css'

const Button = ({value, handleClick}) => {
  return <button className={css.button} onClick={() => handleClick(value)}>{value}</button>
}

export default Button;