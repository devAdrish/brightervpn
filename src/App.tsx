import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { APP_ROUTES } from "./constants/constants";
import { Provider } from "react-redux";
import store from "store";
import Home from "pages/Home";
import JobSearch from "pages/JobSearch";

import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path={APP_ROUTES.Home} element={<Home />} />
            <Route path={APP_ROUTES.JobSearch} element={<JobSearch />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </MantineProvider>
  );
}
