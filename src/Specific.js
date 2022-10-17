import {fetchPropertyInfoObj, fetchUnpaidObjArray, fetchUnpaidObjArraySpecific} from "./dataFetching.mjs";
import react, {useState} from "react";
import NavLinks from "./NavLinks";
import {Link, useParams} from "react-router-dom";

export default function Specific(){

    const {id} = useParams()
    const [unpaidObjArray, setUnpaidObjArray] = useState([])

    const [specific, setSpecific ] = useState([{name:"", url:""}])

    react.useEffect(()=>{
        fetchUnpaidObjArraySpecific().then(x=> {
            setSpecific(...x);
        });
        fetchUnpaidObjArray().then( unpaidObjArray => {
                var objArray = [];
                objArray.push(...[{name: "<-----", url: "/"}, {name: "", url: "/autopay"}]);
                for(let i = 0; i < unpaidObjArray.length; i++){
                    if (unpaidObjArray[i].url == id) {
                        objArray.push({name:unpaidObjArray[i].name + ": $" + unpaidObjArray[i].amount, url:"/"});
                        break;
                    }
                    objArray.push(...[{name:"", url:""}])
                }

                setUnpaidObjArray(objArray);
            }
        );
})

    return(
        <div>
            <NavLinks objArry ={unpaidObjArray}/>
        </div>
    )
}