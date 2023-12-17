'use client'
import React, { useState } from 'react'
import { IoWarning } from 'react-icons/io5'
import { gql, useMutation } from '@apollo/client'
import { toast as toastify } from 'react-toastify';

const UPDATE_CATEGORY = gql`
mutation UpdateCategory($categoryUpdateId: Int!, $categoryData: UpdateCategory!){
    category_update(id: $categoryUpdateId, categoryData: $categoryData) {
      message,status,result {
        id,name,user {
          id,name
        },posts {
          id,title,content
        }
      }
    }
  }
`;

const Edit_Modal = ({ setPopUp, title, editField }: { setPopUp: any, title: any, editField: Record<string, string> }) => {
    const [inputs, setInputs] = useState({ category: '' })
    const [editableValue, setEditableValue] = useState('')
    const [buttonActive, setButtonActive] = useState(true)

    const [update, { loading, error }] = useMutation(UPDATE_CATEGORY)

    const changeHandler = (event: any) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }


    const submitEditHandler = async () => {
        if (inputs.category === '') {
            setEditableValue(editField.name)
            toastify.warn('Nothing updated')

        } else if (inputs.category != '') {
            setEditableValue(inputs.category)
            setButtonActive(false)
            const res = await update({
                variables: {
                    "categoryUpdateId": Number(editField.id),
                    "categoryData": { name: inputs.category }
                }
            })
            if (res.data.category_update.status === 400) {
                toastify.warn(res.data.category_update.message)
                setPopUp(false)
            } else if (res.data.category_update.status === 200) {
                toastify.success(res.data.category_update.message)
                setPopUp(false)
            }


        }

    }
    return (
        <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
            <div className='bg-white p-10 rounded-md shadow-md'>
                <h1 className='font-bold text-center text-lg my-5'>{title}</h1>
                <div className='flex gap-5 items-center'>
                    <label>Edited Name : </label>
                    <input type='text' name='category' className='py-2 pl-2' onChange={changeHandler} defaultValue={editField.name} placeholder={editField.name} />
                </div>
                <div className='flex justify-between mt-5'>
                    <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
                        onClick={() => setPopUp(false)}
                    >Cancel</button>
                    <button disabled={buttonActive === true ? false : true} className={`outline outline-1 outline-[#101f20]  ${buttonActive === true ? "hover:text-white hover:bg-[#101f20]" : ""}  py-2 px-4 bg-transparent text-black`}
                        onClick={submitEditHandler}
                    >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Edit_Modal
