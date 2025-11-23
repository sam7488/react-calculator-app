import css from './App.module.css'
import Buttons from './components/Buttons';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const operators = ['%', '/', '*', '-', '+']
  let [value, setValue] = useState("");

  function handleClick(val) {
    let newValue = "";

    if(value.length == 0 && (val == 'C' || operators.includes(val) || val == '=') ) return;

    if(val === 'C') {
      newValue = value.substring(0, value.length - 1);
    }
    else if(operators.includes(val)) {
      newValue = (operators.includes(value.charAt(value.length - 1)) ? value.substring(0, value.length - 1) : value) + val;
    }
    else if(val === '.') {
      if(value.length == 0) {
        newValue = '0' + val;
      }
      else {
        let flag = true;
        let len = value.length;
        while(len >= 0 && !operators.includes(value.charAt(len))) {
          const ch = value.charAt(len - 1);
          if(ch == '.') {
            flag = false;
            break;
          }
          len--;
        }

        newValue = value + (flag ? val : '');
      }
    }
    else if(val === '=') {
      newValue = operators.includes(value.charAt(value.length - 1)) ? value : eval(value).toString();
    }
    else if(val !== 'AC') {
      newValue = value + val;
    }

    setValue(newValue);
  }

  return (
    <div className={css.calculator}>
      <Display value={value}/>
      <Buttons handleClick={handleClick}/>
    </div>
  )
}

export default App;