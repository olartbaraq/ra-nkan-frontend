"use client";

import { MaxWidthWrapper } from "@/other-components";
import Link from "next/link";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button, buttonVariants } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, 
    FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import axios, { AxiosRequestConfig } from 'axios'
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"


const registerFormSchema = z.object({
    firstname: z.string({
        required_error: "FirstName is required",
        invalid_type_error: "FirstName must be on word of alphabets",
    }).min(2, {
        message: "Firstname must be at least 2 characters.",
    }).max(50, {
        message: "Firstname must be not exit 50 characters.",
    }),
    lastname: z.string({
        required_error: "LastName is required",
        invalid_type_error: "LastName must be on word of alphabets",
    }).min(2, {
        message: "Lastname must be at least 2 characters.",
    }).max(50, {
        message: "Lastname must be not exit 50 characters.",
    }),
    email: z.coerce.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be contain @ and .",
    }).email(),
    phone: z.coerce.string({
        required_error: "Phone Number is required",
        invalid_type_error: "Phone Number must be only numbers",
    }).length(11, {
        message: "Mobile Number must be 11 characters.",
    }),
    address: z.string({
        required_error: "Address is required",
        invalid_type_error: "Address must be on word of alphabets",
    }).min(20, {
        message: "Address must be at least 20 characters.",
    }),
    password: z.string().min(8),
})

type RegisterUser = {
    email: string
    firstName: string
    lastName: string
    phone: string
    address: string
    password: string
}

const Register = () => {

    const router = useRouter()

    const { toast } = useToast()

    // 1. Define your form.
    const form = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            address: "",
            password: "",
        },
    })

     // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof registerFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const url = `${process.env.REGISTER_URL}`

        const body : RegisterUser = {
            firstName: values.firstname,
            email: values.email,
            lastName: values.lastname,
            phone: values.phone,
            address: values.address,
            password: values.password
        }
        
        try {

            const registerResponse = await axios.post(url, body);
            if (registerResponse.status === 201) {
                const data = registerResponse.data
                console.log(data);
                toast({
                    description: "Registration Successful.",
                })
                router.push(`/login`);
                form.reset();
            }
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })

            // const options: RequestInit = {
            //     method: 'GET',
            //     headers: {
            //         accept: 'application/json',
            //     },
            //     next:{
            //         revalidate: 60 * 60 * 24
            //     }
            // }

            // const searchResponse = await fetch(url, options)
            // const data = await searchResponse.json();
            // console.log(data);
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <MaxWidthWrapper>

        <div className="w-full min-h-max py-10">
            <div className="flex items-center justify-end">
                <h2 className="text-xl">Already a member? <span><Link className="no-underline hover:underline text-orange-700 dark:text-orange-500" href="/login">Sign In</Link></span></h2>
            </div>

            <div className="flex items-center justify-center w-full mb-20">
                <div className="flex flex-col space-y-10 items-center">
                    <h3 className="font-bold text-4xl">Create an account</h3>
                    <div className="flex space-x-28 items-center justify-between w-full">
                        <div className="items-center flex w-full">
                            {/* shadcn form component here */}
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col min-w-max space-y-7">
                                    <div className="flex space-x-10 items-center">
                                        <FormField
                                            control={form.control}
                                            name="firstname"
                                            render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                <div className="grid w-full max-w-sm items-center gap-3">
                                                    <Label htmlFor="firstname">FirstName</Label>
                                                    <Input className="border-black border-2 h-12" type="text" id="firstname" {...field}/>
                                                </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="lastname"
                                            render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                <div className="grid w-full max-w-sm items-center gap-3">
                                                    <Label htmlFor="lastname">LastName</Label>
                                                    <Input className="border-black border-2 h-12" type="text" id="lastname" {...field}/>
                                                </div>
                                                {/* <Input type="text"{...field} /> */}
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                            )}
                                        />
                                    </div>
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                <div className="grid w-full place-self-start gap-3">
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input className="border-black border-2 h-12" type="email" id="email" {...field} />
                                                </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <div>
                                                        <div className="grid w-full place-self-start gap-3">
                                                            <Label htmlFor="password">Password</Label>
                                                            <Input className="border-black border-2 h-12" type="password" id="password" {...field} />
                                                        </div>

                                                        <div className="flex flex-col space-y-2 items-start px-2">
                                                            <p>Password must be minimum of 8 characters</p>
                                                            <p>Password must be contain at least a number</p>
                                                            <p>Password must be contain at least a symbol</p>
                                                            <p>Password must be contain an upper case letter</p>
                                                            <p>Password must be contain a lower case letter</p>
                                                        </div>
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                <div className="grid w-full place-self-start gap-3">
                                                    <Label htmlFor="phone">Phone Number</Label>
                                                    <Input className="border-black border-2 h-12" type="text" id="number" {...field} />
                                                </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="address"
                                            render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                <div className="grid w-full place-self-start gap-3">
                                                    <Label htmlFor="address">Address</Label>
                                                    <Input className="border-black border-2 h-12" type="text" id="address" {...field} />
                                                </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                            )}
                                        />
                                    <Button className={cn(buttonVariants({variant: 'default'}), "text-2xl h-14 rounded-full")}  type="submit">Create account</Button>
                                </form>
                            </Form>

                        </div>

                        <div className="relative">
                            {/* the vertival line here */}
                            <hr className="h-[800px] w-[1px] border-[1px] border-gray-700"/>
                            <div className="absolute top-96 -right-4 h-8 w-8 border rounded-full flex items-center justify-center bg-slate-100">
                                <p className="text-xl">or</p>
                            </div>
                        </div>
                            
                        <div className="relative w-full flex flex-col space-y-10">
                            {/* continue with Oauth here */}
                            <div>
                                <Button className={cn(buttonVariants({variant: 'ghost'}), "text-2xl h-14 rounded-full")}  onClick={GoogleOauth}>Continue with Google</Button>
                                <div className="absolute top-72 right-4">
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </MaxWidthWrapper>
  )
}

export default Register