"use client"
import CustomModal from "@/components/CustomModal";
import { useState } from "react";
import AddFormContent from "./AddFormContent";
import Link from "next/link";

export default function HeaderHome(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
    };

    return(
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold my-6"> لیست محتوا</h2>
          <div className="flex gap-3">
          <button  onClick={showModal} className="px-6 py-2 bg-blue-400 rounded-md cursor-pointer font-bold">
             افزودن محتوا
          </button>
          <Link href="admin-panel" className="bg-[#f70776] font-bold px-6 py-2 rounded-md cursor-pointer">پنل ادمین </Link>
          <CustomModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
            <AddFormContent setIsModalOpen={setIsModalOpen}/>
          </CustomModal>
          </div>
        </div>
    )
}