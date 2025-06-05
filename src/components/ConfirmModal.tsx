import { Dispatch, SetStateAction, ReactNode } from "react";
import { Modal } from "antd";

export default function ConfirmModal(props: {
  handleDeleteItem?: () => void;
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
  isModalOpen?: boolean;
  children?: ReactNode;
}) {
  const handleCancel = () => {
    props.setIsModalOpen && props.setIsModalOpen(false);
  };

  return (
    <Modal
      closable={{ "aria-label": "Custom Close Button" }}
      open={props.isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <p className="font-bold text-center mt-10 mb-6">
        آیا از حذف این مورد اطمینان دارید؟
      </p>
      <div className="flex items-center justify-evenly py-3">
        <button
          className="bg-green-800 px-8 py-2 text-white rounded-md cursor-pointer"
          onClick={() => props.handleDeleteItem && props.handleDeleteItem()}
        >
          تایید
        </button>
        <button
          className="bg-red-800 px-8 py-2 text-white rounded-md cursor-pointer"
          onClick={handleCancel}
        >
          انصراف
        </button>
      </div>
    </Modal>
  );
}
