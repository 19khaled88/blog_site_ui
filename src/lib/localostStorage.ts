
import config from "../helpers/config"
const key_name = 'post_blog_storage'
export const setLocalstorage=async(token:string)=>{
    try {
        const ifExist =await getFromLocalstorage(key_name)
        if(ifExist === null && token != null){
            localStorage.setItem(key_name,JSON.stringify(token))
            return {
                message:'set successful',
                success:true
            }
        }else{
            return {
                message:'already exist',
                success:true
            }
        }
    } catch (error) {
        return {
            message:error,
            success:false
        }
    }
   
}

export const getFromLocalstorage=async(key:string)=>{
    if(key != null){
       return localStorage.getItem(key)
    }else{
        return null
    }
}

export const removeLocalStorage=async(key:string)=>{
    try {
       if(key != null || key !=undefined){
        localStorage.removeItem(key)
        return {
            success:true
        }
       }else{
        return{
            success:false
        }
       }
    } catch (error) {
        return{
            success:false
        }
    }
}