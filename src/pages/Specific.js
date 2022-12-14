import {fetchUnpaidObjArray, fetchUnpaidObjArraySpecific} from "../api/dataFetching.mjs";
import NavLinks from "../components/NavLinks";
import {useParams} from "react-router-dom";
import React, {useState} from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import "../styles/paymentElement.css";

import react from "react";

const stripePromise = loadStripe("pk_live_51LlESTC3Ie0MSAM2CQtveok1BNyKHlkw8W0aVunFTMYjMAGi0y6dEaHreNGy0TC4oRkfSMwOkcXUftn0oTlwDaBg00bnHjzls6");

export default function Specific(){

    const [clientSecret, setClientSecret] = useState("");

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    const {id} = useParams()
    const [unpaidObjArray, setUnpaidObjArray] = useState([])

    react.useEffect(()=>{

        fetchUnpaidObjArraySpecific(id).then(x=> {
            setClientSecret(x[0].clientSecret);
            console.log(x[0]);
            console.log("client secret:" + clientSecret);

        });

        fetchUnpaidObjArray().then( unpaidObjArray => {
                var objArray = [];
                objArray.push(...[{name: "<-----", url: "/"}, {name: "", url: "/autopay"}]);
                for(let i = 0; i < unpaidObjArray.length; i++){
                    if (unpaidObjArray[i].url === id) {
                        objArray.push({name:unpaidObjArray[i].name + ": $" + unpaidObjArray[i].amount, url:"/"});
                        break;
                    }
                    objArray.push(...[{name:"", url:""}])
                }
                setUnpaidObjArray(objArray);
            }
        );
}, [])

    return(

        <div>

            <NavLinks objArry ={unpaidObjArray}/>
            <div className="App">
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )}
            </div>
        </div>
    )
}