import {Controller, useForm} from "react-hook-form";
import React from 'react';
import {Button, Input, DatePicker, Radio} from "antd";

const RhForm = () => {

    const {control, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        alert('Успешно зарегистрировано');
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Имя пользователя
                </label>
                <Controller
                    control={control}
                    name='name'
                    rules={{
                        required: 'Поле обязательно для заполнения',
                    }}
                    render={({field}) => <Input rootClassName='input' {...field} placeholder="Имя пользователя"/>}
                />
                <p>{errors.name?.message}</p>

                <label>Email</label>
                <Controller
                    control={control}
                    name='email'
                    rules={{
                        required: 'Поле обязательно для заполнения',
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                            message: 'Введите корректный email'
                        }
                    }}
                    render={({field}) => <Input rootClassName='input' {...field} placeholder="email"/>}
                />
                <p>{errors.email?.message}</p>

                <label>Пароль</label>
                <Controller
                    control={control}
                    name='password'
                    rules={{
                        required: 'Поле обязательно для заполнения',
                        minLength: {
                            value: 6,
                            message: 'Минимальная длина 6 символов'
                        },
                        pattern: {
                            value: /(?=.*[A-Z])/,
                            message: 'Пароль должен содержать хотя бы одну заглавную букву'
                        }
                    }}
                    render={({field}) => <Input.Password rootClassName='input' {...field} placeholder="password"/>}
                />
                <p>{errors.password?.message}</p>

                <label>Повторите пароль</label>
                <Controller
                    control={control}
                    name='repeatPassword'
                    rules={{
                        required: 'Поле обязательно для заполнения',
                        validate: (value, formValues) => {
                            return value === formValues.password || 'Пароли не совпадают';
                        }
                    }}
                    render={({field}) => <Input rootClassName='input' type='password'{...field} placeholder=" repeat password"/>}
                />
                <p>{errors.repeatPassword?.message}</p>

                <label>Дата рождения</label>
                <Controller
                    control={control}
                    name='birthday'
                    rules={{
                        required: 'Поле обязательно для заполнения'
                    }}
                    render={({field}) => <DatePicker {...field} />}
                />
                <p>{errors.birthday?.message}</p>

                <label> Ваш пол:</label>
                <Controller
                    control={control}
                    rules={{
                        required: 'Поле обязательно для заполнения'
                    }}
                    render={({field}) => (
                        <Radio.Group {...field}>
                            <Radio value='male'>Мужской</Radio>
                            <Radio value='female'>Женский</Radio>
                        </Radio.Group>
                    )}
                    name='gender'
                />
                <p>{errors.gender?.message}</p>

                <label>Телефон:</label>
                <Controller
                    rules={{
                        required: 'Поле обязательно для заполнения'
                    }}
                    control={control}
                    render={({field}) =>
                        <Input rootClassName='input' placeholder='+375291234567' {...field} />
                    }
                    name='phone'
                />
                <p>{errors.phone?.message}</p>

                <Button type='primary' htmlType='submit'>
                    Зарегистрироваться
                </Button>
            </form>
        </div>
    );
};

export default RhForm;