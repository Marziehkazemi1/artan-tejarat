import { Dispatch, SetStateAction, ReactNode } from "react";
import {Modal} from "antd"

export default function CustomModal(props: {
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
  isModalOpen?: boolean;
  children?: ReactNode; 
}) {
  const handleOk = () => {
    props.setIsModalOpen && props.setIsModalOpen(false);
  };

  const handleCancel = () => {
    props.setIsModalOpen && props.setIsModalOpen(false);
  };

  return (
    <Modal
      closable={{ "aria-label": "Custom Close Button" }}
      open={props.isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      {props.children} 
    </Modal>
  );
}
