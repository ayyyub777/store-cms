"use client";

import axios from "axios";
import * as z from "zod";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
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
import { Icons } from "../icons";
import { toast } from "../ui/use-toast";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(20, {
      message: "Username must not be more than 20 characters long.",
    }),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const res = await axios.post("/api/stores", values);

      if (res?.data?.id) {
        window.location.assign(`/${res.data.id}`);
        toast({
          title: "Store was created successfully.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Modal
      title="Create store"
      description="Add your first store to begin"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Store name</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Enter store name"
                    {...field}
                  />
                </FormControl>
                <FormDescription>A store name is required.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              disabled={isLoading}
              variant="outline"
              onClick={() => {
                storeModal.onClose();
              }}
            >
              Cancel
            </Button>
            <Button disabled={isLoading} type="submit">
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
