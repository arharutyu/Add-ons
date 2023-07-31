import { useState } from 'react'
import './App.css'
import SkillList from './SkillList'
import ChooseLevel from './ChooseLevel'

function App() {
  const [level, setLevel] = useState("Level 1")
  
  return (
    <>
      <h1>Add Ons Cheer Challenge</h1>
      <ChooseLevel level={level} setLevel={setLevel}/>
      <SkillList level={level} />

    </>
  )
}

export default App
