import { Provider } from "react-redux";
import store from "./utils/redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TestGrid from "./pages/TestGrid";
import TestFlex from "./pages/TestFlex";
import TestSelect from "./pages/TestSelect";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/axios";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "test-grid",
        element: <TestGrid />,
      },
      {
        path: "test-flex",
        element: <TestFlex />,
      },
      {
        path: "test-select",
        element: <TestSelect />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
