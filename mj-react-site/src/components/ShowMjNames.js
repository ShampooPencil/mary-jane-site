import React from 'react'
//import './src/MjHeader.css';

function ShowMjNames(props){
    return(
        <div>
          
               <h2>Names: {props.name} </h2>
               <h2>Image: {props.img}</h2>

          
        </div>
    )
}
export default ShowMjNames