import { useEffect, useState } from 'react'
import './App.css'
import SearchView from './components/SearchView';
import DetailedView from './components/DetailedView';
import LoadingInitial from './components/LoadingInitial';

const App=()=>{
  const [results, setResults]= useState([])
  const [isLoading, setIsLoading]= useState(true)

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setIsLoading(false)
    },2000)

    return ()=>clearTimeout(timer)
  },[])

  if(isLoading)
    return(
      <LoadingInitial/>
    )

  else{
  return(
    <div className='body'>
      
        <SearchView setResults={setResults}/>
        <DetailedView results={results}/> 
      
    </div>
  )
}
}

export default App;