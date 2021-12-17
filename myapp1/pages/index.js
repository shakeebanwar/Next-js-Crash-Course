
export default function Home({data}) {

  console.log("data",data)
  return (
    <div >
      <h1>Home Page</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
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



export async function getServerSideProps(){

  //Data Fetching
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/9")
  const data = await res.json()
  return{

    props:{
      data
    }
  }
}

