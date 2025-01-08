import { useState } from 'react'
import '../components/DetailedView.css'
import DetailedViewCards from './DetailedViewCards';
import LoadingDetailedView from './LoadingDetailedView'

const DetailedView=({results})=>{

    if(results.length){
        return(
            // <!-- Detailed view  -->
                <div className="detailed-view">
                    <div className="nav-day">
                        <p className="Today">Today</p>
                        <p className="tomorrow">Tomorrow</p>
                    </div>
                    <DetailedViewCards results={results}/>
                </div>
            )
        }

    return(
        // Loading Detailed view
            <div className="detailed-view">
                <div className="nav-day">
                    <p className="Today">Today</p>
                    <p className="tomorrow">Tomorrow</p>
                </div>
                {/* Conditional rendering DetailedViewCrads and DetailedViewLoading */}
                <LoadingDetailedView/>
            </div>
    )
}

export default DetailedView;



