"use client";

import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";

import { columns, ProductColumn } from "./columns";
import { PlusIcon } from "lucide-react";

interface ProductsClientProps {
  data: ProductColumn[];
}

export const ProductsClient: React.FC<ProductsClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <Heading
        title="Products"
        description="Manage products for your store"
        ActionButton={
          <Button
            onClick={() => router.push(`/${params.storeId}/products/new`)}
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
