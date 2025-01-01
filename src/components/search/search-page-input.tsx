"use client";

import React, { useCallback, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  query: z.string().min(4, {
    message: "Sneaker name must be at least 4 characters.",
  }),
});

const SearchPageInput = ({ query }: { query: string }) => {
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      query,
    },
  });

  const updateURL = useCallback(
    (searchQuery: string) => {
      const newURL =
        searchQuery.length >= 4
          ? `/search/${encodeURIComponent(searchQuery)}`
          : "/search";
      router.push(newURL, { scroll: false });
    },
    [router]
  );

  const performSearch = useCallback(
    (searchQuery: string) => {
      if (searchQuery.length >= 4) {
        updateURL(searchQuery);
        // Add your actual search logic here
      }
    },
    [updateURL]
  );

  const debouncedSearch = useCallback(
    (value: string) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        performSearch(value);
      }, 700);
    },
    [performSearch]
  );

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    performSearch(data.query);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full my-3">
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Write your sneaker here..."
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    debouncedSearch(e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchPageInput;
