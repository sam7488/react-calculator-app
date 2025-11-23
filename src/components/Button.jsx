import css from './Button.module.css'

const Button = ({value}) => {
  return <button className={css.button}>{value}</button>
}

export default Button;