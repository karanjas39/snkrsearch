"use client";

import Logo from "@/components/logo";
import { z_signin, z_signin_type } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/ui/passwordInput";
import DividerHeading from "@/components/ui/divider-heading";
import Link from "next/link";

function SignIn() {
  const form = useForm<z_signin_type>({
    resolver: zodResolver(z_signin),
    defaultValues: { email: "", password: "" },
  });

  function onSubmit(values: z_signin_type) {
    console.log(values);
  }

  return (
    <div className="md:rounded-tl-3xl md:rounded-bl-3xl sm:rounded-none rounded-3xl shadow-xl flex flex-col items-center justify-center md:p-0 p-6">
      <div className="flex flex-col gap-2">
        <h2 className="flex items-center gap-2 md:text-4xl text-2xl">
          Welcome to <Logo color="text-primary" />
        </h2>
        <p className="md:text-base text-md">
          Sign in to start exploring the world of sneakers.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:w-[70%] w-[95%] flex flex-col gap-4 mt-10"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="abc@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the email address associated with your account.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => <PasswordInput field={field} />}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <DividerHeading text="OR" classes="w-[70%] my-4" />
      <p className="text-sm">
        New on our platform?{" "}
        <span className="text-primary font-bold">
          <Link href="/signup">Create an account</Link>
        </span>
      </p>
    </div>
  );
}

export default SignIn;