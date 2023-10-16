import './App.css'
import { useState } from "react"
import Greetings from "./components/Greetings"
import COntainer from './components/Container'
import Counter from './components/Counter'
import Input from "./components/input"

const App = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  return (
    <>
      <p>Ahoj</p><p>Piza</p>
      <Greetings text="Nazdar"/>
      <COntainer></COntainer>
      <Counter value={a} setValue={setA} /> + <Counter value={b} setValue={setB}/> = <strong>{a + b}</strong>
      <br></br><br></br>
      <Input></Input>
    </>
  )
}

export default App
