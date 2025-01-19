//import chefLogo from '../images/Chef_Claude_Icon.png'
//import { Link } from 'react-router'
//import LoginButton from './LoginButton'
import profileImage from '../images/SCD-Guide-Reid-Kimball-Profile.jpg'

export default function About() {
    return (
        <>
            <main className="p-8">
                <div className="text-6xl leading-normal text-center">About</div>
                <div className="flex gap-8 mb-8">
                    <div className="flex-shrink-1">
                        <img 
                            src={profileImage} 
                            alt="Reid Kimball Profile"
                            className="rounded-3xl max-w-96 object-cover"
                        />
                        <div className='pt-1 text-sm text-slate-600 text-center'>SCD Waffles, recipe by SCD Guide</div>
                    </div>
                    <div className='flex-grow'>
                        <p className='leading-normal'>
                        I'll never forget the date, February 13, 1997. I was diagnosed with Crohn's disease, a debilitating inflammatory bowel disease. It was 8 years
                        later when I started using the Specific Carbohydrate Diet to help me manage my symptoms. Over the years I regained much of my health thanks to the SCD.
                        </p>
                        

                        <p className='leading-normal pt-4'>I'm Reid Kimball, and I developed SCD Guide to help others succeed on the SCD.</p> 

                        <p className='leading-normal pt-4'>Studies report that patients lack the education and guidance needed to have successful outcomes on the SCD.(1)</p>

                        <p className='leading-normal pt-4'>SCD Guide aims to be complimentary to other resources you may use in your SCD journey, such as books, doctors, friends, and family.</p>

                        <p className='leading-normal pt-4'>SCD Guide uses an advanced artificial intelligence to provide you with personalized, contextualized instant information that can help you follow the SCD exactly as it's prescribed in the seminal
                        book, "Breaking the Vicious Cycle" by Elaine Gottschall.</p> 

                        <p className='leading-normal pt-4'>If you have any questions about this web app, reach out to: [INSERT EMAIL]</p>
                    </div>
                

                {/*
                <div className="text-4xl leading-normal pt-8">About the SCD</p>
                <div>The Specific Carbohydrate Diet introduced by Elaine Gottschall has been used by thousands of individuals all over the world to help them
                    manage autoimmune conditions such as Crohn's disease, ulcerative colitis, celiac disease, irritable bowel syndrone, autism spectrum disorders, and 
                    attention deficit hyperactivity disorder.
                </p>

                
                <div className='text-2xl pt-8'>How SCD Helps</p>
                <div>The diet works by:</p>

                <ul className='list-disc list-inside'>
                    <li>Eliminating complex carbohydrates and refined sugars</li>
                    <li>Reducing inflammation in the gut</li>
                    <li>Restoring balance to the gut microbiome</li>
                    <li>Allowing the intestinal tract to heal</li>
                </ul>

                <p className='pt-4'>It's important to note that while many people have found success with SCD, everyone's experience is different. The diet should be undertaken with support from healthcare providers who understand your specific condition.</p>

                <div className='text-2xl pt-8'>Getting Started</p>
                If you're considering SCD for any of these conditions, we recommend:

                <ul className='list-disc list-inside'>
                    <li>Consulting with your healthcare provider</li>
                    <li>Starting slowly with the introduction diet</li>
                    <li>Keeping a detailed food journal</li>
                    <li>Connecting with others who are on the diet</li>
                </ul>
                
                <div className='text-2xl pt-8'>Don't Go Alone!</p>
                <p>The SCD is a challenging regimen and it's important to get as much support as possible to ensure your success.</p>
                */}
                
                </div>
            </main>
        </>
    )
}
