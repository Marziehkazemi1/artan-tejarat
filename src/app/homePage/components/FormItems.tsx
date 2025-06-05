import {Form, Input} from "antd"

export const InputItem = (props:{
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    message?: string;
    disabled?: boolean;
}) => {
    return(
        <Form.Item name={props.name} label={props.label} 
          rules={[{required: props.required, message: props.message}]}>
            <Input placeholder={props.placeholder} disabled={props.disabled}/>
        </Form.Item>
    )
}

export const TextAreaItem = (props:{
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    message?: string;
}) => {
    return(
        <Form.Item name={props.name} label={props.label} 
        rules={[{required: props.required, message: props.message}]}>
            <Input.TextArea />
        </Form.Item>
    )
}