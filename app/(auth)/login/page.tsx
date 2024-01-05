"use client";
import Image from 'next/image';
import GoogleImage from '@/public/google.jpg';
import FacebookImage from '@/public/facebook.jpg';
import AppleImage from '@/public/apple.jpg';
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
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { useState } from 'react';
// import { Circles } from 'react-loader-spinner'
import { UserResponse, UserData } from '@/typings';
import { useAppDispatch, useAppSelector } from '@/redux/storehook';
import { updateUser,userSelector } from '@/reduxfeatures/userSlice';

const loginFormSchema = z.object({
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Email must be contain @ and .",
  }).email({
    message: "Email must contain @ and .",
  }),
  password: z.string(),
})

const requiredForm = loginFormSchema.required();

type LoginUser = {
  email: string
  password: string
}

{/* <Circles
  height="80"
  width="80"
  color="#FF8C00"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  /> */}

const Login = () => {

  const router = useRouter()

  const { toast } = useToast()

  const selectedUsers = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const [disabled, setDisabled] = useState<boolean>(false)
  const [LoggedIn, setIslogged] = useState<boolean>(false)

  const GoogleOauth = () => {
      console.log('Google OAuth')
  }

  // 1. Define your form.
  const form = useForm<z.infer<typeof requiredForm>>({
    resolver: zodResolver(requiredForm),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof requiredForm>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.

      const body : LoginUser = {
        email: values.email,
        password: values.password
      }

      //console.log("BODY>>>",body);
      
      try {

          const loginResponse = await axios.post("http://127.0.0.1:8000/auth/login", body);
          setDisabled(true);
        
          if (loginResponse.data.statusCode === 200) {
            setIslogged(true);
            const data: UserResponse = loginResponse.data
            console.log("DATA>>>", data);
            dispatch(updateUser(data.data));
            router.push(`/`);
            form.reset();
          } else {
              toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
              })
              form.reset();
          }
      } catch (error : any) {
          //console.log("ERROR>>>", error.response.data)
          const errorBody = error.response.data;
          toast({
            variant: "destructive",
            title: `${errorBody.message}`,
            // description: `${errorBody.Error}`,
            action: <ToastAction altText="Try again">Try again</ToastAction>,
            //form.reset();
          })
      }
    }

    // localStorage.setItem("isloggedIn", LoggedIn?.toString() ?? "");


  return (
    <MaxWidthWrapper>
      <div className="w-full py-10">
        <div className="flex items-center justify-end">
          <Link className="text-xl no-underline hover:underline text-orange-700 dark:text-orange-500" href='/survey'>Tell us what you think</Link>
        </div>

        <div className="flex items-center justify-center w-full mb-20">
          <div className="flex w-full flex-col space-y-10 items-center">
              <h3 className="font-bold text-4xl">Hello</h3>
              <p className='text-xl'>Sign in to Ra'Nkan or <span><Link className="no-underline hover:underline text-orange-700 dark:text-orange-500" href="/register">create an account</Link></span></p>
              <div className="flex flex-row items-center space-x-28 w-full">

                <div className="items-center flex w-full">
                    {/* shadcn form component here */}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full space-y-7">
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
                                  <div className="grid w-full place-self-start gap-3">
                                    <Label htmlFor="password">Password</Label>
                                    <Input className="border-black border-2 h-12" type="password" id="password" {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                          />
                          <Button 
                            disabled={disabled} 
                            className={cn(buttonVariants({variant: 'default'}), 
                              "text-2xl h-14 rounded-full", disabled ? "bg-gray-300": null)}  
                            type="submit">Login</Button>
                        </form>
                    </Form>

                </div>

                <div className="relative">
                    {/* the vertival line here */}
                    <hr className="h-[400px] w-[1px] border-[1px] border-gray-700"/>
                    <div className="absolute top-40 -right-4 h-8 w-8 border rounded-full flex items-center justify-center bg-slate-100 dark:bg-black">
                        <p className="text-xl dark:text-slate-50">or</p>
                    </div>
                </div>
                    
                <div className="w-full flex flex-col space-y-10">
                    {/* continue with Oauth here */}
                    <div className='relative'>
                        <button className="text-2xl font-bold h-16 w-96 border-black border-2 rounded-full" onClick={GoogleOauth}>Continue with Google</button>
                        <div className="absolute top-2 right-30">
                            <Image src={GoogleImage} height={50} width={50} alt='google_image'/>
                        </div>
                    </div>

                    <div className='relative'>
                        <button className="text-2xl text-slate-100 font-bold h-16 w-96 border-black border-2 rounded-full bg-blue-600" onClick={GoogleOauth}>Continue with Facebook</button>
                        <div className="absolute -top-3 -left-8">
                            <Image src={FacebookImage} height={120} width={120} alt='facebook_image'/>
                        </div>
                    </div>

                    <div className='relative'>
                        <button className="text-2xl font-bold h-16 w-96 border-black border-2 rounded-full" onClick={GoogleOauth}>Continue with Apple</button>
                        <div className="absolute top-1 -left-4">
                            <Image className="invert-0 dark:invert" src={AppleImage} height={100} width={100} alt='apple_image'/>
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

export default Login 