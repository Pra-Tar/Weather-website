import './SearchViewCard.css'

const SearchViewCard=({results_t})=>{
    return(
    <div className='search-view-card'>
            <img src="logo2.png" alt=""/>
            <p className="temp">{(results_t?.main?.temp-273.15).toFixed(1)}°C</p>
            <p className="desc">{results_t?.weather[0]?.description}</p>

            <div className="hor-line"></div>

            <p className="date">{(()=>{
                const date_full = new Date(results_t?.dt*1000)
                const date=date_full.getDate()
                const month=date_full.getMonth()
                const year=date_full.getFullYear()
                return `${date}-${month}-${year}`
            })()}</p>
            <p className="time">{(()=>{
                const date_full = new Date(results_t?.dt*1000)
                const day_list={
                    '0':'Sunday',
                    '1':'Monday',
                    '2':'Tuesday',
                    '3':'Wednesday',
                    '4':'Thursday',
                    '5':'Friday',
                    '6':'Saturday'
                } 

                const day=date_full.getDay()
                const hours=date_full.getHours()
                const minutes=date_full.getMinutes()
                return `${day_list[day]}, ${hours}:${minutes < 10 ? '0' + minutes : minutes}`
            })()}
            </p>
            <p className="day-type">{(()=>{
                const date_full = new Date(results_t?.dt*1000)
                const hours=date_full.getHours()
                const day_type=(6<hours<18)?'Day':'Night'
                return `${day_type}`
            })()}</p>
            <p className="city">{results_t?.name}</p> 
    </div>
)}

export default SearchViewCard;