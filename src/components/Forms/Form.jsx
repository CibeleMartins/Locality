import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';


export default function Form({btnText}) {

  let navigate = useNavigate()

  const [nome, setNome] = useState('')
  
  const [lt, setLt] = useState('')
  
  const [lg, setLg] = useState('')


  const addPost = (event) => {

    event.preventDefault()
    
    axios.post("https://localityapi.herokuapp.com/localitys", 
  {
    nome: nome,
    latitude: lt,
    longitude: lg
  }).then((data) => {
    console.log("Deu tudo certo")
    console.log(data)
    navigate("/allMap")
})
.catch((error) => {
    console.log(error)
})

}
  

return(

        <div className={styles.div}>

          <form className={styles.form} onSubmit={addPost}>

            <Input 
            className={styles.input}
            type="text" 
            placeholder="Localidade" 
            name='nome'
            value={nome} 
            onChange={(event)=> setNome(event.target.value)}
           />
           
          
            <Input 
            type="text" 
            name='latitude' 
            placeholder="Latitude"
            value={lt} 
            onChange={(event)=> setLt(event.target.value)}
            />
            

            <Input 
            type="text" 
            name="longitude" 
            placeholder="Longitude" 
            value={lg}
            onChange={(event)=> setLg(event.target.value)}
            />
          
          
            <Button type="submit" text='Cadastrar'
            onClick={()=> console.log('clicado')}/>

          </form>
        </div>
   
  
      )

}


