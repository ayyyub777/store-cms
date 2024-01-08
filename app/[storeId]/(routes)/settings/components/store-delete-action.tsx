"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

import { AlertModal } from "@/components/modals/alert-modal";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export default function StoreDeleteAction() {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/stores/${params.storeId}`);
      router.refresh();
      router.push("/");
      toast({
        title: "Store was deleted successfully.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Make sure you removed all products and categories first.",
      });
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <div className="text-base">Delete store</div>
              <div className="text-sm">This action cannot be undone</div>
            </div>
            <div>
              <Button variant="destructive" onClick={() => setOpen(true)}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
