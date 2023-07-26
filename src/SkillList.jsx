import React from 'react'
import GetSkill from './GetSkill'
import ClearSkillList from './ClearSkillList'


const SkillList = (props) => {
  return (
    <div>Skill List
        <ol></ol>
        <button onClick={GetSkill}>Add skill</button>
        <button onClick={ClearSkillList}>Reset</button>
    </div>
  )
}

export default SkillList