import express from "express"
import bodyParser from "body-parser"
import { Pool } from "pg"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
})

app.use(bodyParser.json())

app.get("/todos", async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query("SELECT * FROM todo")
    const todosFromDB = result.rows
    res.json(todosFromDB)
    client.release()
  } catch (error) {
    console.error("Error fetching todos:", error)
    res.status(500).json({ error: "Error fetching todos" })
  }
})

app.post("/todos", async (req, res) => {
  try {
    const { id, title, completed } = req.body
    const currentDate = new Date()
    const updateDate = new Date()
    const client = await pool.connect()
    const query =
      "INSERT INTO todo (id, title, completed, created_at, update_date) VALUES ($1, $2, $3, $4, $5)"
    await client.query(query, [id, title, completed, currentDate, updateDate])
    res.sendStatus(200)
    client.release()
  } catch (error) {
    console.error("Error adding todo:", error)
    res.status(500).json({ error: "Error adding todo" })
  }
})

app.put("/todos/:id/check", async (req, res) => {
  try {
    const id = req.params.id
    const client = await pool.connect()
    const query = "UPDATE todo SET completed = NOT completed WHERE id = $1"
    await client.query(query, [id])
    res.sendStatus(200)
    client.release()
  } catch (error) {
    console.error("Error checking todo:", error)
    res.status(500).json({ error: "Error checking todo" })
  }
})

app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id
    const client = await pool.connect()
    const query = "DELETE FROM todo WHERE id = $1"
    await client.query(query, [id])
    res.sendStatus(200)
    client.release()
  } catch (error) {
    console.error("Error deleting todo:", error)
    res.status(500).json({ error: "Error deleting todo" })
  }
})

// Diğer CRUD işlemleri için gerekli endpoint'leri ekleyebilirsiniz

app.listen(3000, () => {
  console.log("Server started on port 3000")
})
