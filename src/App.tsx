import * as React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import RootWrapper from "wrappers/RootWrapper";
import configs from "constants/config";
import { ThemeProvider } from "@mui/material";
import MUI_THEME from "constants/muitheme";

export const history = createBrowserHistory();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 24 * 3600 * 1000, // cache for 1 day
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={MUI_THEME}>
        <HistoryRouter history={history}>
          <React.Suspense fallback={null}>
            <RootWrapper />
          </React.Suspense>
        </HistoryRouter>
      </ThemeProvider>
      {configs.APP_ENV !== "prod" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}

export default App;

