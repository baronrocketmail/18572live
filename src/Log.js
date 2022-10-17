import react, {useState} from "react";
import {fetchNotUnpaidObjArray, fetchPropertyInfoObj, fetchUnpaidObjArray} from "./dataFetching.mjs";
import NavLinks from "./NavLinks";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
    }, [])
    return(
        <div>
            <NavLinks objArry = {unpaidObjArray}/>

            <BasicTable/>
            <Button className={"cbtn"} variant="text">Primary</Button>
        </div>
    )
}

function BasicTable() {
    const [rows, setRows] = useState([])
    react.useEffect(() => {
        fetchNotUnpaidObjArray().then( notUnpaidObjArray => {
            var objArray = []
            for (let elem in notUnpaidObjArray) {
                if (notUnpaidObjArray[elem].status != "paid") {
                    objArray.push({name: notUnpaidObjArray[elem].name + ": " + notUnpaidObjArray[elem].status, amount: notUnpaidObjArray[elem].amount})
                } else {
                    objArray.push({name: notUnpaidObjArray[elem].name, amount: notUnpaidObjArray[elem].amount})
                }
            }
            setRows(objArray)
        })
    }, [])

    return (
        <TableContainer className={"table"} component={Paper}>
            <Table sx={{}} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}