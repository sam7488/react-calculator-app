import css from './App.module.css'
import Buttons from './components/Buttons';
import Display from './components/Display';

function App() {
  const list = ['C']
  return (
    <div className={css.calculator}>
      <Display />
      <Buttons />
    </div>
  )
}

export default App;