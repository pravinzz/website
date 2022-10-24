import React, { useState, useEffect, } from 'react';
import Navbar from '../../components/Navbar/Navbar'


const Skills = () => {

  const [count, updateCount] = useState(0)

  // useEffect(() => {
  //   alert('hello everyone!')
  // })

  return (

    <div>
      <Navbar />
      <h1>you have clicked {count}</h1>
      <button onClick={() => updateCount(count + 1)} type='primary'>
        hello
      </button>
    </div>

  )
}

export default Skills;
