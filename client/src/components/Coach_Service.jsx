import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Coach_AI from './Coach_AI.jsx'
import { getInfoFromSCDCoach } from '../ai.js'
import { Button } from '@mui/material'
import { MessageCircleQuestion } from 'lucide-react'
import TextField from '@mui/material/TextField';

export default function Coach_Service() {
    // create an empty state array called ingredients and a function addIngredients
    const [coachingText, setCoachingText] = useState("")
    const [formDisabled, setFormDisabled] = useState(false)

    // this is used below to send as a prop to the Meal_AI component, in the Meal_AI.jsx
    const coachingSection = useRef(null) // if using this on a DOM node best practice to set to null
    console.log('the coachingSection ref object is: ', coachingSection)

    useEffect(() => {
        console.log('waiting for coachingText to not be empty')
        if (coachingText !== '' && coachingSection.current !== null) {
            console.log('scroll to coachingSection')
            coachingSection.current.scrollIntoView( { behavior: 'smooth' } )
        }
    }, [coachingText])

    useEffect(() => {
        console.log(`entered useEffect for formDisabled, status is: ${formDisabled}`)
        setFormDisabled(false)
    }, [coachingText])

    useEffect(() => {
        console.log('🟡 formDisabled changed to:', formDisabled)
    }, [formDisabled])

    async function getCoaching(formData) {
        const userQuery = formData.get("userQuery") //Extracts the value of the "userQuery" field from the form data submitted in the `event` object.
        console.log(`(Coach.jsx) - user entered question is: ${userQuery}`)
        const Coaching = await getInfoFromSCDCoach(userQuery) //calls function in ai.js //change variable name to recipeMarkdown and update uses in code
        console.log(`Response back from SCD Coach is: ${Coaching}`)
        setCoachingText(Coaching)
    }

    function disableUserForm(formData) {
        setFormDisabled(true)
        console.log('🔵 2. Set form disabled to true')
        getCoaching(formData)
    }

    function tryQuestion(exampleQuestion) {
        console.log('tryQuestion entered: ', exampleQuestion)
        const formData = new FormData() // creates empty FormData object, same type of object that's created when submitting an HTLM form
        formData.set("userQuery", exampleQuestion) // adds a key-value pair to the FormData object: 1. key is "mealDescript" which matches the forms input field, 2. value is whatever mealType is passed into the tryQuestion function
        disableUserForm(formData)
    }

    return (
        <>
            <main>
                <div className='ai-service-container'>
                    <div className='text-3xl'>Ask SCD Guide Anything</div>
                    <p>Ask SCD Guide any question you have about SCD. How to manage stress, relationships, and make the SCD easier to do are all valid questions. Think of this service as having your own private coach to talk about anything that is challenging in your SCD healing journey.</p>
                    <form action={disableUserForm} className="add-ingredient-form">
                        <fieldset disabled={formDisabled}>
                            <TextField 
                                name="userQuery"
                                className="userInput"                                
                                id="outlined-basic" label="Ask Question" variant="outlined" 
                                placeholder="e.g. Tell me about the Bristol Stool Chart."
                                aria-label="Add question"
                                alt="question text field"
                                disabled={formDisabled}
                            />
                            {/*
                            <input 
                                name="userQuery"
                                placeholder="e.g. why aren't complex carbohydrates allowed on SCD?" 
                                aria-label="Add question" 
                                type="text" className="userInput" 
                                alt="question text field"
                                
                            />
                            */}
                            <Button disabled={formDisabled} type='submit' variant='contained' startIcon={<MessageCircleQuestion />} size='large' >Ask Guide</Button>
                            
                        </fieldset>
                    </form>
                    <div className='text-4xl p-8 bg-blue-200 rounded-md'>
                        <div className='text-4xl'>Try these questions:</div>
                        <div className='gap-8 p-8 flex flex-col flex-wrap content-center md:flex-row md:justify-center'>                            
                            <Button variant='outlined' sx={{lineHeight: 1.2}} startIcon={<MessageCircleQuestion />} className="cta-button bg-blue-800 shadow-sm hover:shadow-md" onClick={() => tryQuestion("Can AI LLMs help me with learning SCD?")}>How can you help me with the SCD?</Button>
                            <Button variant='outlined' sx={{lineHeight: 1.2}} startIcon={<MessageCircleQuestion />} className="cta-button bg-blue-800 shadow-sm hover:shadow-md" onClick={() => tryQuestion("Why aren't complex carbohydrates allowed on SCD?")}>Why aren't complex carbohydrates allowed on SCD?</Button>
                            <Button variant='outlined' sx={{lineHeight: 1.2}} startIcon={<MessageCircleQuestion />} className="cta-button bg-blue-800 shadow-sm hover:shadow-md" onClick={() => tryQuestion("Tell me about the Bristol Stool Chart.")}>Tell me about the Bristol Stool Chart.</Button>
                            <Button variant='outlined' sx={{lineHeight: 1.2}} startIcon={<MessageCircleQuestion />} className="cta-button bg-blue-800 shadow-sm hover:shadow-md" onClick={() => tryQuestion("Is glutamine a helpful supplement if I'm on SCD?")}>Is glutamine a helpful supplement if I'm on SCD?</Button>
                            <Button variant='outlined' sx={{lineHeight: 1.2}} startIcon={<MessageCircleQuestion />} className="cta-button bg-blue-800 shadow-sm hover:shadow-md" onClick={() => tryQuestion("Is there a way to test if my eggs are spoiled?")}>Is there a way to test if my eggs are spoiled?</Button>
                            <Button variant='outlined' sx={{lineHeight: 1.2}} startIcon={<MessageCircleQuestion />} className="cta-button bg-blue-800 shadow-sm hover:shadow-md" onClick={() => tryQuestion("My family doesn't understand I need to eat SCD to stay healthy. What can I do to adhere to SCD?")}>My family doesn't understand I need to eat SCD to stay healthy. What can I do to adhere to SCD?</Button>
                        </div>
                    </div>
                    { coachingText && 
                        <Coach_AI
                            ref={coachingSection}
                            coachingText={coachingText}
                        /> 
                    }
                </div>
            </main>
        </>
    )
}