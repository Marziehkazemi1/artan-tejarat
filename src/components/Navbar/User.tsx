import { BellIcon } from "@/assets/icon/components/BellIcon";
import { MenuIcon } from "@/assets/icon/components/MenuIcon";
import { SearchIcon } from "@/assets/icon/components/SearchIcon";
import { UserIcon } from "@/assets/icon/components/UserIcon";

export default function User(){
    return(
        <div className="gap-3 hidden md:flex">
            <SearchIcon />
            <BellIcon />
            <span>
                <UserIcon />
            </span>
            <MenuIcon/>
        </div>
    )
}