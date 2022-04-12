import Title from '../components/Title'
import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import {connect} from 'react-redux';





function page1(props) {


  console.log("props",props)

    const [title, settitle] = useState(props.authObj.title);


  

    const check=()=>{
        console.log("props",props)
     
       
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

const mapStateToProps = state => ({

   
  counter: state.counter.value,
  authObj : state.counter.obj

});




export default connect(mapStateToProps, null)(page1);
