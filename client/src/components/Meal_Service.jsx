import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Meal_AI from './Meal_AI.jsx'
import { getMealFromSCDChef } from '../ai.js'
import { Button } from '@mui/material'
import { ForkKnife } from 'lucide-react'
import TextField from '@mui/material/TextField';

export default function Meal_Service() {
    // create an empty state array called ingredients and a function addIngredients
    const [mealText, setMealText] = useState("")
    const [formDisabled, setFormDisabled] = useState(false)
    console.log(`on Meal_Service component load formDisabled is set to: ${formDisabled}`)

    // this is used below to send as a prop to the Meal_AI component, in the Meal_AI.jsx
    const mealSection = useRef(null) // if using this on a DOM node best practice to set to null
    console.log('the mealSection ref object is: ', mealSection)

    useEffect(() => {
        console.log(`entered useEffect for mealText scrollIntoView, status is: ${mealText}`)
        if (mealText !== '' && mealSection.current !== null) {
            console.log('scroll to mealSection')
            mealSection.current.scrollIntoView( { behavior: 'smooth' } )
        } else {
            console.log(`mealText is: ${mealText} and mealSection.current is: ${mealSection.current}`)
        }
    }, [mealText])

    useEffect(() => {
        console.log(`entered useEffect for formDisabled, status is: ${formDisabled}`)
        setFormDisabled(false)
    }, [mealText])

    useEffect(() => {
        console.log('🟡 formDisabled changed to:', formDisabled)
    }, [formDisabled])
    

    async function getSCDMeal(formData) {
        const userMealDescription = formData.get("mealDescription") //Extracts the value of the "mealDescription" field from the form data submitted in the `event` object.
        console.log('🔵 1. Got user description:', userMealDescription)

        if (userMealDescription !== '') {
            //console.log(`(Meal.jsx) - user meal entered: `, formData.get("mealDescription"))
            
            console.log('userMealDescription is: ', userMealDescription)        
        
            //console.log(`(Meal_Service.jsx - inside async function getSCDMeal) - formDisabled is ${formDisabled}`)
            //setFormDisabled(!formDisabled)
            //console.log(`(Meal_Service.jsx - inside async function getSCDMeal) - after setFormDisabled formDisabled is ${formDisabled}`)

            console.log(`(Meal.jsx) - user entered meal description is: ${userMealDescription}`)
            console.log('🔵 3. About to call AI...')
            const SCDMeal = await getMealFromSCDChef(userMealDescription) //change variable name to recipeMarkdown and update uses in code
            console.log(`SCD meal back from SCD Coach is: ${SCDMeal}`)
            setMealText(SCDMeal)
        } else {
            console.log(`ERROR: user did not enter text into input box`)
        }        
    }
     
    function toggleForm() {
        setFormDisabled(!formDisabled)
    }
    
    function disableUserForm(formData) {
        setFormDisabled(true)
        console.log('🔵 2. Set form disabled to true')
        getSCDMeal(formData)
    }

    function tryQuestion(mealType) {
        console.log('tryQuestion entered: ', mealType)
        const formData = new FormData() // creates empty FormData object, same type of object that's created when submitting an HTLM form
        formData.set("mealDescription", mealType) // adds a key-value pair to the FormData object: 1. key is "mealDescript" which matches the forms input field, 2. value is whatever mealType is passed into the tryQuestion function
        disableUserForm(formData)
    }

    return (
        <>
            <main>
                <div className='ai-service-container'>
                <div className='text-3xl'>Adapt a Regular Meal to SCD</div>
                <p>Do you miss a favorite meal that is not allowed on SCD? Enter the meal name or a brief description below and SCD Coach will adapt it to the SCD!</p>
                    <form action={disableUserForm} className="add-ingredient-form">
                        <fieldset disabled={formDisabled}>
                            <TextField 
                                name="mealDescription"
                                className="userInput"                                
                                id="outlined-basic" label="Add Meal" variant="outlined" 
                                placeholder="e.g. breakfast burrito with eggs and cheese"
                                aria-label="Add meal description"
                                alt="meal description text field"
                                disabled={formDisabled}
                            />
                            {/*
                            <input 
                                name="mealDescription"
                                placeholder="e.g. breakfast burrito with eggs and cheese" 
                                aria-label="Add meal description" 
                                type="text" className="userInput" 
                                alt="meal description text field"
                                                                
                            />
                            */}
                            <Button disabled={formDisabled} type='submit' variant='contained' startIcon={<ForkKnife />} size='large'>Convert Meal</Button>
                            
                        </fieldset>
                    </form>
                    <div className='text-4xl p-8 bg-blue-200 rounded-md'>
                        <div className='text-4xl'>Try these meals:</div>
                        <div className='gap-8 p-8 flex flex-col flex-wrap content-center md:flex-row md:justify-center'>                            
                            <Button variant='outlined' startIcon={<ForkKnife />} className="cta-button bg-blue-800 shadow-sm hover:shadow-md" onClick={() => tryQuestion("waffles")}>Waffles</Button>
                            <Button variant='outlined' startIcon={<ForkKnife />} className="cta-button bg-blue-800 shadow-sm hover:shadow-md" onClick={() => tryQuestion("pizza")}>Pizza</Button>
                            <Button variant='outlined' startIcon={<ForkKnife />} sx={{lineHeight: 1.2}} className="cta-button bg-blue-800 shadow-sm hover:shadow-md" onClick={() => tryQuestion("breakfast burrito with eggs and cheese")}>Breakfast Burrito with Eggs and Cheese</Button>
                        </div>
                    </div>
                    {/* <button onClick={toggleForm}>Toggle Form</button> */}

                    { mealText && 
                        <Meal_AI 
                            ref={mealSection} // a prop defined as ref locally and sent to Meal_AI
                            mealText={mealText}
                        /> 
                    }
                </div>
            </main>
        </>
    )
}