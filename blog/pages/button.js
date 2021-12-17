import Title from '../components/Title'
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter,saveObj} from '../redux/actions/counterActions';
import React, { useState, useEffect } from 'react'

function button(props) {

    console.log("props===>",props)
    const [title, settitle] = useState("");

    const check=()=>{

        props.saveObj({'name':'safdar'})
        settitle("shakeeb")
        
    }

  
    
  return (
    <>
     <Title title="button" />

     <h1>{props.counter}</h1>
     <button onClick={props.incrementCounter}>Increment</button>
    <button onClick={props.decrementCounter}>Decrement</button>
    <button onClick={check}>My Function</button>


    </>
  )
}


const mapStateToProps = state => ({

   
    counter: state.counter.value,
    authObj : state.counter.obj
 
});






  const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
    saveObj :saveObj
};

 




export default connect(mapStateToProps, mapDispatchToProps)(button);
