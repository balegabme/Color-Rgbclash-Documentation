import { createBrowserRouter, Navigate } from "react-router-dom";

import { slugify } from "@/lib/slugify";

import { Layout } from "./layout";
import { NotFoundPage } from "./not-found";
import PrevNextButtons from "./prevNextButtons";
import { routes } from "./routes";

const documentationRoutes = routes.navMain.flatMap((group) => {
  const groupRoutes = [
    {
      path: slugify(group.title),
      element: <Navigate to={`/${slugify(group.title)}/${slugify(group.items[0].title)}`} />,
    },
  ];

  return groupRoutes.concat(
    group.items.map((item) => {
      const prevItem = group.items[group.items.indexOf(item) - 1];
      const nextItem = group.items[group.items.indexOf(item) + 1];

      return {
        path: `${slugify(group.title)}/${slugify(item.title)}`,
        element: (
          <div className="md:w-2/3">
            <item.element />
            <PrevNextButtons
              previousHref={prevItem ? `/${slugify(group.title)}/${slugify(prevItem.title)}` : undefined}
              previousTitle={prevItem?.title}
              nextHref={nextItem ? `/${slugify(group.title)}/${slugify(nextItem.title)}` : undefined}
              nextTitle={nextItem?.title}
            />
          </div>
        ),
      };
    }),
  );
});

export const docRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: documentationRoutes,
  },
]);
