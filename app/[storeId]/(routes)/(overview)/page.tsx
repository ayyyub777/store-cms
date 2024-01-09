import { ApiList } from "./components/api-list";
import Stats from "./components/stats";

const DashboardPage = async () => {
  return (
    <>
      <Stats />
      <div className="grid gap-4 mt-4">
        <ApiList entityName="products" entityIdName="productId" />
        <ApiList entityName="billboards" entityIdName="billboardId" />
        <ApiList entityName="categories" entityIdName="categoryId" />
        <ApiList entityName="colors" entityIdName="colorId" />
        <ApiList entityName="sizes" entityIdName="sizeId" />
      </div>
    </>
  );
};
export default DashboardPage;
