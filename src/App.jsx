import { useState } from 'react'
import './App.css'
import GetSkill from './GetSkill'
import SkillList from './SkillList'
import ChooseLevel from './ChooseLevel'

function App() {
  const [skill, setSkill] = useState(0)
  
  return (
    <>
      <h1>Add Ons Cheer Challenge</h1>
      <ChooseLevel />
      <SkillList />

    </>
  )
}

export default App
