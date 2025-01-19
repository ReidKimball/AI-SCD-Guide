import { ChefHat } from 'lucide-react';
import { Link } from 'react-router'
//import LoginButton from './LoginButton'
//import LogoutButton from './LogoutButton'
import ProfileButton from './ProfileButton'
//import { useAuth0 } from '@auth0/auth0-react'

export default function Header() {
    //const { user, isAuthenticated, isLoading } = useAuth0();
    const isAuthenticated = true

    return (
        <>
            <header className='flex justify-between items-center px-8 py-2'>
            <Link className='logo_link' to='/'>
                <div className='flex items-center gap-4'>
                    {/*<img src={chefLogo} alt='SCD Guide logo' className='h-12'  />*/}
                    
                        <ChefHat size={48}/>
                        <h1 className='font-bold'>SCD Guide</h1>
                    
                </div>
                </Link>
                <div>
                    {!isAuthenticated ? (
                    <>
                        <LoginButton />
                    </>
                    ) : (
                        <ProfileButton />
                    )}
                </div>
            </header>
        </>
    )
}