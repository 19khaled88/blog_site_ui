import { useEffect, useState } from "react";
import { JwtPayload, jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/navigation';
import { getFromLocalstorage,removeLocalStorage } from "@/lib/localostStorage";
const key_name = 'post_blog_storage'


interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const router = useRouter();


    useEffect(() => {
        const token = getFromLocalstorage(key_name) // Replace with your actual authentication token retrieval logic

        if (!token) {
            setLoading(false)

            router.push('/authentication/login');
        } else if (token && token != null) {
            const { exp, iat } = jwtDecode<JwtPayload>(token)
            if (exp != undefined && Date.now() >= exp * 1000) {
                removeLocalStorage(key_name)
                router.push('/authentication/login');
            }
            setLoading(false)
        }
    }, [router]);
    if (loading === true) {
        return <div className="flex flex-row justify-center items-center"><h1>Loading...</h1></div>
    } else {
        return <>{children}</>;
    }
};

export default ProtectedRoute;
