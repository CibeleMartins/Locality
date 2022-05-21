import styles from './Input.module.css';

export default function Input({type, placeholder, onChange, value}) {

  return (

        <div className={styles.form_control}>
          <input 
          type={type} 
          placeholder={placeholder} 
          onChange={onChange}
          value={value}>
          </input>
        </div>

  )
}

