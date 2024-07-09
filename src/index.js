import app from './app.js'

const PORT = process.env.PORT || 3000

const message = `Server running on http://localhost:${PORT}`
app.listen(PORT, () => console.log(message))
