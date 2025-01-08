import './DetailedViewCards.css'

const DetailedViewCards=({results})=>{

    return(
        <div className="detailed-view-cards">
            
            <div className="card">
                <p className="detail-1">Wind</p>
                <p className="detail-2">{results[0]?.wind?.speed} km/h</p>
                <p className="detail-3">{results[0]?.wind?.deg}</p>
            </div>
            <div className="card">
                <p className="detail-1">Humidity</p>
                <p className="detail-2">{results[0]?.main?.humidity}</p>
            </div>
            <div className="card">
                <p className="detail-1">Real Feel</p>
                <p className="detail-2">{(results[0]?.main?.feels_like-273.15).toFixed(1)}°C</p>
            </div>
            <div className="card">
                <p className="detail-1">Visibility</p>
                <p className="detail-2">{results[0]?.visibility}</p>
            </div>
            <div className="card">
                <p className="detail-1">Pressure</p>
                <p className="detail-2">{results[0]?.main?.pressure} mb</p>
            </div>
            <div className="card">
                <p className="detail-1">Chances of rain</p>
                <p className="detail-2">10%</p>
            </div>
            <div className="card">
                <p className="detail-1">Temp History</p>
                <p className="detail-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(242, 65, 118)" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L6 10H9V16H15V10H18L12 4Z" fill="rgb(242, 65, 118)"/>
                    </svg>
                {(results[0]?.main?.temp_max-273.15).toFixed(1)}°C</p>
                <p className="detail-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(188, 235, 57)" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20L18 14H15V8H9V14H6L12 20Z" fill="rgb(188, 235, 57)"/>
                    </svg>
                {(results[0]?.main?.temp_min-273.15).toFixed(1)}°C</p>
            </div>
            <div className="card">
                <p className="detail-1">Sun</p>
                <p className="detail-2">Rise  {(() => {
                    const date = new Date(results[0]?.sys?.sunrise * 1000);
                    const hours = date.getHours();
                    const minutes = date.getMinutes();
                    // Format the time as HH:MM
                    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
                })()}</p>
                <p className="detail-2">Set  {(() => {
                    const date = new Date(results[0]?.sys?.sunset * 1000);
                    const hours = date.getHours();
                    const minutes = date.getMinutes();
                    // Format the time as HH:MM
                    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
                })()}</p>
            </div>
            <div className="card">
                <p className="detail-1">Moon</p>
                <p className="detail-2">Rise  {(() => {
                    const date = new Date(results[0]?.sys?.sunrise * 1000);
                    const hours = date.getHours();
                    const minutes = date.getMinutes();
                    // Format the time as HH:MM
                    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
                })()}</p>
                <p className="detail-2">Set  {(() => {
                    const date = new Date(results[0]?.sys?.sunset * 1000);
                    const hours = date.getHours();
                    const minutes = date.getMinutes();
                    // Format the time as HH:MM
                    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
                })()}</p>
            </div>
        </div>
    )
}

export default DetailedViewCards;