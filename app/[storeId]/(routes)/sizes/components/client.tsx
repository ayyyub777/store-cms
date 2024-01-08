"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";

import { columns, SizeColumn } from "./columns";
import { PlusCircledIcon } from "@radix-ui/react-icons";

interface SizesClientProps {
  data: SizeColumn[];
}

export const SizesClient: React.FC<SizesClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <Heading
        title="Sizes"
        description="Manage sizes for your store"
        ActionButton={
          <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Add new
          </Button>
        }
      />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
