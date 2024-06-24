import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button, Typography } from '@mui/material';
import './index.css';

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
      <Typography 
        align='center' 
        variant='h2' 
        paddingTop={2} 
        paddingBottom={2}>
          My AWS task list
      </Typography>
      <div className='addTaskForm'>
        <TextField 
          id="outlined-basic" 
          size={'small'}
          label="Task" 
          variant="outlined" 
          value={task} 
          onChange={handleChange} />
        <Button
          disabled={!task.length}
          variant={'outlined'} 
          onClick={handleClick}>
          <AddBoxIcon/>
        </Button>
      </div>
    </div>
  )
}
