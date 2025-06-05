import ChartBar from "./ChartBar";
import ChartManager from "./ChartManager";
import ChartManagerArea from "./ChartManagerArea";
import ChartManagerCurve from "./ChartManagerCurve";
import ChartManagerTwo from "./ChartManagerTwo";
import PostManager from "./PostManager";
import ProgressItem from "./ProgressItem";
import SwitchItems from "./SwitchItems";

export default function PanelBody(){
    return(
        <div className="flex flex-col">
            <PostManager />
           <div className="flex justify-between flex-col md:flex-row gap-3">
            <ProgressItem />
            <SwitchItems />
            <ChartBar />
           </div>
           <div className="flex justify-between flex-col md:flex-row gap-3">
            <ChartManager />
            <ChartManagerArea />
            <ChartManagerCurve />
           </div>
           <ChartManagerTwo />
        </div>
    )
}