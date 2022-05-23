import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';


export default function Form({btnText}) {

  let navigate = useNavigate()

  const {register, handleSubmit, formState: { errors }} = useForm()

  const addPost = data => axios.post("https://localityapi.herokuapp.com/localitys", data)
  .then(() => {
      console.log("Deu tudo certo")
      navigate("/allMap")
  })
  .catch((error) => {
      console.log(error)
  })

return(

        <div className={styles.div}>

          <form className={styles.form} onSubmit={handleSubmit(addPost)}>

            <Input 
            className={styles.input}
            type="text" 
            placeholder="Localidade" 
            name='nome' 
            {...register('nome')}/>
            <p className={styles.error_message}>{errors.content?.message}</p>
          
            <Input 
            type="text" 
            name='latitude' 
            placeholder="Latitude" 
            {...register('latitude')}/>
            <p className={styles.error_message}>{errors.content?.message}</p>

            <Input 
            type="text" 
            name="longitude" 
            placeholder="Longitude" 
            {...register('longitude')}/>
            <p className={styles.error_message}>{errors.content?.message}</p>
          
            <Button type="submit" text='Cadastrar'
            onClick={()=> console.log('clicado')}/>

          </form>
        </div>
   
  
      )

}


