import React, {useRef, useState} from 'react';
import {EuiButton, EuiFieldText, EuiForm, EuiFormRow,} from '@elastic/eui';
import emailjs from '@emailjs/browser';

import './Form.css';

const defaultFieldsValue = {
    'vinCode': '',
    'name': '',
    'phone': '',
    'mail': '',
    'note': '',
}
const fields = [
    {
        id: 1,
        name: 'vinCode',
        placeholder: "VIN-код",
    },
    {
        id: 2,
        name: 'name',
        placeholder: "Ваше имя",
    },
    {
        id: 3,
        name: 'phone',
        placeholder: "Телефон",
    },
    {
        id: 4,
        name: 'mail',
        placeholder: "Электронная почта",
    },
    {
        id: 5,
        name: 'note',
        placeholder: "Введите название запчасти",
    },
]
const Form = () => {
    const [fieldsValue, setFieldsValue] = useState(defaultFieldsValue);

    const form = useRef();

    const onChange = event => {
        const {name, value} = event.target;
        setFieldsValue({...fieldsValue, [name]: value})
    }

    const submit = async (event) => {
        event.preventDefault()
        try {
            await emailjs
                .sendForm('service_q84tp5l', 'template_jy4qcy7', form.current, {
                    publicKey: 'YH19HLxP68P3cWIiY',
                })
            setFieldsValue(defaultFieldsValue);

        } catch (error) {
            console.log('FAILED...', error);
        }
    }

    return (
        <EuiForm component="form" onSubmit={submit} ref={form}>
            {fields.map(field => (
                <EuiFormRow key={field.id}>
                    <EuiFieldText fullWidth name={field.name} placeholder={field.placeholder}
                                  value={fieldsValue[field.name]} onChange={onChange}/>
                </EuiFormRow>
            ))}
            <EuiButton type="submit" fill>
                Отправить
            </EuiButton>
        </EuiForm>
    );
};

export default Form;