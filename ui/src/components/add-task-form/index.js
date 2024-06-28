import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import './index.css';
import { API_URL } from '../../utils';

export const AddTaskForm = ({fetchTasks}) => {
  const [newTask, setNewTask] = useState('')

  const handleChange = (e)=>{
    setNewTask(e.target.value)
  }

  const handleClick = async ()=>{
    try {
      await axios.post(API_URL, {
        name: newTask,
        completed: false
      })

      await fetchTasks();
      setNewTask('')
    } catch (error) {
      console.log(`Add ${error}`)
    }
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
          value={newTask} 
          onChange={handleChange} />
        <Button
          disabled={!newTask.length}
          variant={'outlined'} 
          onClick={handleClick}>
          <AddBoxIcon/>
        </Button>
      </div>
    </div>
  )
}
