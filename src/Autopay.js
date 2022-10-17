import NavLinks from "./NavLinks";

export default function Autopay(){
    return(
        <div>
            <NavLinks objArry={[{name: "<------", url: "/"}, {name: "autopay: enabled", url:"/"}]}/>
        </div>
    )
}