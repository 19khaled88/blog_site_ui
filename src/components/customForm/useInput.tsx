import { ChangeEvent, useState } from 'react'

const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)
    const [inputs,setInputs] = useState({})
    const [error, setError] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        setInputs((values)=>({...values,[name]:value}))
        setValue(e.target.value)
    }


    return {
        value, error, onChange: handleChange, setError,inputs
    }
}

export default useInput