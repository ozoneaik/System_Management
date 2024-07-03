import axiosClient from "@/axios";

export const  SignUpApi = async (name,email,password,onPassed) => {
    await axiosClient.post('auth/signup',{
        name,
        password,
        email
    }).then(({data,status}) => {
        onPassed(data.message,status)
    }).catch((error) => {
        onPassed(error.response.data.message,error.status)
    });
}