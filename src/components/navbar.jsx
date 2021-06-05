import React from 'react'
import WeekendIcon from '@material-ui/icons/Weekend';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';

const navbar = () => {
    return (
        <div className="navbar">
            <div className="navleft">
                <div className="links">
                    <a className="logo" href="/home"><WeekendIcon fontSize="small" style={{ top:10 }} /> Couch TV</a>
                    <a className="browse" href="/browse">Browse<ArrowDropDownIcon className="arrowicon" fontSize="small"/></a>
                </div>
            </div>
            <div className="navright">
                <SearchIcon className="icon" />
                <img className="image" src="images/Me.jpg" alt="userimage"></img> 
            </div>
        </div>
    )
}

export default navbar
