import { useState,useEffect } from "react";
import ReactDOM  from "react-dom";
import styles from '../styles/Model.module.css'


export default function Model({show,onClose,children}) {


    const [isBrowser, setisBrowser] = useState(false);

    useEffect(()=>{

        setisBrowser(true)
    },[])


    const handleClose = (e)=>{
            e.preventDefault();
            onClose();

    }
  
    const modelContent = show ? (

        <div className={styles.overlay}>

            <div className={styles.model} >
                <div className={styles.header}>
                <a href="#" onClick={handleClose}>
                        <button className="btn">close</button>
                </a>

                    
                </div>
                <div className={styles.body}>{children}</div>
           </div>
        </div>

     

    ):null;

    if(isBrowser){

        return ReactDOM.createPortal(
            modelContent,
            document.getElementById('model-root')
        )
    }

    else{

        return null
    }
  }
  