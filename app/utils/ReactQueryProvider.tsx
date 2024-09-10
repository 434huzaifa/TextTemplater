"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: 2,
            },
            mutations: {
                retry: 2,
            },
        },
    }));
    return (
        <div>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </div>
    );
};

export default ReactQueryProvider;