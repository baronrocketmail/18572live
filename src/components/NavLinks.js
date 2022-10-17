import {Link} from "react-router-dom";

export default function NavLinks(props){
    //  [ {name: "" , href: "" } ]
    let navLinks = []
    for (let elem in props.objArry){
        navLinks.push(
            <div>
            <Link to={props.objArry[elem].url}>{props.objArry[elem].name}</Link>
            <br/>
            </div>
        )
    }
    return(
        <div className={"nlinks"}>
        {navLinks}
        </div>
    )
}