"use server"
export const loginAction = async(,formData: FormData)=>{
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`,{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    const result = await res.json()
    console.log(result)
    return result
}



