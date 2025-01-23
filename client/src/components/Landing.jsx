import { Link } from 'react-router'
//import LoginButton from './LoginButton'
import Button from '@mui/material/Button';


export default function Landing() {
    return (
        <>
            <main className="p-8">
                <h1>SCD Guide | AI-Powered Specific Carbohydrate Diet Assistant</h1>
                <div className="text-4xl leading-normal">Have Questions about the SCD?</div>
                <div className="text-2xl leading-normal">Your AI SCD Guide has the answers.</div>
                <div>If you are new to the Specific Carbohydrate Diet, you may have questions. 
                    With SCD Guide, you can get your questions answered
                    at any time you need, 24/7, 365 days a year with empathy, and endless patience.
                </div>
                {/*
                <div className="text-4xl leading-normal pt-8">About the SCD</div>
                <div>The Specific Carbohydrate Diet introduced by Elaine Gottschall has been used by thousands of individuals all over the world to help them
                    manage autoimmune conditions such as Crohn's disease, ulcerative colitis, celiac disease, irritable bowel syndrone, autism spectrum disorders, and 
                    attention deficit hyperactivity disorder.
                </div>

                
                <div className='text-2xl pt-8'>How SCD Helps</div>
                <div>The diet works by:</div>

                <ul className='list-disc list-inside'>
                    <li>Eliminating complex carbohydrates and refined sugars</li>
                    <li>Reducing inflammation in the gut</li>
                    <li>Restoring balance to the gut microbiome</li>
                    <li>Allowing the intestinal tract to heal</li>
                </ul>

                <p className='pt-4'>It's important to note that while many people have found success with SCD, everyone's experience is different. The diet should be undertaken with support from healthcare providers who understand your specific condition.</p>

                <div className='text-2xl pt-8'>Getting Started</div>
                If you're considering SCD for any of these conditions, we recommend:

                <ul className='list-disc list-inside'>
                    <li>Consulting with your healthcare provider</li>
                    <li>Starting slowly with the introduction diet</li>
                    <li>Keeping a detailed food journal</li>
                    <li>Connecting with others who are on the diet</li>
                </ul>
                
                <div className='text-2xl pt-8'>Don't Go Alone!</div>
                <p>The SCD is a challenging regimen and it's important to get as much support as possible to ensure your success.</p>
                */}
                <div className="text-2xl leading-normal pt-8">Transform Your SCD Journey with Personalized AI Support</div>

                <p className='leading-normal'>Get instant, reliable guidance for the Specific Carbohydrate Diet from our specialized AI guide that helps you:</p>

                <ul className="list-disc list-inside">
                    <li><strong>Create SCD-Legal Recipes</strong> from ingredients you have on hand</li>
                    <li><strong>Convert Regular Meals</strong> into delicious SCD-compliant versions</li>
                    <li><strong>Get Expert Answers</strong> about SCD principles and guidelines</li>
                    <li><strong>Stay Confident</strong> with meal planning and food choices</li>
                </ul>

                <p className="text-2xl leading-normal pt-8">Your 24/7 Companion for:</p>
                <ul className="list-disc list-inside">
                    <li>SCD education and support</li>
                    <li>Diet compliance questions</li>
                    <li>Recipe inspiration</li>
                    <li>Meal modifications</li>
                </ul>

                <p className='pt-8'>
                    Start your supported SCD journey today with an AI guide that understands your dietary needs and helps you succeed one meal at a time.
                </p>

                {/*<LoginButton />*/}

                <p className='pb-12'><em>Powered by advanced AI to provide accurate, SCD-compliant guidance whenever you need it.</em></p>
            </main>
        </>
    )
}
