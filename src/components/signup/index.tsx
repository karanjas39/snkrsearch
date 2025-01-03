"use client";

import Logo from "@/components/logo";
import { z_signup, z_signup_type } from "@/types";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/ui/passwordInput";
import DividerHeading from "@/components/ui/divider-heading";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import { format, parseISO } from "date-fns";
import { default as axios } from "axios";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z_signup_type>({
    resolver: zodResolver(z_signup),
    defaultValues: {
      email: "",
      password: "",
      confirmedPassword: "",
      name: "",
    },
  });
  const { toast } = useToast();

  async function onSubmit(formData: z_signup_type) {
    try {
      setLoading(true);

      const { data } = await axios
        .post("/api/signup", formData, {
          headers: { "Content-Type": "application/json" },
        })

        .catch((error) => {
          throw new Error(error as string);
        });

      if (data?.error) {
        throw new Error(data.error);
      }

      toast({
        description: "Your account has been created successfully.",
      });

      await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/dashboard/profile",
      });
    } catch (error) {
      const err = error as Error;
      console.error(err.message);
      toast({
        description: err.message ?? "Failed to signup right now.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="md:rounded-tr-3xl md:rounded-br-3xl sm:rounded-none rounded-3xl shadow-xl flex flex-col items-center justify-center md:p-0 p-6 md:py-8 py-5">
      <div className="flex flex-col gap-2">
        <h2 className="flex items-center gap-2 md:text-4xl text-2xl">
          Join <Logo color="text-primary" /> Today!!
        </h2>
        <p className="md:text-base text-md">
          Sign up to get started with your journey.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:w-[70%] w-[95%] flex flex-col gap-4 mt-10"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="James Miller" {...field} />
                </FormControl>
                <FormDescription>
                  Enter your full name as per your official documents.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
                  Enter your email address to get started.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <PasswordInput
                field={field}
                description="Set your account password."
              />
            )}
          />
          <FormField
            control={form.control}
            name="confirmedPassword"
            render={({ field }) => (
              <PasswordInput
                field={field}
                label="Confirm Password"
                description="Confirm the entered password."
              />
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Rather not say</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Please select the option that best represents you.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Date of Birth"
                    type="date"
                    value={
                      field.value
                        ? format(parseISO(`${field.value}`), "yyyy-MM-dd")
                        : ""
                    }
                    max={new Date().toISOString().split("T")[0]}
                    onChange={(e) => {
                      const dateString = e.target.value;
                      if (dateString) {
                        const [year, month, day] = dateString.split("-");
                        const isoDate = new Date(
                          `${year}-${month}-${day}T00:00:00Z`
                        ).toISOString();
                        field.onChange(isoDate);
                      } else {
                        field.onChange(undefined);
                      }
                    }}
                  />
                </FormControl>
                <FormDescription>Enter your date of birth.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" isLoading={loading}>
            Submit
          </Button>
        </form>
      </Form>
      <DividerHeading text="OR" classes="w-[70%] my-4" />
      <p className="text-sm">
        Already have an account?{" "}
        <span
          className="text-primary font-bold cursor-pointer"
          onClick={() => signIn()}
        >
          Sign In Now{" "}
        </span>
      </p>
    </div>
  );
}

export default SignUp;
