import { Link } from 'react-router'
import Button from '@mui/material/Button'
import { ChefHat, ForkKnife, MessageCircleQuestion, Grid } from 'lucide-react';

//import { useAuth0 } from '@auth0/auth0-react'

export default function Menu_Services() {
    //const { user, isAuthenticated, isLoading } = useAuth0();
    const isAuthenticated = true
    
    return (
        <>
        <section className="gap-2 p-8 flex flex-col flex-wrap content-center md:flex-row md:justify-center">
            {isAuthenticated ? (
                <>
                    <Link to="/recipe_service">
                        <Button variant='contained' startIcon={<ChefHat />} size='large' className="flex-none w-60 cta-button bg-blue-800 shadow-sm hover:shadow-md">Add Ingredients</Button>
                    </Link>
                    <Link to="/meal_service">
                        <Button variant='contained' startIcon={<ForkKnife />} size='large' className="flex-none w-60 cta-button bg-blue-800 shadow-sm hover:shadow-md">Convert Meal</Button>
                    </Link>
                    <Link to="/coach_service">
                        <Button variant='contained' startIcon={<MessageCircleQuestion />} size='large' className="flex-none w-60 cta-button bg-blue-800 shadow-sm hover:shadow-md">Ask Guide</Button>
                    </Link>
                    {/* 
                    <Link to="/ai_services">
                        <Button variant='contained' startIcon={<Grid />} size='large' className="flex-none w-60 cta-button bg-blue-800 shadow-sm hover:shadow-md">All Services</Button>
                    </Link>
                    */}
                </>
            ) : (<div></div>)
        }
        </section>
        </>
    )
}