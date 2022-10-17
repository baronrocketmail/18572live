import react, {useState} from "react";
import {fetchPropertyInfoObj, fetchUnpaidObjArray} from "./dataFetching.mjs";
import NavLinks from "./NavLinks";

export default function Log(){
    const [unpaidObjArray, setUnpaidObjArray] = useState([])


    react.useEffect(() => {

        fetchUnpaidObjArray().then( unpaidObjArray => {
            var objArray = [];
            objArray.push(...[{name: "<-----", url: "/"}, {name: "", url: "/autopay"}]);
            for(let i = 0; i < unpaidObjArray.length; i++){
                objArray.push(...[{name:"", url:""}])
            }
            objArray.push(...[{name: "...", url:"/"}])
            setUnpaidObjArray(objArray);
            }
        );
        console.log("zz")
        console.log(unpaidObjArray)
    })

    return(
        <div>
            <NavLinks objArry = {unpaidObjArray}/>
        </div>
    )
}