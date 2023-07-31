import React from 'react'
import ClearSkillList from './ClearSkillList'
import levels from './AllSkills.json'

const SkillList = ({ level }) => {
  function GetSkill(level) {
    let level_skills = levels[level]
    
    // Create array of skills object keys
    const keys = Object.keys(level_skills)
  
    // Generate random index based on number of keys
    const randIndex = Math.floor(Math.random() * keys.length)
  
    // Select a key from the array of keys using the random index
    const randKey = keys[randIndex]
  
    // Use the key to get the corresponding name from the "names" object
    const newSkill = level_skills[randKey]
    return newSkill
  }

  return (
    <div>Skill List
        <ol></ol>
        <button onClick={() => document.querySelector('ol').innerHTML += `<li>${GetSkill(level)}</li>`}>Add skill</button>
        <button onClick={ClearSkillList}>Reset</button>
    </div>
  )
}

export default SkillList