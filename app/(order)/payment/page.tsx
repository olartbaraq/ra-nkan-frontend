"use client";
import { MaxWidthWrapper, PaymentInformation, PaymentHandler } from "@/other-components"
import React, { useState, useEffect } from 'react'
import { userSelector } from '@/reduxfeatures/userSlice';
import { useAppSelector } from "@/redux/storehook";
import { UserData } from "@/typings";
import { useRouter } from "next/navigation";

const Payment = () => {

  const LoggedInUser = useAppSelector(userSelector);
  const [user, setUser] = useState<UserData>();
  const router = useRouter();

  useEffect(() => {
    if (user?.isLoggedIn != "true") {
      router.replace('/login');
    }
  }, [user?.isLoggedIn])
  
  return (
    <MaxWidthWrapper>
      <div className='flex w-full justify-between gap-32 items-start'>
        <PaymentHandler />
        <PaymentInformation />
      </div>
    </MaxWidthWrapper>
  )
}

export default Payment