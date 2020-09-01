import React from 'react';
import './Body.css';
import Header from './Header'
import { useDataLayerValue } from './DataLayer'


function Body({spotify} ) {
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
            
               <img src="https://res.cloudinary.com/brajapp/image/upload/v1596043001/ben-kolde-_zqJaEyo6I4-unsplash_g89ynw.jpg" 
               alt="" />

               <div className="body__textInfo">
               <strong>PLAYLIST</strong>
               <h2>Discover Weekly</h2>
               <p>Description...</p>

               </div>
            </div>
       
        </div>
    )
}

export default Body
