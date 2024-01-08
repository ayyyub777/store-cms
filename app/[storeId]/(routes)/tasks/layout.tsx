import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { PlusCircledIcon } from "@radix-ui/react-icons";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Heading
        title="All Tasks"
        description="Top picks for you. Updated daily."
        ActionButton={
          <Button>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Add task
          </Button>
        }
      />
      {children}
    </>
  );
}
