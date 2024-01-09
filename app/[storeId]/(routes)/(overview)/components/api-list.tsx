"use client";

import { useParams } from "next/navigation";

import { useOrigin } from "@/hooks/use-origin";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ApiItem } from "./api-item";

interface ApiListProps {
  entityName: string;
  entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
  entityName,
  entityIdName,
}) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            {entityName.charAt(0).toUpperCase() + entityName.slice(1)}
          </CardTitle>
          <CardDescription>
            API endpoints for the {entityName} route.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ApiItem title="GET" description={`${baseUrl}/${entityName}`} />
          <ApiItem
            title="GET"
            description={`${baseUrl}/${entityName}/{${entityIdName}}`}
          />
          <ApiItem title="POST" description={`${baseUrl}/${entityName}`} />
          <ApiItem
            title="PATCH"
            description={`${baseUrl}/${entityName}/{${entityIdName}}`}
          />
          <ApiItem
            title="DELETE"
            description={`${baseUrl}/${entityName}/{${entityIdName}}`}
          />
        </CardContent>
      </Card>
    </>
  );
};
