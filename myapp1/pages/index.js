import { useState } from "react"
import Model from "../components/Model";
export default function Home() {


  const [showModel, setshowModel] = useState(false);

  return (
    <div>

   

      <h1>Next js model</h1>
      <button onClick={()=>setshowModel(true)}>Open model</button>
      <Model show={showModel} onClose={()=>setshowModel(false)}>

      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos odit facilis omnis voluptatibus ea veritatis nobis a aliquam eveniet, sunt praesentium similique unde delectus at pariatur sed! Iste illo saepe nihil suscipit? Culpa reprehenderit harum aliquam dignissimos, accusantium blanditiis enim alias unde perferendis nostrum totam eos possimus magni, quas aut distinctio a excepturi pariatur in ab, beatae maiores. Commodi beatae maxime atque placeat aliquid ad, libero impedit. Quod, illo.
      </Model>
    
    </div>
  )
}


// export async function getStaticProps(){

//   //Data Fetching
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/6")
//   const data = await res.json()
//   return{

//     props:{
//       data
//     }
//   }
// }



// export async function getServerSideProps(){

//   //Data Fetching
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/9")
//   const data = await res.json()
//   return{

//     props:{
//       data
//     }
//   }
// }

