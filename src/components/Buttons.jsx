import css from './Buttons.module.css';
import Button from './Button';

function Buttons({handleClick}) {
  const buttonNames = [
    'AC', 'C', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
];

  return (
    <div className={css.buttons}>
      {buttonNames.map((val) => (
        <Button key={val} value={val} handleClick={handleClick}></Button>
      ))}
    </div>
  )
}

export default Buttons;