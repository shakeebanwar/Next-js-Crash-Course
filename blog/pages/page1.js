import Title from '../components/Title'
import React, { useState, useEffect } from 'react'
import Router from 'next/router'





export default function page1() {

    const [title, settitle] = useState("");
    console.log("email state",title)

  

    const check=()=>{
        console.log("checking function is call")
     
        Router.push({
            pathname: '/page2',
            query: { name: "shakeeb" },
       

        })
    }

  
    
  return (
    <>
     <Title title="page1" />
    <h1>{title}</h1>
    <input type="text" placeholder='Email' onChange={(e)=>settitle(e.target.value)}/>
    <br/><br/>
    <button onClick={check}>Submit</button>

    </>
  )
}
