import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AddTaskForm } from './components/add-task-form';
import { Task } from './components/task';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const task = {
  id:'1',
  name: 'do dishes',
  completed:'false'
}

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AddTaskForm />
      <Task task={task}/>
    </ThemeProvider>
  );
}