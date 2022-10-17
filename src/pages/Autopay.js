import NavLinks from "../components/NavLinks";

export default function Autopay(){
    return(
        <div>
            <NavLinks objArry={[{name: "<------", url: "/"}, {name: "autopay: inactive", url:"/"}]}/>
        </div>
    )
}