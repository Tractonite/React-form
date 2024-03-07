import React from "react";
import '../assest/css/signUpFormStyle.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Dropdown from 'react-bootstrap/Dropdown';


const SignUpForm = () => {
    const formSchema = yup.object({
        first_name: yup.string().required('First Name is Required'),
        last_name: yup.string().required('Last Name is Required'),
        contact_number: yup.string().required('Contact Number is Required'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="main">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form_group">
                    <label>
                        First Name:
                    </label>
                    <input
                        type="text"
                        name="first_name"
                        {
                        ...register('first_name')
                        }
                    />
                    <p>{errors.first_name?.message}</p>

                    <label>
                        Last Name:
                    </label>
                    <input
                        type="text"
                        name="last_name"
                        {
                        ...register('last_name')
                        }
                    />
                    <p>{errors.last_name?.message}</p>

                    <label>
                        Contact Number:
                    </label>
                    <input
                        type="number"
                        name="contact_number"
                        {
                        ...register('contact_number')
                        }
                    />
                    <p>{errors.contact_number?.message}</p>
                </div>
                <center>
                    <input type="submit" value="Sign up" /></center>
            </form>
        </div>
    )
}

export default SignUpForm