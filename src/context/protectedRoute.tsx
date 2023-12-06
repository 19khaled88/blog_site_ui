import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { getFromLocalstorage } from "@/lib/localostStorage";
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
        } else {
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
