"use client";
import { useEffect, useState } from "react";
import { fetchDataList } from "@/api/home";
import ListItemRow from "./ListItemRow";

export default function ListItems() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDataList();
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {
        data && 
        <ListItemRow item={data} />
      }
    </div>
  );
}
