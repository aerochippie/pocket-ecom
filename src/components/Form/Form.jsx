import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel } from '@mui/material';
import { notify } from '../../utils/constants';


export const Form = () => {

    const clearForm = () => {
        setName('')
        setSubject('')
        setEmail('')
        setDescription('')
    }
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
    const [nameError, setnameError] = useState()
    const [subjectError, setSubjectError] = useState()
    const [emailError, setEmailError] = useState()
    const [descriptionError, setDescriptionError] = useState()
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;/* eslint-disable-line */
    useEffect(() => {

        name === '' || name.length < 3 ? setnameError(true) : setnameError(false)
        subject === '' || subject.length < 3 ? setSubjectError(true) : setSubjectError(false)
        email === '' || !emailPattern.test(email) ? setEmailError(true) : setEmailError(false)
        description === '' || description.length < 3 ? setDescriptionError(true) : setDescriptionError(false)

    }, [name, subject, email, emailPattern, description]
    )

    const handleSubmit = (event) => {

        event.preventDefault();
        if (!subjectError && !nameError && !emailError && !descriptionError) {
            notify('Form submitted!')
            clearForm()
        }


    }

    return (
        <div>
            <h2> Contact us </h2>
            <FormControl  >
                <FormLabel>Full Name</FormLabel>
                <TextField onChange={e => setName(e.target.value)} type="text" variant='filled' size='small' color='secondary' value={name} error={nameError} required></TextField>
                <FormLabel>Subject</FormLabel>
                <TextField onChange={e => setSubject(e.target.value)} type="text" variant='filled' size='small' color='secondary' value={subject} error={subjectError} ></TextField>
                <FormLabel>Email</FormLabel>
                <TextField onChange={e => setEmail(e.target.value)} type="text" variant='filled' size='small' color='secondary' value={email} error={emailError} ></TextField>
                <FormLabel>Description</FormLabel>
                <TextField onChange={e => setDescription(e.target.value)} type="text" variant='filled' size='small' color='secondary' value={description} error={descriptionError} ></TextField>
                <button type='submit' onClick={handleSubmit}> Submit</button>
            </FormControl>

        </div>
    )
}