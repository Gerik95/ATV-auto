import React, { useRef, useState } from 'react';
import { EuiButton, EuiFieldText, EuiForm, EuiFormRow, EuiTextArea, EuiFieldNumber } from '@elastic/eui';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

const defaultFieldsValue = {
    'vinCode': '',
    'name': '',
    'phone': '',
    'mail': '',
    'note': '',
};

const fields = [
    {
        id: 1,
        name: 'vinCode',
        placeholder: "* VIN-код",
        component: EuiFieldText,
    },
    {
        id: 2,
        name: 'name',
        placeholder: "* Ваше имя",
        component: EuiFieldText,
    },
    {
        id: 3,
        name: 'phone',
        placeholder: "* Телефон",
        component: EuiFieldNumber,
    },
    {
        id: 4,
        name: 'mail',
        placeholder: "Электронная почта",
        component: EuiFieldText,
    },
    {
        id: 5,
        name: 'note',
        placeholder: "* Введите название запчасти",
        component: EuiTextArea,
    },
];

const Form = () => {
    const [fieldsValue, setFieldsValue] = useState(defaultFieldsValue);
    const [errors, setErrors] = useState({});
    const formRef = useRef();

    const notifySuccess = () => toast.success('VIN-запрос успешно отправлен', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    const notifyError = () => toast.error('Ошибка отправки VIN-запроса', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const generateErrors = () => {
        let errorsList = [];
        let test = {};
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

        if (fieldsValue.vinCode.length < 17) {
            test = { ...test, vinCode: 'VIN-код должен содержать 17 символов' };
            errorsList.push('VIN-код должен содержать 17 символов');
        }
        if (!fieldsValue.name.length) {
            test = { ...test, name: 'Это поле является обязательным' };
            errorsList.push('Это поле является обязательным');
        }
        if (!fieldsValue.phone.length) {
            test = { ...test, phone: 'Это поле является обязательным' };
            errorsList.push('Это поле является обязательным');
        }
        if (!EMAIL_REGEXP.test(fieldsValue.mail) && fieldsValue.mail.length) {
            test = { ...test, mail: 'Адрес эл.почты введён не верно' };
            errorsList.push('Адрес эл.почты введён не верно');
        }
        if (!fieldsValue.note.length) {
            test = { ...test, note: 'Это поле является обязательным' };
            errorsList.push('Это поле является обязательным');
        }
        setErrors(test);
        return errorsList;
    };

    const handleChange = (event, name) => {
        const { value } = event.target;

        setFieldsValue({ ...fieldsValue, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (generateErrors().length) {
            return;
        }

        try {
            await emailjs
                .sendForm('service_q84tp5l', 'template_jy4qcy7', formRef.current, {
                    publicKey: 'YH19HLxP68P3cWIiY',
                });
            setFieldsValue(defaultFieldsValue);
            setErrors({});
            notifySuccess();
        } catch (error) {
            console.log('FAILED...', error);
            notifyError();
        }
    };

    const renderField = (item) => {
        const fieldProps = {
            value: fieldsValue[item.name],
            name: item.name,
            onChange: (event) => handleChange(event, item.name),
            placeholder: item.placeholder,
            'aria-label': item.placeholder.replace('* ', ''),
            fullWidth: true,
        };

        switch (item.component) {
            case EuiFieldText:
                return (
                    <>
                        <EuiFieldText {...fieldProps} />
                        {errors[item.name] && <p className='message-error'>{errors[item.name]}</p>}
                    </>
                );

            case EuiFieldNumber:
                return (
                    <>
                        <EuiFieldNumber {...fieldProps} />
                        {errors[item.name] && <p className='message-error'>{errors[item.name]}</p>}
                    </>
                );

            case EuiTextArea:
                return (
                    <>
                        <EuiTextArea {...fieldProps} rows={5} />
                        {errors[item.name] && <p className='message-error'>{errors[item.name]}</p>}
                    </>
                );

            default:
                return <></>;
        }
    };

    return (
        <EuiForm component="form" onSubmit={handleSubmit} ref={formRef} className="vin-form">
            {fields.map(field => (
                <EuiFormRow key={field.id} className="vin-form-row">
                    {renderField(field)}
                </EuiFormRow>
            ))}

            <EuiButton className="vin-form-submit" type="submit" fill fullWidth>
                Отправить запрос
            </EuiButton>

            <ToastContainer />
        </EuiForm>
    );
};

export default Form;