import {Formik, Form, Field, ErrorMessage} from "formik";
import React from 'react';
import * as Yup from 'yup';
import * as yup from "yup";
import s from './FormikForm.module.css';

const FormikForm = () => {
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateBirth: '',
        gender: '',
        phone: ''
    };

    const handleSubmit = (value) => {
        console.log(JSON.stringify(value));
        alert('Успешно зарегестрировано!');
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Обязательное поле'),
        email: Yup.string().email('Введите корректный email').required('Обязательное поле'),
        password: Yup.string().min(6, 'Минимальная длина 6 символов').matches(/(?=.*[A-Z])/, 'Пароль должен содержать хотя бы одну заглавную букву').required('Обязательное поле'),
        confirmPassword: Yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательное поле'),
        dateBirth: Yup.string().required('Обязательное поле'),
        gender: Yup.string().required('Обязательное поле'),
        phone: Yup.string().required('Обязательное поле')
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className='form'>
                <div className={s.field}>
                    <div className={s.field_div}>
                        <label htmlFor='username'>Имя пользователя</label>
                        <div>
                            <Field type="text" id="username" name="username" placeholder="Pete"/>
                        </div>
                    </div>
                    <ErrorMessage className={s.errorMessage} name="username" component="div"/>
                </div>

                <div className={s.field}>
                    <div className={s.field_div}>
                        <label htmlFor='email'>Электронная почта</label>
                        <div>
                            <Field type="email" name="email" placeholder="pete@gmail.com"/>
                        </div>
                    </div>
                    <ErrorMessage className={s.errorMessage} name="email" component="div"/>
                </div>

                <div className={s.field}>
                    <div className={s.field_div}>
                        <label htmlFor='password'>Пароль</label>
                        <div>
                            <Field type="password" name="password" placeholder=""/>
                        </div>
                    </div>
                    <ErrorMessage className={s.errorMessage} name="password" component="div"/>
                </div>


                <div className={s.field}>
                    <div className={s.field_div}>
                        <label htmlFor='confirmPassword'>Повторите пароль</label>
                        <div>
                            <Field type="password" name="confirmPassword" placeholder=""/>
                        </div>
                    </div>
                    <ErrorMessage className={s.errorMessage} name="confirmPassword" component="div"/>
                </div>

                <div className={s.field}>
                    <div className={s.field_div}>
                        <label htmlFor='dateBirth'>Дата рождения</label>
                        <div>
                            <Field type="date" name="dateBirth"/>
                        </div>
                    </div>
                    <ErrorMessage className={s.errorMessage} name="dateBirth" component="div"/>
                </div>

                <div className={s.field}>
                    <div className={s.field_div}>
                        <label htmlFor='gender'>Ваш пол:</label>
                        <div>
                            <label>
                                Мужской
                                <Field type="radio" value='male' name="gender"/>
                            </label>
                            <label>
                                Женский
                                <Field type="radio" value='female' name="gender"/>
                            </label>
                        </div>
                    </div>
                    <ErrorMessage className={s.errorMessage} name="gender" component="div"/>
                </div>

                <div className={s.field}>
                    <div className={s.field_div}>
                        <label htmlFor='phone'>Телефон</label>
                        <div>
                            <Field type="tel" name="phone"/>
                        </div>
                    </div>
                    <ErrorMessage className={s.errorMessage} name="phone" component="div"/>
                </div>

                <div>
                    <button type='submit'>Отправить</button>
                </div>

            </Form>
        </Formik>
    );
};

export default FormikForm;

