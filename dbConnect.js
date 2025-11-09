const mongoose = require('mongoose')
require('dotenv').config()

// Prefer env var, fall back to local Mongo for development
const MongoDB_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/finance_management'

const connectOptions = { useNewUrlParser: true, useUnifiedTopology: true }
if (process.env.DB_NAME) {
	connectOptions.dbName = process.env.DB_NAME
}

mongoose
	.connect(MongoDB_URI, connectOptions)
	.catch((err) => console.error('Mongo connection error:', err))

const connection = mongoose.connection

connection.on('error', (err) => console.error('Mongo connection error:', err))
connection.on('connected', () => console.log('Mongo DB connection successful!'))

module.exports = connection