import React from 'react'
import { Form,Label } from 'semantic-ui-react';

const TextAreaInput = ({input,rows,width,type,placeholder,meta:{touched,error}}) => {
    return (
        <Form.Field error={touched && !!error}>
            <textArea {...input} placeholder={placeholder} rows={rows} type={type}/>
            {touched && error && <Label basic color='red'>{error}/</Label>}
        </Form.Field>
    )
}

export default TextAreaInput
