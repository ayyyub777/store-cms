"use client";

import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";

import { columns, CategoryColumn } from "./columns";
import { PlusCircledIcon } from "@radix-ui/react-icons";

interface CategoryClientProps {
  data: CategoryColumn[];
}

export const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <Heading
        title="Categories"
        description="Manage categories for your store"
        ActionButton={
          <Button
            onClick={() => router.push(`/${params.storeId}/categories/new`)}
          >
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Add new
          </Button>
        }
      />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
