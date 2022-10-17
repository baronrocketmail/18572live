import {fetchUnpaidObjArraySpecific} from "./dataFetching.mjs";
import react, {useState} from "react";

export default function Specific(){

    const [specific, setSpecific ] = useState()

    react.useEffect(()=>{
        fetchUnpaidObjArraySpecific().then(x=> {
            setSpecific(...x);
        })
    })

    return(
        <div>

            <h1>{specific.name}</h1>
        </div>
    )
}