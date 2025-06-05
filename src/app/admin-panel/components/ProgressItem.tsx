import SemiCircleProgressAdd from "./SemiCircleProgressAdd";
import SemiCircleProgressDelete from "./SemiCircleProgressDelete";

export default function ProgressItem() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row gap-6 mt-10">
      <SemiCircleProgressDelete
        value={28}
      />

      <SemiCircleProgressAdd 
        value={51} 
      />
    </div>
  );
}
