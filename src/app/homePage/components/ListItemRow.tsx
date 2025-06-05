import { useState, useEffect } from "react";
import { HomeList } from "@/@types/home";
import { EditIcon } from "@/assets/icon/components/EditIcon";
import { TrashIcon } from "@/assets/icon/components/TrashIcon";
import ConfirmModal from "@/components/ConfirmModal";
import { deleteItem } from "@/api/home";
import CustomModal from "@/components/CustomModal";
import EditFormContent from "./EditFormContent";

export default function ListItemRow(props: { item: HomeList[] }) {
  const [items, setItems] = useState<HomeList[]>([]);

  useEffect(() => {
    if (props.item && props.item.length > 0) {
      setItems(props.item);
    }
  }, [props.item]);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | any>(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<HomeList | null>(null);

  const openConfirmDelete = (id: number) => {
    setSelectedId(id);
    setOpenDeleteModal(true);
  };

  const openEdit = (id: number) => {
    const item = items.find((item) => item.id === id);
    if (!item) return;
    setSelectedId(id);
    setSelectedItem(item);
    setOpenEditModal(true);
  };

  const handleDeleteItem = async () => {
    if (!selectedId) return;
    const deleted = await deleteItem(selectedId);
    if (deleted) {
      const filtered = items.filter((item) => item.id !== selectedId);
      setItems(filtered);
    }
    setOpenDeleteModal(false);
    setSelectedId(null);
  };

  return (
    <div className="flex flex-col gap-5">
      {items.length > 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className="bg-[#a2a8d3] px-5 py-3 rounded-md flex items-center justify-between"
          >
            <span className="text-black">{item.title}</span>
            <div className="flex gap-3">
              <div onClick={() => openConfirmDelete(item.id)}>
                <TrashIcon class="text-gray-700 cursor-pointer" />
              </div>
              <div onClick={() => openEdit(item.id)}>
                <EditIcon class="text-gray-700 cursor-pointer" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="flex items-center justify-center font-bold text-2xl mt-10">
          لیستی وجود ندارد
        </p>
      )}

      <ConfirmModal
        handleDeleteItem={handleDeleteItem}
        setIsModalOpen={setOpenDeleteModal}
        isModalOpen={openDeleteModal}
      />

      <CustomModal setIsModalOpen={setOpenEditModal} isModalOpen={openEditModal}>
        {selectedItem && (
          <EditFormContent item={selectedItem} setOpenEditModal={setOpenEditModal} />
        )}
      </CustomModal>
    </div>
  );
}
