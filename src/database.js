const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: 'variables.env'})

mongoose.set('useUnifiedTopology', true)
mongoose.set('useFindAndModify', false)
mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true
})

module.exports = mongoose