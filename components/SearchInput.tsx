"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button, buttonVariants } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, 
    FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import axios, { AxiosRequestConfig } from 'axios'
import { SearchResult } from "@/typings"


const formSchema = z.object({
    input: z.string().min(2, {
        message: "search item must be at least 2 characters.",
    }),
})


const SearchInput = () => {

    const router = useRouter()

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: "",
        },
    })

  // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const url = `http://127.0.0.1:8000/products/get_products_by_name?name=${values.input}`
        
        try {

            // const searchResponse = await axios.get(url);
            // if (searchResponse.status === 200) {
            //     const data = searchResponse.data as SearchResult
            //     console.log(data.search);
            // }

            const options: RequestInit = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
                next:{
                    revalidate: 60 * 60 * 24
                }
            }

            const searchResponse = await fetch(url, options)
            const data = await searchResponse.json();
            console.log(data);
        } catch (error) {
            console.log(error)
        }
        //console.log(values.input)
        router.push(`/search/${values.input}`)
        form.reset()
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex min-w-max items-center space-x-7">
            <FormField
                control={form.control}
                name="input"
                render={({ field }) => (
                <FormItem>
                    <FormControl>
                    <Input className="h-11 w-60 lg:min-w-96 2xl:w-[1000px]" placeholder="Search for anything..." {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <Button className={cn(buttonVariants({variant: 'default', size: "lg"}))}  type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default SearchInput