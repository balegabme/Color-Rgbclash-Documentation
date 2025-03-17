import { RouterProvider } from "react-router-dom";

import { docRouter } from "./router/router";

export default function App() {
  return <RouterProvider router={docRouter} />;
}
