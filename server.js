const express = require('express')
require('dotenv').config()
const db = require('./dbConnect')

const app = express()
app.use(express.json())

const userRoute = require('./routes/usersRoute')
const transactionsRoute = require('./routes/transactionsRoute')

app.get('/', (req, res) => {
	res.send('API is running')
})

app.get('/health/db', (req, res) => {
	const states = ['disconnected', 'connected', 'connecting', 'disconnecting']
	const state = states[db.readyState] || String(db.readyState)
	res.json({ db: state })
})

app.use('/api/users/', userRoute)
app.use('/api/transactions/', transactionsRoute)

const port = process.env.PORT || 5000
app.listen(port, () => console.log('Node JS server started at port: ' + port))