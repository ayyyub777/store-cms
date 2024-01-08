"use client";

import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";

import { columns, CategoryColumn } from "./columns";
import { PlusIcon } from "lucide-react";

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
            <PlusIcon className="mr-2 h-4 w-4" />
            Add new
          </Button>
        }
      />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
