import { useEffect, useState } from "react"
import '../components/SearchView.css'
import SearchViewCard from "./SearchViewCard"

const SearchView=({setResults})=>{

    useEffect(fetchTemp,[])
    const [city,setCity] = useState("delhi")
    const [results_t,setResultsT] = useState()
    const API_KEY='895284fb2d2c50a520ea537456963d9c'

    async function fetchTemp(){
        try{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)

            if(!res.ok){
            throw new Error(`Error : ${res.status} - ${res.statusText}`);
            }
            const data = await res.json()
            try{
                setResultsT(data)
                setResults([data])
            }
            catch{
                console.log("Error occured while setting data.")
            }
        }catch (error){
            console.log(`${city} not found!`)
        }
    }
    
    return(
        //<!-- Search view --> 
        <>
        <div className="search-view">
            <div className="search-bar">
                <input type="text" placeholder="Enter city..."
                value={city} onChange={(e)=> setCity(e.target.value)}
                onKeyDown={(e)=>{
                if(e.key==="Enter") {
                    fetchTemp() 
                }
                }}/>
                
                <svg className="search-icon" viewBox="0 0 24 24" width="24" height="24" onClick={fetchTemp}>
                    <circle cx="11" cy="11" r="8" stroke="rgb(165, 163, 255)" strokeWidth="2" fill="none"/>
                    <line x1="16" y1="16" x2="24" y2="24" stroke="rgb(165, 163, 255)" strokeWidth="2"/>
                </svg>
            </div>

            {/* Search view card */}
            <SearchViewCard results_t={results_t}/>

        </div>
        </>
    )
}

export default SearchView;