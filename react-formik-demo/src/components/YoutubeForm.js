import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: 'Vishwas',
    email: '',
    channel: ''
}

const validate = values => {
    let errors = {};

    if (!values.name) {
        errors.name = "Name is required"
    }

    if (!values.email) {
        errors.email = "E-mail is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2, 4}$/i.test(values.email)) {
        errors.email = "Invalid e-mail format"
    }

    if (!values.channel) {
        errors.channel = "Channel is required"
    }

    return errors;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required!'),
    email: Yup.string().email("Invalid email format").required('E-mail is required!'),
    channel: Yup.string().required('Channel is required!')
})

const onSubmit = values => {
    console.log("Form values: ", values);
}

const YoutubeForm = () => {

    // console.log("Formik Values: ", formik.touched)

    return (
            // <h1>Youtube Form</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field
                        type='text'
                        id='name' 
                        name='name' />
                    <ErrorMessage name='name' />
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <Field
                        type='email'
                        id='email'
                        name='email' />
                    <ErrorMessage name='email' />
                </div>
                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field
                        type='text'
                        id='channel'
                        name='channel'
                    />
                    <ErrorMessage name='channel' />
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm