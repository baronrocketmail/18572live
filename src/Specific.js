import {fetchPropertyInfoObj, fetchUnpaidObjArray, fetchUnpaidObjArraySpecific} from "./dataFetching.mjs";
import NavLinks from "./NavLinks";
import {Link, useParams} from "react-router-dom";
import React, {useState, useEffect, useContext} from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./App.css";
import react from "react";
import {ThemeContext} from "@emotion/react";

const stripePromise = loadStripe("pk_test_51LlESTC3Ie0MSAM21CjKndOxCjSpqejUuXSIDiojSTvS1o7UqsZ1dI1fyHE1dgwwQecy1qPuy6j613F70wu0Z9yL00eNWxldcl");


export default function Specific(){

    const [clientSecret, setClientSecret] = useState("pi_3Lu0NRC3Ie0MSAM21o4MBDIk_secret_GxAJ3snfPBgzd0PekSvhySMk9");

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };


    const {id} = useParams()
    const [unpaidObjArray, setUnpaidObjArray] = useState([])

    const [specific, setSpecific ] = useState([{name:"", url:""}])

    react.useEffect(()=>{


        // Create PaymentIntent as soon as the page loads
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));


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