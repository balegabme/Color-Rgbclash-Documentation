import { createBrowserRouter } from "react-router-dom";

import { slugify } from "@/lib/slugify";

import { Layout } from "./layout";
import PrevNextButtons from "./prevNextButtons";
import { routes } from "./routes";

const documentationRoutes = routes.navMain.flatMap((group) =>
  group.items.map((item) => {
    console.log(group.title, item.title);
    const prevItem = group.items[group.items.indexOf(item) - 1];
    const nextItem = group.items[group.items.indexOf(item) + 1];

    return {
      path: `${slugify(group.title)}/${slugify(item.title)}`,
      element: (
        <div>
          <span>
            {group.title} - {item.title} Page
          </span>
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

export const docRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <span>Page Not Found</span>,
    children: documentationRoutes,
  },
]);
