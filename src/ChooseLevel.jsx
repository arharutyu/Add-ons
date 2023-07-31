import React, { useState, useEffect } from 'react'
import allLevels from "./AllSkills.json"

const ChooseLevel = ({ level, setLevel }) => {
// create state object for setting level
    const [levels, setLevels] = useState([])
    
    // use effect to set all available levels from allskills JSON keys
    useEffect(() => setLevels(Object.keys(allLevels)), [])

    return <>
{/* return selection form */}
        <select onChange={event => setLevel(event.target.value)} value={level}>
            {/* map levels to add option value from levels in state above*/}
            {levels.map(levels => <option key={levels} value={levels}>{levels}</option>)} 
        </select> 
        <p>You have selected: {level}</p>
        {/* <p>Skills included:</p> */}

    </>
}

export default ChooseLevel
