import { Link } from 'react-router'
import Coach_Service from './Coach_Service'
import Meal_Service from './Meal_Service'
import Recipe_Service from './Recipe_Service'

export default function AI_Services() {
    const isAuthenticated = true

    return (
        <>
            <main>
                <div className='gap-8 p-8 flex flex-col flex-wrap content-center md:flex-row md:justify-center'>
                    <div className='max-w-lg'><Recipe_Service /></div>
                    <div className='max-w-lg'><Meal_Service /></div>
                    <div className='max-w-lg'><Coach_Service /></div>
                </div>
            </main>
        </>
    )
}