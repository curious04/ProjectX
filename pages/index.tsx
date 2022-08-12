import type { NextPage } from 'next'
import axios from 'axios'

const Home: NextPage = ({content}) => {
console.log(content);

  return (
    <h1 className='text-3xl font-bold underline'>
    Hello world!
    </h1>
  )
}

export const getServerSideProps = async () => {
  const {data} = await axios.get(`http://localhost:3000/api/post`);  //NextJS uses filebase routing


  return { 
    props: {
      content: data,   //pass data to the page, photos: data
    }
  }
}
            
export default Home
