import express from 'express'
import morgan from 'morgan'// ?
import cors from 'cors'
import * as dotenv from 'dotenv' // load .env variables
import Anthropic from '@anthropic-ai/sdk' 
import bodyParser from "body-parser"; // to retrieve form data such as username and password

const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000

// Middleware
// uncomment below when moving to production build
app.use(express.static('client/dist')) //this shows the React web app built to the dist folder to the users browser

app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(cors({
    // origin: needs to be on host 8080 when this server uses the local /dist folder to serve the static content
    //origin: 'http://localhost:8080', // was :5173 for React when developing locally
    origin: ['http://localhost:8080', 'https://scd-guide-404532287411.us-central1.run.app'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))


const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
})


const RECIPE_SYSTEM_PROMPT = process.env.AI_INGREDIENTS

const MEAL_CONVERT_SYSTEM_PROMPT = process.env.AI_MEAL_CONVERTER

const SCD_COACH_SYSTEM_PROMPT = process.env.AI_GUIDE

app.get('/', (req, res) => {
    console.log(`(index.js) - GET status`)
})

// this is required bc Auth0 authentication flow uses an 'onRedirectCallback' in main.jsx which redirect users to /profile after successful login
app.get('/profile', (req, res) => {
    console.log(`(index.js) - GET status`)
    //const authCode = req.query.code
    //const authState = req.query.state
    //console.log('Auth Code:', authCode)
    //console.log('Auth State:', authState)
    // Handle the auth parameters here
})


/* AI ENDPOINTS */

app.post('/api/recipe', async (req, res) => {
    const { ingredients } = req.body
    console.log(`(index.js) - Received ingredients from ai.js: ${ingredients}`)
    console.log('(index.js) - Sending ingredients request to Claude API...')
    
    // Anthropic API call logic here
    try {
        const msg = await anthropic.messages.create({
            model: process.env.SONNET_MODEL,
            max_tokens:1024,
            system: RECIPE_SYSTEM_PROMPT,
            messages: [
                {role: "user", content: `I have ${ingredients}. Please give me a recipe you'd recommend I make!`},
            ],
        })
        res.json({ recipe: msg.content[0].text })
        // After successful response:
        console.log('Recipe successfully generated from Claude')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


app.post('/api/meal-convert', async (req, res) => {
    const { meal } = req.body //needs to match what I'm sending from ai.js
    console.log(`(index.js) - Received meal from ai.js: ${meal}`)
    console.log('(index.js) - Sending meal request to AI API...')
    
    try {
        const msg = await anthropic.messages.create({
            model: process.env.SONNET_MODEL,
            max_tokens:1024,
            system: MEAL_CONVERT_SYSTEM_PROMPT,
            messages: [
                {role: "user", content: `I would love to eat ${meal}. If this email is illegal, convert it to one that is SCD legal.`},
            ],
        })
        res.json({ meal: msg.content[0].text })
        // After successful response:
        console.log('Meal successfully generated from AI')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


app.post('/api/coaching', async (req, res) => {
    const { question } = req.body //needs to match what I'm sending from ai.js
    console.log(`(index.js) - Received question from ai.js: ${question}`)
    console.log('(index.js) - Sending question request to AI API...')
    
    try {
        const msg = await anthropic.messages.create({
            model: process.env.SONNET_MODEL,
            max_tokens:1024,
            system: SCD_COACH_SYSTEM_PROMPT,
            messages: [
                {role: "user", content: question},
            ],
        })
        res.json({ coachResponse: msg.content[0].text })
        // After successful response:
        console.log('coaching response successfully generated from AI')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


// Add a catch-all route at the end of all your API routes
app.get('*', (req, res) => {
    res.sendFile('client/dist/index.html', { root: '.' })
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})