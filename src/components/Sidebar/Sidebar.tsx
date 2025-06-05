import { SettingIcon } from "@/assets/icon/components/SettingIcon";
import { SidebarItems } from "../SidebarItems";

export default function Sidebar(){
    return(
        <div className="md:flex flex-col hidden">
            {
                SidebarItems.map((item) => (
                    <div key={item.id} className="flex gap-3 border-gray-400 border-b py-5">
                        <SettingIcon />
                        <span>{item.title}</span>
                    </div>
                ))
            }
        </div>
    )
}