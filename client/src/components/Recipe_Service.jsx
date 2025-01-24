import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import IngredientsList from './IngredientsList.jsx'
import Recipe_AI from './Recipe_AI.jsx'
import { getRecipeFromChefClaude } from '../ai.js'
import { Button } from '@mui/material'
import { CirclePlus } from 'lucide-react'
import TextField from '@mui/material/TextField';
import { LoadingSpinner } from './LoadingSpinner.jsx'

export default function Recipe_Service() {
    // create an empty state array called ingredients and a function addIngredients
    const [ingredients, setIngredients] = useState([])
    const [recipeText, setRecipeText] = useState('')
    const [formDisabled, setFormDisabled] = useState(false)
    const [isAILoading, setIsAILoading] = useState(false)

    // this is used below to send as a prop to the IngredientsList component, and in the IngredientsList.jsx
    const recipeSection = useRef(null) // if using this on a DOM node best practice to set to null
    console.log('the recipeSection ref object is: ', recipeSection)

    useEffect(() => {
        console.log('waiting for recipeText to not be empty')
        if (recipeText !== '' && recipeSection.current !== null) {
            console.log('scroll to recipeSection')
            recipeSection.current.scrollIntoView( { behavior: 'smooth' } )
        }
    }, [recipeText])


    useEffect(() => {
        console.log(`entered useEffect for formDisabled, status is: ${formDisabled}`)
        setFormDisabled(false)
        setIsAILoading(false)
    }, [recipeText])

    useEffect(() => {
        console.log('🟡 formDisabled changed to:', formDisabled)
    }, [formDisabled])

    async function getRecipe() {
        console.log(`ingredients array size is: ${ingredients.length}`)
        const recipe = await getRecipeFromChefClaude(ingredients) //change variable name to recipeMarkdown and update uses in code
        console.log(`recipe back from Claude is: ${recipe}`)
        setRecipeText(recipe)
    }

    function addIngredients(formData) {
        const newIngredient = formData.get("ingredient") //Extracts the value of the "ingredient" field from the form data submitted in the `event` object.
                
        // addIngredients is the state function inside Recipe function above
        // take the previous state of the ingredients array, add the new ingredient from the user submitted form
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])       
    }

    function disableUserForm(formData) {
        setFormDisabled(true)
        setIsAILoading(true)
        console.log('🔵 2. Set form disabled to true')
        getRecipe()
    }

    return (
        <>
            <main>
                {isAILoading && <div className='loading-spinner'><LoadingSpinner /></div>}

                <div className='ai-service-container'>
                    <div className='text-3xl'>Create a Meal from Ingredients</div>
                    <p>Have a list of ingredients but don't know what SCD meals to make? Enter your ingredients one at a time to get a recipe suggestion. You need at least 4 to ask SCD Coach for recommendations.</p>
                    <form action={addIngredients} className="add-ingredient-form">
                        <fieldset disabled={formDisabled}>
                            <TextField 
                                name="ingredient"
                                className="userInput"                                
                                id="outlined-basic" label="Add Ingredient" variant="outlined" 
                                placeholder="e.g. chicken"
                                aria-label="Add ingredient"
                                alt="ingredients text field"
                                disabled={formDisabled}
                            />

                            {/* 
                            <input 
                                placeholder="e.g. salt, onion" 
                                aria-label="Add ingredient" 
                                type="text" className="userInput" 
                                alt="ingredients text field"
                                name="ingredient"
                            />
                            */}
                            <Button disabled={formDisabled} type='submit' variant='contained' startIcon={<CirclePlus />} size='large'>Add ingredient</Button>
                        </fieldset>
                    </form>
                    
                    {ingredients.length > 0 &&
                        <IngredientsList
                            ref={recipeSection} // a prop defined as ref locally and sent to IngredientsList
                            getClaudeRecipe={disableUserForm}
                            ingredients={ingredients}
                            formDisabled={formDisabled}
                        />
                    }

                    { recipeText && 
                        <Recipe_AI
                            ingredients={ingredients}
                            recipeText={recipeText}
                        /> 
                    }
                </div>
            </main>
        </>
    )
}