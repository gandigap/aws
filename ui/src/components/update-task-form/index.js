import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';
import './index.css';
import { API_URL } from '../../utils';

export const UpdateTaskForm = ({fetchTasks, isDialogOpen, setIsDialogOpen, task}) => {
  const {id, completed} = task;
  const {taskName, setTaskName} = useState('');

  const handleChangeTaskName = async (e) =>{
    
    setTaskName(e.target.value)
  }

  const handleUpdate = async (e) =>{
    try {
      await axios.put(API_URL, {
        id,
         name: taskName,
        completed
      })
      await fetchTasks()
    } catch (error) {
      console.log(`Update ${error}`)
    }
    setTaskName('')
  }

  const handleClick =  async (e) =>{
    await handleUpdate();
    setIsDialogOpen(false)
  }

  return (
    <Dialog open={isDialogOpen}>
      <DialogTitle>Edit task</DialogTitle>
      <div className='dialog'>
        <TextField 
          size='small' 
          label="Task" 
          variant='outlined' 
          onChange={handleChangeTaskName}
        />
        <Button 
          variant='contained'
          onClick={handleClick}>
            <CheckIcon />
        </Button>
      </div>
    </Dialog>
  )
}
