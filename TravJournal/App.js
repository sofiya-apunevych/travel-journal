import React from "react"
import Head from "./components/Head"
import Card from "./components/Card"

import data from "./data"

export default function App(){
    
    let cardSet = data.map(
        item => {
            return (
                 <Card 
                  key={item.id}  
                  {...item} 
                />
            )}  
        )
    return (
        <>
        <Head/>
        {cardSet}
        </>
    )
}