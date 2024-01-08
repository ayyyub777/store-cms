import { Separator } from "@/components/ui/separator";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Settings</h2>
          <p className="text-sm text-muted-foreground">
            Top picks for you. Updated daily.
          </p>
        </div>
      </div>
      <Separator className="mt-4 mb-8" />
      {children}
    </>
  );
}
