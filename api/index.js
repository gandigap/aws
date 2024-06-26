const express = require('express')
const { fetchTasks, createTasks } = require('./task')
const app = express()
const port = 3001

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/task', async (req, res) => {
  try {
    const tasks = await fetchTasks()
    res.send(tasks.item)
  } catch (error) {
    res.status(400).send(`Error fetching tasks: ${error}`)
  }
})

app.post('/task', async (req, res) => {
  try {
    const tasks = req.body;
    const response = await createTasks(task)
    res.send(response)
  } catch (error) {
    res.status(400).send(`Error creating tasks: ${error}`)
  }
})

app.put('/task', (req, res) => {
  res.send('Hello World!')
})

app.delete('/task', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})