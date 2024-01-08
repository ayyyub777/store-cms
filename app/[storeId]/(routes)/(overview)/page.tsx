import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const session = await getServerSession();
  return;
};
export default DashboardPage;
