import {
  getBillboardsCount,
  getCategoriesCount,
  getFeaturedProductsCount,
  getProductsCount,
} from "@/actions/getStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsProps {
  params: {
    storeId: string;
  };
}

const Stats: React.FC<StatsProps> = async ({ params }) => {
  const productsCount = await getProductsCount(params.storeId);
  const featuredProductsCount = await getFeaturedProductsCount(params.storeId);
  const billboardsCount = await getBillboardsCount(params.storeId);
  const categoriesCount = await getCategoriesCount(params.storeId);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{productsCount}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Featured Products
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{featuredProductsCount}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Billboards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{billboardsCount}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{categoriesCount}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Stats;
