import {Form,Button} from "antd"
import * as FormItems from "./FormItems";
import moment from "moment-jalaali";
import {useEffect} from "react";
import { HomeList, PostContent } from "@/@types/home";
import { editItem } from "@/api/home";
import { Dispatch, SetStateAction } from "react";

export default function EditFormContent(props:{
    item: HomeList;
    setOpenEditModal: Dispatch<SetStateAction<boolean>>
}){
    const [form] = Form.useForm();
    const todayJalali = moment().format("jYYYY/jMM/jDD");

    useEffect(() => {
      if (props.item){
        form.setFieldsValue({
            title: props.item.title,
            description: props.item.description
        })
      }
    } , [props.item.id])

    const onSubmit = async (values: PostContent) => {
        await editItem(props.item.id, values);
        props.setOpenEditModal(false)
        console.log(values)
    }

    return(
        <Form
        form={form}
        onFinish={onSubmit}
        initialValues={{ created_at: todayJalali }}
        layout="vertical">
            <h3 className="flex items-center justify-center font-bold text-blue-500 text-xl my-4">افزودن محتوا </h3>
            <FormItems.InputItem name="title" label="عنوان" required={true} message="This field is required."/>
            <FormItems.TextAreaItem name="description" label="توضیحات"/>
            <FormItems.InputItem name="created_at"label="تاریخ ایجاد" disabled={true}/>
            <Button type="primary" htmlType="submit">
             ثبت تغییرات
            </Button>
        </Form>
    )
}