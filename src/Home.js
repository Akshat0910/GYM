import React from 'react'
import { Box } from '@mui/material'
import { useState } from 'react'

import Herobanner from './Herobanner'
import Searchexercise from './Searchexercise'
import Exercises from './Exercises'

export default function Home() {

    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
        <Herobanner></Herobanner>
        <Searchexercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}></Searchexercise>
        <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
       
    </Box>
  )
}
