// DocumentationBreadcrumb.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { slugify } from "@/lib/slugify";
import { routes } from "@/router/routes";

const slugTitleMap: { [slug: string]: string } = {};
routes.navMain.forEach((group) => {
  const groupSlug = slugify(group.title);
  slugTitleMap[groupSlug] = group.title;
  group.items.forEach((item) => {
    const itemSlug = slugify(item.title);
    slugTitleMap[itemSlug] = item.title;
  });
});

const Header = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const displayName = slugTitleMap[name] || name.replace(/-/g, " ");
          return (
            <React.Fragment key={routeTo}>
              {index > 0 && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{displayName}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={routeTo}>{displayName}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Header;
