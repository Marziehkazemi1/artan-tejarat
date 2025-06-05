import Link from "next/link";
import { MenuItems } from "../MenuItems";

export default function Menu(){
    return(
        <div className="md:flex hidden gap-10">
            {
                MenuItems.map((item) => (
                    <Link href={item.href} key={item.id}>
                        <span className="flex gap-3 text-gray-300">{item.title}</span>
                    </Link>
                ))
            }
        </div>
    )
}