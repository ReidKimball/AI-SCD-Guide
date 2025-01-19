import { API_BASE_URL } from './env-config.js'

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        console.log('(ai.js) - trying to connect to /api/recipe...')
        const response = await fetch(`${API_BASE_URL}/api/recipe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ingredients: ingredientsString })
        })
        const data = await response.json()
        console.log(`(ai.js) - data received from anthropic: ${data}`)
        return data.recipe
        
    } catch (err) {
        console.error(err.message)
    }
}

export async function getMealFromSCDChef(mealDescription) {
    //const mealString = userMeal.join(", ")
    try {
        console.log('(ai.js) - trying to connect to /api/meal-convert...')
        console.log(`(ai.js) - userMealDescription passed in from Meal.jsx is: ${mealDescription}`)
        /* 
        fetch() function takes in two arguments, the URL where we are sending a request to the server,
        and second argument is an options object (how we are sending the request)
        after the comma, we are sending the options object containing the method, headers, and body data
        we send to the server.
        */
        const response = await fetch(`${API_BASE_URL}/api/meal-convert`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ meal: mealDescription }) 
            /* 
                The above wraps the user's text in a neat package to send to the server.js
                Starting text: "chicken soup"
                JavaScript object: { mealDescription: "chicken soup" }
                After JSON.stringify: '{"mealDescription":"chicken soup"}'
            */
        })
        const data = await response.json()
        console.log(`(ai.js) - meal data received from SCD Chef: `, data.meal)
        return data.meal
        
    } catch (err) {
        console.error(err.message)
    }
}


export async function getInfoFromSCDCoach(query) {
    try {
        console.log('(ai.js) - trying to connect to /api/coaching...')
        console.log(`(ai.js) - userQuery passed in from Coach.jsx is: ${query}`)
        /* 
        fetch() function takes in two arguments, the URL where we are sending a request to the server,
        and second argument is an options object (how we are sending the request)
        after the comma, we are sending the options object containing the method, headers, and body data
        we send to the server.
        */
        const response = await fetch(`${API_BASE_URL}/api/coaching`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: query }) 
            /* 
                The above wraps the user's text in a neat package to send to the server.js
                Starting text: "chicken soup"
                JavaScript object: { mealDescription: "chicken soup" }
                After JSON.stringify: '{"mealDescription":"chicken soup"}'
            */
        })
        const data = await response.json()
        console.log(`(ai.js) - coaching info received from Coach: `, data.coachResponse)
        return data.coachResponse
        
    } catch (err) {
        console.error(err.message)
    }
}