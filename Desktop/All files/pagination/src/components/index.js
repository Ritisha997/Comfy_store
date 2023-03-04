import React, { useEffect, useState } from 'react'
import DisplayFollowers from './DisplayFollowers';
import paginate from './utils';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useIndex = () => {
    const [followers, setFollowers] = useState([]);
    const [allFollowers, setAllFollowers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  const fetchFollowers = async() =>{
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data)
    setFollowers(paginate(data))
    setAllFollowers(data)
    setIsLoading(false)
  }
console.log(followers)
  useEffect(()=>{
    fetchFollowers();
  },[])

  return {followers, isLoading, allFollowers}
}


