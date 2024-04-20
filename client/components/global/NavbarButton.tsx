'use client'

import React from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'


const NavbarButton = () => {
    const { isLoaded, isSignedIn } =  useUser()
    if(!isLoaded) return <p>Please Wait...</p>
    
    return isSignedIn ? (
        <div className='flex items-center gap-4'>

            <Link href={'/dashboard'}>Create Diary</Link>
            <Link href={'/dashboard/my-diary'}>My Diary</Link>
            <UserButton afterSignOutUrl='/'/>  
        </div> 

    ): 
    (<Link href={'/sign-in'}>Sign In</Link>)
}

export default NavbarButton