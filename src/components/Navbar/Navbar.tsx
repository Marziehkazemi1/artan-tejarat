import Logo from "./Logo";
import Menu from "./Menu";
import User from "./User";

export default function Navbar(){
    return(
        <div className="flex justify-between items-center">
            <Logo />
            <Menu />
            <User />
        </div>
    )
}