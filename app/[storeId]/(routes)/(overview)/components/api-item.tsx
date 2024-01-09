import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

interface ApiItemProps {
  title: string;
  description: string;
}

export const ApiItem: React.FC<ApiItemProps> = ({ title, description }) => {
  const onCopy = (description: string) => {
    navigator.clipboard.writeText(description);
    toast({ title: "API Route copied to clipboard." });
  };

  return (
    <>
      <div className="mb-4">
        <p className="text-xs font-medium mb-2">{title}</p>
        <div className="flex space-x-2">
          <Input value={description} readOnly />
          <Button
            variant="outline"
            className="shrink-0"
            onClick={() => onCopy(description)}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};
