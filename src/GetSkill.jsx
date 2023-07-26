import React from 'react'

const GetSkill = (props) => {

  const skills = ['Cartwheel', 'Handstand', 'Front Walkover', 'Back Walkover']

  // Create array of skills object keys
  const keys = Object.keys(skills)

  // Generate random index based on number of keys
  const randIndex = Math.floor(Math.random() * keys.length)

  // Select a key from the array of keys using the random index
  const randKey = keys[randIndex]

  // Use the key to get the corresponding name from the "names" object
  const newSkill = skills[randKey]


  console.log(newSkill)
    return document.querySelector('ol').innerHTML += `<li>${newSkill}</li>`
}

export default GetSkill