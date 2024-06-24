import { Button, Checkbox, Typography } from '@mui/material';
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { UpdateTaskForm } from '../update-task-form';
import classnames  from 'classnames'
import './index.css';

export const Task = ({task}) => {
  const {id, name, completed} = task;
  const [isComplete, setIsComplete] = useState(completed)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleUpdateTaskCompletion = () =>{
    setIsComplete((prev) => !prev)
  }

  const handleDeleteTask = () => {
    console.log('delete task')
  }

  const handleOpenTask = () => {
    setIsDialogOpen(true)
  }
  console.log('name, name', name)

  return (
    <div className='task'>
      <div className={classnames('flex', {done: isComplete})}>
        <Checkbox checked={isComplete} onChange={handleUpdateTaskCompletion} />
        <Typography variant='h4' >{name}</Typography>
      </div>
      <div className='taskButtons'>
        <Button variant='contained' onClick={handleOpenTask}>
          <EditIcon />
        </Button>
        <Button color='error' variant='contained' onClick={handleDeleteTask}>
          <DeleteIcon />
        </Button>
      </div>
     
      <UpdateTaskForm 
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        task={task}
      />
    </div>
  )
}
