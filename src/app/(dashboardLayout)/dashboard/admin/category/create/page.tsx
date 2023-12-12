"use client";
import { gql, useMutation } from '@apollo/client'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { toast as toastify } from 'react-toastify';
const key_name = 'post_blog_storage'

const CREATE_CATEGORY = gql`
        mutation Create_Category($name: String!){
            category_create(name: $name) {
                message,status,result {
                    id,name
                }
            }
        }
    `;

const CategoryCreatePage: React.FC = () => {

    const [inputs, setInputs] = useState({ name: '' })
    const [fieldEmpty, setFieldEmpty] = useState(false)
    const [category_insert, { loading, error: category_error }] = useMutation(CREATE_CATEGORY)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputs.name === "") {
            setFieldEmpty(true)
        } else {
            try {
                const data = await category_insert({ variables: inputs })
                toastify.success(data.data.category_create.message)
            } catch (error) {
                console.log(error)
                toastify.error('Something wrong!!')
            }
        }
    };

    const handleChange = (event: any) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }



    return (
        <div className="grid  gap-8 grid-cols-2">
            <div className="grid grid-col-2">
                <div className="flex flex-col sm:flex-row items-center">
                    <h2 className="font-semibold text-2xl mr-auto">
                        Category Create Page
                    </h2>
                    <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div className="mt-5 ">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                            <div className="w-full flex flex-col mb-3">
                                <label className="font-semibold text-gray-600 py-2 text-lg text-left">
                                    Category Name
                                    <abbr className="text-red-500" title="required">
                                        *
                                    </abbr>
                                </label>
                                <input
                                    placeholder="Enter category name"
                                    className={`${fieldEmpty === true && inputs.name === "" ? 'appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-500 rounded-lg h-10 px-4' : 'appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4'}`}
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    id="category"
                                />
                            </div>
                        </div>

                        <div className="mt-5 text-right md:space-x-3 flex flex-row items-center justify-end">
                            <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                                {" "}
                                Cancel{" "}
                            </button>
                            {
                                loading ?
                                    <button 
                                        className="flex flex-row mb-2 md:mb-0 bg-green-400 px-3 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                                        disabled>
                                        <svg className="w-5 h-5 mr-3 -ml-1 text-red-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>
                                        Loading...
                                    </button>
                                    :
                                    <button
                                        type="submit"
                                        className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                                        Create
                                    </button>
                            }

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CategoryCreatePage;
