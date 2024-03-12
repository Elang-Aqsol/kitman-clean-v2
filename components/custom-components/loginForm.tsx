"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Logo from "@/public/kitman-clean-logo.jpg";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function CardLogin() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Your account details:",
      description: `Username: ${values.username}, Password: ${values.password}`,
    });
  }
  return (
    <Card className="max-w-full w-[340px]">
      <CardHeader className="flex-row gap-3">
        <Image
          alt="Kitman Clean Logo"
          height={60}
          className="rounded-sm"
          src={Logo}
          width={60}
        />
        <div className="flex flex-col">
          <p className="text-md font-semibold">Kitman Clean</p>
          <p className="text-small text-default-500">@kitman.clean</p>
        </div>
      </CardHeader>
      <CardContent className="overflow-hidden">
        <h1 className="text-center text-2xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-center mb-5">Sign in below to access dashboard</p>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex gap-4 flex-col flex-1 justify-between"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl className="flex flex-col">
                      <Input
                        type="text"
                        className="sm"
                        placeholder="Username"
                        {...field}
                      />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl className="flex flex-col">
                      <Input
                        type="password"
                        className="sm"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="flex bg-green-500 gap-4 w-full my-4 hover:bg-green-700"
                type="submit"
              >
                Sign In
              </Button>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}
