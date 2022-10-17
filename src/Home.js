import {fetchPropertyInfoObj, fetchUnpaidObjArray} from "./dataFetching.mjs";
import NavLinks from "./NavLinks";
import react, {useState} from "react";


export default function Home(){
    const [unpaidObjArray, setUnpaidObjArray] = useState([])

    react.useEffect(() => {
        fetchUnpaidObjArray().then( unpaidObjArray => {
            fetchPropertyInfoObj(). then( propertyInfoObj=> {
                var objArray = [];
                objArray.push(...[{name: propertyInfoObj.name, url: "/"}, {name: "autopay", url: "/autopay"}]);
                objArray.push(...unpaidObjArray)
                objArray.push(...[{name: "...", url:"/log"}])
                setUnpaidObjArray(objArray);
            })
            }
        );
    }, [])


    return(
        <div>
        <NavLinks objArry = {unpaidObjArray}/>
        </div>
    )
}

