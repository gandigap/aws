import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { Typography } from '@mui/material';
import { Button } from '@mui/base';
export const AddTaskForm = () => {
  const [task, setTask] = useState('')

  const handleChange = (e)=>{
    setTask(e.target.value)
  }

  const handleClick = ()=>{
    console.log('add new task');
  }

  return (
    <div>
      <Typography align='center' variant='h2' paddingTop={2} paddingBottom={2}>My AWS task list</Typography>
      <TextField id="outlined-basic" size={'small'}label="Task" variant="outlined" value={task} onChange={handleChange} />
      <Button onClick={handleClick}>
        <AddBoxIcon/>
      </Button>
    </div>
  )
}
