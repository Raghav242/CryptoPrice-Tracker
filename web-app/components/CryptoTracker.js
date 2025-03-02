import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCryptoPrices = async () => {
  const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
    params: {
      vs_currency: "usd",
      ids: "bitcoin,ethereum,ripple,cardano,solana",
    },
  });
  return data;
};

export default function CryptoTracker() {
  const [search, setSearch] = useState("");

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });

  const filteredData = data?.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Crypto Price Tracker</h1>
      <input
        type="text"
        placeholder="Search cryptocurrency..."
        className="border p-2 mb-4 w-full"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded mb-4"
        onClick={() => refetch()}
      >
        Refresh
      </button>
      
      {/* Show loading indicator while fetching data */}
      {(isLoading || isFetching) ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredData?.map((coin) => (
            <li key={coin.id} className="p-2 border-b">
              <img src={coin.image} alt={coin.name} width="30" className="inline mr-2" />
              {coin.name} - ${coin.current_price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
