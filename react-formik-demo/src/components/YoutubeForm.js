import React from 'react';
import {useFormik} from 'formik';

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

const onSubmit = values => {
    console.log("Form values: ",values);
}

const YoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    console.log("Formik Values: ", formik.values)
    
  return (
    <div>
        <h1>Youtube Form</h1>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />

            <label htmlFor='channel'>Channel</label>
            <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm