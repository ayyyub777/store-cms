"use client";

import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  Package2,
  Palette,
  PanelTop,
  PercentSquare,
  ScanLine,
  Settings,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

interface Route {
  href: string;
  label: string;
  active: boolean;
  icon?: JSX.Element;
}

export const Routes = () => {
  const pathname = usePathname();
  const params = useParams();

  const routes: Route[] = [
    {
      href: `/${params.storeId}`,
      label: "Overview",
      active: pathname === `/${params.storeId}`,
      icon: <LayoutGrid className="h-4 w-4 mr-2" />,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Billboards",
      active: pathname.includes(`/${params.storeId}/billboards`),
      icon: <PanelTop className="h-4 w-4 mr-2" />,
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Categories",
      active: pathname.includes(`/${params.storeId}/categories`),
      icon: <Tag className="h-4 w-4 mr-2" />,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: "Sizes",
      active: pathname.includes(`/${params.storeId}/sizes`),
      icon: <PercentSquare className="h-4 w-4 mr-2" />,
    },
    {
      href: `/${params.storeId}/colors`,
      label: "Colors",
      active: pathname.includes(`/${params.storeId}/colors`),
      icon: <Palette className="h-4 w-4 mr-2" />,
    },
    {
      href: `/${params.storeId}/products`,
      label: "Products",
      active: pathname.includes(`/${params.storeId}/products`),
      icon: <ScanLine className="h-4 w-4 mr-2" />,
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Orders",
      active: pathname.includes(`/${params.storeId}/orders`),
      icon: <Package2 className="h-4 w-4 mr-2" />,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname.includes(`/${params.storeId}/settings`),
      icon: <Settings className="h-4 w-4 mr-2" />,
    },
  ];

  return (
    <>
      {routes.map((route) => (
        <Link key={route.href} href={route.href} className="block">
          {route.active ? (
            <Button variant="secondary" className="w-full justify-start">
              {route.icon}
              {route.label}
            </Button>
          ) : (
            <Button variant="ghost" className="w-full justify-start">
              {route.icon}
              {route.label}
            </Button>
          )}
        </Link>
      ))}
    </>
  );
};
