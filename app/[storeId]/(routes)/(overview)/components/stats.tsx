import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Stats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Featured Products
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Billboards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">6</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Stats;
