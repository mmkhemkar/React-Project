import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();

    return(
        <div>
            <h1>Opps !!!</h1>
            <h2>Something Went Wrong !!</h2>
            <h2>{err.status}</h2>
            <h2>{err.data}</h2>
        </div>
    )
}

export default Error;