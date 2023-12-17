'use client'
import Link from "next/link";
import { HeaderContainer, TitleContainer, IconContainer, NavigationContainer } from "./styles";
import { useRouter } from 'next/navigation'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
import { Menu, ChevronLeft } from "@styled-icons/material"
import toast from 'react-hot-toast';
import { removeLocalStorage } from "@/lib/localostStorage";
const key_name = 'post_blog_storage'
type HeaderProps = {
    isOpened: boolean,
    toggleDrawer: () => void,
}

export default function Header({ isOpened, toggleDrawer }: HeaderProps) {
    const router = useRouter()
    const logoutHandler = async () => {
        const isRemoved = await removeLocalStorage(key_name)
        if (isRemoved.success === true) {
            toast.loading('Logging out!', {
                duration: 3000,
                position: 'top-center',
            })

            setTimeout(() => {
                router.push('/authentication/login')
            }, 3000)

        }
    }
    return (
        <HeaderContainer>
            <IconContainer onClick={toggleDrawer}>
                {isOpened ? <ChevronLeft /> : <Menu />}
            </IconContainer>
            <TitleContainer>Dashboard Header</TitleContainer>
            <NavigationContainer>
                <Link href="/">Go to Website</Link>
                <button onClick={logoutHandler}>Logout</button>
            </NavigationContainer>
            <Toaster />
            <ToastContainer />
        </HeaderContainer>
    )
}