import { Switch } from "antd"

export default function SwitchItems(){
    const items = [
        {
            id: 1,
            title: "متن تستی 1",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی",
            checked: true
        },
        {
            id: 2,
            title: "متن تستی 2",
            description: "نامفهوم از صنعت چاپ، و با استفاده  ",
            checked: false
        },
        {
            id: 3,
            title: "متن تستی 3",
            description: " چاپگرها و متون بلکه روزنامه و مجله ",
            checked: false
        },
    ]
    return(
        <div className="bg-white/10 lg:gap-4 md:p-4 mt-5 md:mt-10 backdrop-blur-md border border-white/30 rounded-xl shadow-md">
            {
                items.map((item) => (
                    <div className="flex items-center gap-2 py-2" key={item.id}>
                        <Switch size="small" defaultChecked={item.checked}/>
                       <div>
                         <h3 className="text-[15px]">{item.title}</h3>
                         <p className="text-[10px]">{item.description}</p>
                       </div>
                    </div>
                ))
            }
        </div>
    )
}