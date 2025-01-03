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
import { useToast } from "@/hooks/use-toast";
import { format, parseISO } from "date-fns";
import { z_editProfile, z_editProfile_type } from "@/types";
import { userApi } from "@/store/api/user-api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function EditProfileForm({ data }: { data: any }) {
  const form = useForm<z_editProfile_type>({
    resolver: zodResolver(z_editProfile),
    defaultValues: {
      email: data.email,
      name: data.name,
      dob: data.dob,
      gender: data.gender,
    },
  });
  const { toast } = useToast();
  const [updateUser, { isLoading }] =
    userApi.endpoints.updateUserDetails.useMutation();

  async function onSubmit(formData: z_editProfile_type) {
    try {
      await updateUser(formData);
      toast({
        description: "Profile updated successfully.",
      });
    } catch (error) {
      const err = error as Error;
      console.error(err.message);
      toast({
        description: err.message ?? "Failed to edit profile right now.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
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
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
        <Button type="submit" isLoading={isLoading}>
          Update Details
        </Button>
      </form>
    </Form>
  );
}

export default EditProfileForm;
