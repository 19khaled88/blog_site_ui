import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { getFromLocalstorage } from "@/lib/localostStorage";
const key_name = 'post_blog_storage'


interface IsAuthenticatedProps {
    children: React.ReactNode;
}

const IsAuthenticated: React.FC<IsAuthenticatedProps> = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const router = useRouter();

    useEffect(() => {
        const token = getFromLocalstorage(key_name) // Replace with your actual authentication token retrieval logic
        if (token) {
            setLoading(false)
            router.push('/dashboard');
        } else {
            setLoading(false)
        }
    }, []);
    if (loading === true) {
        return <div className="flex flex-row justify-center items-center"><h1>Loading...</h1></div>
    } else {
        return <>{children}</>;
    }
};

export default IsAuthenticated;
