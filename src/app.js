import React from 'react'
import Navbar from './components/navbar'
import Featured from './components/featured'
import NewReleases from './components/new-releases'



const app = () => {
    return(
        <div>
        <Navbar /> 
        <Featured />
        <NewReleases />
        </div>
    )
}

export default app
