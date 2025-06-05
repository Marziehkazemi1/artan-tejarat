export default function Container({ children }: { children: React.ReactNode }){
    return(
        <div className="w-[90%] 2xl:w-[70%] m-auto py-7">
            {children}
        </div>
    )
}