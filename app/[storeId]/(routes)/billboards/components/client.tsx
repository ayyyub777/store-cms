"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

import { columns, BillboardColumn } from "./columns";
import { PlusCircledIcon } from "@radix-ui/react-icons";

interface BillboardClientProps {
  data: BillboardColumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <Heading
        title="Billboards"
        description="Manage billboards for your store"
        ActionButton={
          <Button
            onClick={() => router.push(`/${params.storeId}/billboards/new`)}
          >
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Add new
          </Button>
        }
      />
      <DataTable searchKey="label" columns={columns} data={data} />
    </>
  );
};
