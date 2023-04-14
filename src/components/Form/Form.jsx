import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel } from '@mui/material';
import { notify } from '../../utils/constants';


export const Form = () => {
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
    const [nameError, setnameError] = useState(false)
    const [subjectError, setSubjectError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [descriptionError, setDescriptionError] = useState(false)

    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;/* eslint-disable-line */
    const handleSubmit = (event) => {

        event.preventDefault();
       

 
        if (name === '' ||  name.length < 3) {
            setnameError(true)
        } else {
            setnameError(false)
        }

        if (subject === '' ||  subject.length < 3) {
            setSubjectError(true)
        }else {
            setSubjectError(false)
        }
        if (email === '' || !emailPattern.test(email)) {
            setEmailError(true)
        }else {
            setEmailError(false)
        }
        if (description === ''  ||  description.length < 3) {
            setDescriptionError(true)
        }else {
            setDescriptionError(false)
        }


        if (
            !nameError && !subjectError&& !emailError && !descriptionError
        ){
            notify('Form submitted');

        }
    }
    
  return (
    <div>
<h2> Contact us </h2>
<FormControl  >
    <FormLabel>Full Name</FormLabel>
    <TextField onChange={e => setName(e.target.value)} type="text" variant='filled' size='small' color='secondary'   value={name}  error={nameError} defaultValue="" required></TextField>
    <FormLabel>Subject</FormLabel>
    <TextField onChange={e => setSubject(e.target.value)} type="text" variant='filled' size='small' color='secondary' value={subject}  error={subjectError} defaultValue=""></TextField>
    <FormLabel>Email</FormLabel>
    <TextField onChange={e => setEmail(e.target.value)} type="text" variant='filled' size='small' color='secondary' value={email}  error={emailError} defaultValue=""></TextField>
    <FormLabel>Description</FormLabel>
    <TextField onChange={e => setDescription(e.target.value)} type="text" variant='filled' size='small' color='secondary' value={description}  error={descriptionError} defaultValue=""></TextField>
    <button type='submit' onClick={handleSubmit}> Submit</button>
</FormControl>
        
    </div>
  )}