
import styles from '../../css/inputField.module.css'
import {ChangeEvent, FC, useState} from 'react'

interface InputProps{
    type: 'text' | 'number' | 'email' | 'password'
    label:string
    value:string | number 
    name:string 
    placeholder:string 
    message:string
    error:boolean 
    disabled?:boolean 
    onChange:(e:ChangeEvent<HTMLInputElement>) => void 
}


const Input:FC<InputProps>=({
    type,
    label,
    value,
    name,
    message,
    placeholder,
    error,
    disabled,
    onChange
})=>{
    return(
        <div className={styles.input_wrapper}>
            <label htmlFor={label} className={styles.label}>{label}</label>
            <input 
                className={styles.input}
                type={type}
                id={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
            />
            {error && <p className={styles.error}>Input field cannot be empty!</p>}
        </div>
    )
}

export default Input
