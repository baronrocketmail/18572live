import {fetchPropertyInfoObj, fetchUnpaidObjArray} from "./dataFetching.mjs";
import NavLinks from "./NavLinks";
import react, {useState} from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

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
            <Box className={"customize"} sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab variant="extended">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Customize
                </Fab>
            </Box>
        </div>
    )
}

