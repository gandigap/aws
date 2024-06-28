import { Button, Checkbox, Typography } from '@mui/material';
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { UpdateTaskForm } from '../update-task-form';
import classnames  from 'classnames'
import axios from 'axios';
import './index.css';
import { API_URL } from '../../utils';

export const Task = ({task, fetchTasks}) => {
  const {id, name, completed} = task;
  const [isComplete, setIsComplete] = useState(completed)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleUpdateTaskCompletion = async () =>{
    try {
      await axios.put(API_URL, {
        id, name, completed: !isComplete
      })

      setIsComplete((prev) => !prev)
    } catch (error) {
      console.log(`Update ${error}`)
    }
    
  }

  const handleDeleteTask = async () => {
    try {
      await axios.delete(`${API_URL}/${task.id}`);

      fetchTasks();
    } catch (error) {
      console.log(`Delete ${error}`);
    }
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
        fetchTasks={fetchTasks}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        task={task}
      />
    </div>
  )
}
