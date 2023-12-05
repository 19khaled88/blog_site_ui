'use client'
import Link from "next/link"
import { useState } from "react"
import {NextPage} from 'next'
import { useMutation, gql } from '@apollo/client'
import toast from 'react-hot-toast';
import { toast as toastify } from 'react-toastify';
import { setLocalstorage } from "@/lib/localostStorage";
import { redirect, useRouter } from 'next/navigation'
// import IsLoggedIn from "@/context/isLoggedIn"


const LOGINI_USER_MUTATION = gql`
        mutation LoginUser($email: String!, $password: String!){
            signin(email: $email, password: $password) {
            message,token,status
            }
        }
    `;

const LoginPage:NextPage = () => {
    const [passView, setPassView] = useState(true)
    const [inputs, setInputs] = useState({ email: '', password: '' })

    const [signin, { loading, error }] = useMutation(LOGINI_USER_MUTATION)
    const router = useRouter()

    const handlePassView = () => {
        setPassView(!passView)
    }

    const handleChange = (event: any) => {
        const name = event.target.name
        const value = event.target.value


        setInputs(values => ({ ...values, [name]: value }))
    }
    const submitHandler = async (event: any) => {
        event.preventDefault()
        const authenticateUser = inputs
        try {
            const { data } = await signin({ variables: authenticateUser });

            if (data.signin.token && data.signin.token != null) {
                const res = await setLocalstorage(data.signin.token)
                if (res.success === true) {
                    toast.loading('Redirecting to dashboard....', {
                        duration: 3000,
                        position: 'top-center',
                    })
                    
                    setTimeout(()=>{
                        router.push('/dashboard')
                    },3000)
                }
            }
            if (data.signin.status === 400) {
                // toast.error(data.signin.message, {
                //     duration: 4000,
                //     position: 'top-center',
                // })
                toastify.error(data.signin.message)

            }
            // Handle success
        } catch (error) {
            console.error('Error Login in user:', error);
            // Handle error
        }
    }
    return (
        <div className="flex flex-row px-56 justify-center items-center h-screen ">
            <div className="grid grid-cols-2 justify-center">
                <div className="flex flex-col gap-5 border border-1 border-gray-500 p-10">
                    <h1 className="text-2xl font-bold">Login</h1>
                    <p className="text-gray-600">Sign in to your account</p>
                    <form className="flex flex-col gap-5" onSubmit={submitHandler}>
                        <div>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                    </svg>

                                </span>
                                <input
                                    type="email"
                                    onChange={handleChange}
                                    value={inputs.email}
                                    name="email"
                                    required
                                    id="email"
                                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Email" />
                            </div>
                        </div>
                        <div>
                            <div className="flex relative">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                    </svg>

                                </span>
                                <input
                                    type={passView === true ? 'password' : 'text'}
                                    id="password"
                                    value={inputs.password}
                                    name="password"
                                    required
                                    onChange={handleChange}
                                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Password" />

                                <span className="inline-flex items-center px-3 text-sm text-gray-900 absolute inset-y-0 right-0">
                                    {
                                        passView === true ?
                                            <svg onClick={handlePassView} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg> :
                                            <svg onClick={handlePassView} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                    }
                                </span>


                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Sign In
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
                <div className="bg-blue-500 p-10 flex flex-col items-center justify-evenly">
                    <h1 className="text-center text-2xl font-bold text-white">Sign-Up</h1>
                    <span className="flex flex-col items-center text-white">
                        <p>If  yout don not have account</p>
                        <p> Register here</p>
                    </span>
                    <Link href="/authentication/register" className="border border-1 border-white text-xl w-fit text-white px-5 py-1 rounded-md">Register now</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage