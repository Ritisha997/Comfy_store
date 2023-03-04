import logo from './logo.svg';
import './App.css';
import Index, { useIndex } from './components';

import { useCallback, useEffect, useState } from 'react';


function App() {
  const {followers, isLoading, allFollowers} = useIndex();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

 
  useEffect(()=>{
    if(isLoading) return
    setData(followers[page])
  },[isLoading, page])

  useEffect(() =>{
    if(isLoading) return
    setData1(allFollowers) 
  },[])
console.log(followers[0])
  const handle = (index) =>{
    setPage(index)
  }

  const nextPage = () =>{
    setPage((oldIndex) =>{
      let index = oldIndex + 1
      if(index > data.length - 1){
        index = 0
      }
      return index
    })
  }

  const prevPage = () =>{
    setPage((oldIndex) =>{
      let index = oldIndex - 1
      if(index < 0){
        index = data.length - 1
      }
      return index
    })
  }
  
 
  return (
    <>
    <div>
    <h1>{isLoading? 'loading..' : 'Pagination'}</h1>
   <div className='followers'>
   {data.map(item =>{
    return <article className='card'>
    <img className='follower-img' src={item.avatar_url} alt={item.login} />
    <h4>${item.login}</h4>
    <a href={item.html_url} className='btn'>
      view profile
    </a>
  </article>
   })}
   </div>
    {followers.map((item, index) =>{
        return <button key={index} onClick={() =>handle(index)}>
          {index + 1}
        </button>
    })}
    <button onClick={prevPage}>next</button>
    <button onClick={nextPage}>prev</button>
   </div>
    </>
  );
}

export default App;
