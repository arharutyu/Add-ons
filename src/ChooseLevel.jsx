import React, { useState, useEffect } from 'react'

const ChooseLevel = ({ level, setLevel }) => {
    const [levels, setLevels] = useState([])

    useEffect(() => {
        fetch('./AllSkills.json',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
            .then(levels => levels.json())
            .then(levels => setLevels(levels))
        }, [])
        

        console.log(levels)
    return (
        null
        // <select onChange={event => setLevel(event.target.value)} value={level}>
        // {levels.map(levels => <option value={levels.keys}>{levels.keys}</option>)}
        // </select> 
     )
}

export default ChooseLevel