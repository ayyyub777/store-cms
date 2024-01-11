import prisma from "@/lib/prisma";

export const getProductsCount = async (storeId: string) => {
  const productsCount = await prisma.product.count({
    where: {
      storeId,
    },
  });
  return productsCount;
};

export const getFeaturedProductsCount = async (storeId: string) => {
  const featuredProductsCount = await prisma.product.count({
    where: {
      storeId,
      isFeatured: true,
    },
  });
  return featuredProductsCount;
};

export const getBillboardsCount = async (storeId: string) => {
  const billboardsCount = await prisma.billboard.count({
    where: {
      storeId,
    },
  });
  return billboardsCount;
};

export const getCategoriesCount = async (storeId: string) => {
  const categoriesCount = await prisma.category.count({
    where: {
      storeId,
    },
  });
  return categoriesCount;
};
