import React, { useEffect } from 'react'
import HealthDashboard from './HealthDashboard';
//import { useAuth0 } from '@auth0/auth0-react'
//import LogoutButton from './LogoutButton'
//import LoginButton from './LoginButton'

function Profile() {
  const user = { nickname: 'user007', email: 'user007@email.gov'}
  //const { user } = useAuth0();
  //const { user, isAuthenticated, isLoading } = useAuth0();
  //console.log('user is: ', user)

/*
  useEffect(() => {
    if (isAuthenticated && user) {
      console.log('Full Auth0 user object:', user)
      //syncUserWithDatabase(user)
    }
  }, [isAuthenticated, user])
  */
  //const syncUserWithDatabase = async (userData) => {
    
    /*
    try {
      const response = await fetch('http://localhost:3000/api/sync-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userData.email,
          auth0_id: userData.sub,
          name: userData.nickname,
          created_at: userData.updated_at || new Date().toISOString()
        })
      })
      const data = await response.json()
      console.log('(Profile.jsx) - user synced: ', data)
    } catch (error) {
      console.error('(Profile.jsx) - error syncing user: ', error)
    }
    
  }
*/

  /*
  if (isLoading) {
    return <div>Loading...</div>; // Display a loading message while fetching user data
  }
  */

  
//  if (!user || !isAuthenticated) {
//    return (
//        <>
//            <div className='p-8'>
//              <div>Please log in to view your profile.</div> {/*Handle the case where the user isn't authenticated*/}
//              <LoginButton />
//            </div>
//        </>
//    )
//  }

  return (
    <>
        <div className='p-8'>
          <div className='text-4xl pb-8'>Hello {user.nickname}</div>
          <div className='text-2xl pb-8'>Email: {user.email}</div>
          <HealthDashboard />
          {/* 
          pseudo code
          connect to the database
          search for the user
          select the subscription information
          display the subscription status
          if subscrption status is free, show the paid option card to buy
          */}
          <div className='flex flex-row gap-4'>
          <div className='container sm shadow-lg bg-slate-300 rounded-md w-96 h-96 p-8'>
            <div className='text-3xl'>SCD Guide - Free</div>
            <div className='text-2xl'>Your 24/7 Companion for:</div>

            <ul className='list-disc list-inside pb-8'>
              <li>3 uses per day</li>
              <li>SCD education and support</li>
              <li>Diet compliance questions</li>
              <li>Recipe inspiration</li>
              <li>Meal modifications</li>
            </ul>
            <button className="cta-button bg-blue-800 shadow-sm hover:shadow-md">Current</button>
            </div>
          
          <div className='container sm shadow-lg bg-slate-300 rounded-md w-96 h-96 p-8'>
            <div className='text-3xl'>SCD Guide - Pro</div>
            <div className='text-2xl'>Your 24/7 Companion for:</div>

            <ul className='list-disc list-inside pb-8'>
              <li>Unlimited use</li>
              <li>SCD education and support</li>
              <li>Diet compliance questions</li>
              <li>Recipe inspiration</li>
              <li>Meal modifications</li>
            </ul>
            <button className="cta-button bg-blue-800 shadow-sm hover:shadow-md">$25 - Buy</button>
            </div>
          </div>
          </div>
          <div className='p-8'>
          {/*<LogoutButton />*/}
          
          </div>
    </>
  )
}

export default Profile;