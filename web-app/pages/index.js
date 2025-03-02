import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CryptoTracker from "../components/CryptoTracker";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex items-center justify-center">
        <CryptoTracker />
      </div>
    </QueryClientProvider>
  );
}
