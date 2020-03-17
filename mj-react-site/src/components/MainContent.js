import React from 'react'
import mjNames from './listOfMjNames.js'
import ShowMjNames from './ShowMjNames'


const newList = mjNames.map(list => <ShowMjNames key={list.id} name={list.tame} img={list.img}/>)

function MainContent(){
    
    return(
        <div>
            <header className="MjHeader">
               <h2> Welcome! MaryJane will show you what you what, and give it to you!</h2>
               <h3>We have the newest weeds out there. Old school smokers can find what ever you want and get. </h3>
               <h3>Browse around when you are ready, its one click away! Have fun!</h3>
            </header>
            <div>
                {newList}
            </div>
        </div>
    )
}
export default MainContent