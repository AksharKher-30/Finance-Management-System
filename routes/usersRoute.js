const express = require('express')
const User = require('../models/User')
const router = express.Router()

// Simplified login to always respond with a guest user (no credential validation)
router.post('/login', async function (req, res) {
    try {
        res.send({
            _id: 'guest-user-id',
            name: 'Guest User',
            email: 'guest@example.com'
        })
    } catch (error) {
        res.status(500).json('Error')
    }
})


// Registration disabled in guest mode
router.post('/register', async function (req, res) {
    res.status(403).json('Registration disabled')
})

module.exports = router;