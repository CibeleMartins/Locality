import styles from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default function Form({btnText}) {

    return (

        <div className={styles.div}>

          <form className={styles.form}>

            <Input type="text" placeholder="Localidade"/>
          
            <Input type="text" placeholder="Longitude" />
            <Input type="text" name="email" placeholder="Latitude"/>
          
            <Button type="submit" text='Cadastrar'/>

          </form>
        </div>
  
    )

}


