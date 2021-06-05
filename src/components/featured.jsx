// import { colors } from '@material-ui/core'
import React from 'react'
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const featured = () => {
    return (
        <div className="container">
            <div className="left">
                <img src="images/poster.jpg" alt="poster"></img>
            </div>
            <div className="right">
                <h4>NEW SEASON</h4>
                <h2>True Detective</h2>
                <div className="feature-details">
                    <p>Season 1</p>
                    <p>Drama, Action&Adventure</p>
                    <p style={{color:"yellow"}}>81% match</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="buttons">
                    <button className="bright-button">Watch</button>
                    <button className="dark-button">Add to my list</button>
                </div>
                <div className="preview">
                    <img src="images/image 1.png" alt="preview1" ></img>
                    <img src="images/image 3.jpg" alt="preview2"></img>
                    <img src="images/image 2.jpg" alt="preview3"></img>
                </div>
            </div>
            
        </div>
    )
}

export default featured
