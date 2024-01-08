"use client";

import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";

import { columns, SizeColumn } from "./columns";
import { PlusIcon } from "lucide-react";

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
            <PlusIcon className="mr-2 h-4 w-4" />
            Add new
          </Button>
        }
      />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
