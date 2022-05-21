import styles from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

// import {useState} from 'react';


export default function Form({btnText}) {

    return (
      <div className={styles.div}>

        <form className={styles.form}>

          <Input type="text" placeholder="Locality name"/>
        
          <Input type="text" placeholder="Longitude" />
          <Input type="text" name="email" placeholder="Latitude"/>
        
          <Button type="submit" text='Register'/>

        </form>
      </div>
  
    )

}


