import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import './index.css';

export const UpdateTaskForm = ({isDialogOpen, setIsDialogOpen, task}) => {
  const {id, completed} = task;
  const {taskName, setTaskName} = useState('');

  const handleChange = (e) =>{
    setTaskName(e.target.value)
  }

  const handleClick = (e) =>{
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
          onChange={handleChange}
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
