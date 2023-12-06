import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getFromLocalstorage } from '@/lib/localostStorage';
const key_name = 'post_blog_storage'
 // Make sure to replace this with the actual package you are using

interface IsAuthProps<T> {
    component: React.ComponentType<T>;
}

const IsAuth = <T extends {}>({ component: Component, ...props }: IsAuthProps<T>) => {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const token =  getFromLocalstorage(key_name);

            if (!token) {
                router.push('/authentication/login');
            }
        };

        checkAuth();
    }, [router]);

    // return <Component {...props} />;
};

export default IsAuth;