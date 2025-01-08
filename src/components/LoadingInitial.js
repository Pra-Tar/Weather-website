const LoadingInitial = ()=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
        <circle cx="25" cy="25" r="20" stroke="lightgray" stroke-width="5" fill="none" />
        <circle cx="25" cy="25" r="20" stroke="orange" stroke-width="5" fill="none" stroke-dasharray="126.92" stroke-dashoffset="0">
            <animate
                attributeName="stroke-dashoffset"
                values="0; 126.92"
                dur="1.5s"
                keyTimes="0;1"
                repeatCount="indefinite"
            />
        </circle>
        </svg>

    );
}

export default LoadingInitial;