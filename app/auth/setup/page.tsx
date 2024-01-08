import Link from "next/link";
import { StoreForm } from "./components/store-form";

export default function SetupPage() {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Give your first store a name
        </h1>
        <p className="text-md text-muted-foreground">
          Enter your store name below to start
        </p>
      </div>
      <StoreForm />
    </>
  );
}
