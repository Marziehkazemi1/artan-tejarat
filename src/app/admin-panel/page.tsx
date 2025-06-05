import Container from "@/components/Container";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import PanelBody from "./components/PanelBody";

export default function AdminPanel(){
    return(
        <Container>
            <Navbar />
           <div className="grid grid-cols-12 mt-10 gap-10">
            <div className="col-span-2 hidden md:block">
            <Sidebar />
            </div>
            <div className="md:col-span-10 col-span-12">
            <PanelBody />
            </div>
           </div>
        </Container>
    )
}