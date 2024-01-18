"use client";

import React, { useState, useEffect } from 'react'
import { userSelector } from '@/reduxfeatures/userSlice';
import { itemSelector } from "@/reduxfeatures/itemSlice";
import { shippingSelector } from '@/reduxfeatures/ShippingAdress';
import { useAppSelector, useAppDispatch } from "@/redux/storehook";
import { UserData, Shipping } from "@/typings";
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button, buttonVariants } from "@/components/ui/button"
import { Form, FormControl, FormField, 
  FormItem, FormMessage, } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { updateShipping } from '@/reduxfeatures/ShippingAdress';
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';


const ShippingAddress = () => {

  const dispatch = useAppDispatch();

  const LoggedInUser = useAppSelector(userSelector);
  const items = useAppSelector(itemSelector);
  const StoredAddress = useAppSelector(shippingSelector);
  const [user, setUser] = useState<UserData>();
  const [address, setAddress] = useState<Shipping>();
  const [countryid, setCountryid] = useState<number>(0);
  const [stateid, setstateid] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);
  const router = useRouter();
  
  useEffect(() => {
    setUser(LoggedInUser);
    setAddress(StoredAddress);
    //console.log(LoggedInUser);
  }, [LoggedInUser, StoredAddress])



  const shippingFormSchema = z.object({
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
    phone: z.string({
      required_error: "Phone Number is required",
      invalid_type_error: "Phone Number must be only numbers",
    }).length(11, {
        message: "Phone Number must be 11 digits.",
    }),
    address: z.string({
        required_error: "Address is required",
        invalid_type_error: "Address must be on word of alphabets",
    }).min(20, {
      message: "Address must be at least 20 characters.",
    }),
    city: z.string({
      required_error: "City is required",
      invalid_type_error: "City must be on word of alphabets",
    }),
    state: z.string({
      required_error: "State is required",
      invalid_type_error: "State must be on word of alphabets",
    }),
    postal_code: z.string({
      required_error: "Postal Code is required",
      invalid_type_error: "Postal Code must be on word of alphabets or Numbers",
    }).min(6, {
      message: "Postal Code must be at least 5 characters.",
    }),
    country: z.string({
      required_error: "Country is required",
      invalid_type_error: "Address must be on word of alphabets",
    })
  })

  const requiredForm = shippingFormSchema.required();

  const form = useForm<z.infer<typeof requiredForm>>({
    resolver: zodResolver(requiredForm),
    defaultValues: {
        firstname: address?.firstname ?? "",
        lastname: "",
        country: "",
        phone: "",
        address: "",
        state: "",
        city: "",
        postal_code: "",
    },
  })

   // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof requiredForm>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const body : Shipping = {
      firstname: values.firstname,
      lastname: values.lastname,
      phone: values.phone,
      address: values.address,
      country: values.country,
      state: values.state,
      city: values.city,
      postal_code: values.postal_code
    }

    if (user?.isLoggedIn === "true") {
      dispatch(updateShipping(body));
      router.push('/payment');
    } else {
      router.push('/login');
    }

  }

  useEffect(() => {
    if (user?.isLoggedIn === "true") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [user?.isLoggedIn])
  



  return (
    <div className="flex flex-col space-y-7 items-center w-full justify-center py-10">
      <div className="flex flex-col space-y-10 items-center w-full justify-center">
        <h2 className="font-bold self-start text-2xl">Checkout</h2>
        {
          user?.isLoggedIn === "true" ?  
          (
            <div className='flex flex-col w-full space-y-5 items-center'>
              <h3 className='text-lg text-gray-800 font-semibold self-start'>Contact Information</h3>
              <Input disabled type="email" placeholder={`${user?.firstname} ${user?.lastname}`} className='font-semibold text-gray-700 text-xl w-full h-12' />
            </div>
          ) : 
          (
            <div className='flex flex-col w-full space-y-5 items-center'>
              <div className='flex justify-between w-full'>
                <h3 className='text-lg text-gray-800 dark:text-white font-semibold'>Contact Information</h3>
                <h3 className='text-sm text-gray-600 dark:text-white font-semibold'>Already have an account? <Link href={'/login'} className=' text-primary underline'>Log In</Link></h3>
              </div>
              <Input disabled type="email" placeholder={`Email`} className='font-semibold text-gray-700 text-xl w-full h-12'/>
            </div>
          )
        } 
      </div>

      <div className='flex flex-col space-y-7 w-full '>
        <h3 className='text-lg text-gray-800 dark:text-white font-semibold'>Shipping address</h3>
        <div className="items-center flex w-full">
          {/* shadcn form component here */}
          <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full space-y-7">
                <div className="flex space-x-10 w-full items-center">
                  <div className='w-full'>
                    <FormField
                      control={form.control}
                      name="firstname"
                      disabled={disabled}
                      render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="grid w-full items-center gap-3">
                            <Label htmlFor="firstname">FirstName</Label>
                            <Input className="border-black border-2 w-full h-12" type="text" id="firstname" {...field}/>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      )}
                    />
                  </div>

                  <div className='w-full'>
                    <FormField
                      control={form.control}
                      name="lastname"
                      disabled={disabled}
                      render={({ field }) => (
                      <FormItem>
                          <FormControl>
                            <div className="grid w-full items-center gap-3">
                              <Label htmlFor="lastname">LastName</Label>
                              <Input className="border-black border-2 w-full h-12" type="text" id="lastname" {...field}/>
                            </div>
                          </FormControl>
                          <FormMessage />
                      </FormItem>
                      )}
                    />
                  </div>
                </div>
                  <FormField
                    control={form.control}
                    name="address"
                    disabled={disabled}
                    render={({ field }) => (
                    <FormItem>
                        <FormControl>
                          <div className="grid w-full place-self-start gap-3">
                            <Label htmlFor="email">Address</Label>
                            <Input className="border-black border-2 h-12" type="text" id="address" {...field}/>
                          </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                  />
                <div className="flex space-x-10 w-full items-center">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                    <FormItem>
                        <FormControl>
                          <div className="grid w-full place-self-start gap-3">
                            <Label htmlFor="country">Country</Label>
                            <CountrySelect
                              onChange={(e: any) => {
                                setCountryid(e.id);
                                form.setValue('country', e.name);
                              }}
                              placeHolder="Select Country"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                    <FormItem>
                        <FormControl>
                          <div className="grid w-full place-self-start gap-3">
                            <Label htmlFor="password">State</Label>
                            <StateSelect
                              countryid={countryid}
                              onChange={(e: any) => {
                                setstateid(e.id);
                                form.setValue('state', e.name);
                              }}
                              placeHolder="Select State"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                    <FormItem>
                        <FormControl>
                          <div className="grid w-full place-self-start gap-3">
                            <Label htmlFor="password">City</Label>
                            <CitySelect
                              countryid={countryid}
                              stateid={stateid}
                              onChange={(e: any) => {
                                //console.log(e);
                                form.setValue('city', e.name);
                              }}
                              placeHolder="Select City"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  disabled={disabled}
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
                  name="postal_code"
                  disabled={disabled}
                  render={({ field }) => (
                  <FormItem>
                      <FormControl>
                      <div className="grid w-full place-self-start gap-3">
                          <Label htmlFor="address">Postal Code</Label>
                          <Input className="border-black border-2 h-12" type="text" id="postal_code" {...field} />
                      </div>
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                  )}
                />
                {
                  user?.isLoggedIn === "true" &&
                  (
                    <Button disabled={disabled} className={cn(buttonVariants({variant: 'default'}), "text-2xl h-12 self-end w-60 rounded-full", disabled ? "bg-gray-300": "default" )}  type="submit">Continue</Button>
                  )
                }
              </form>
          </Form>

        </div>
      </div>
    </div>
  )
}

export default ShippingAddress