import { SearchResult } from "@/types";
import SearchPageInput from "./search-page-input";
import SearchedProduct from "@/components/most-searched/searchedProduct";
import { default as axios } from "axios";

async function SearchComponent({ initialQuery }: { initialQuery: string }) {
  const { data: initialResults }: { data: SearchResult } = await axios.post(
    "https://www.sneakerjagers.com/api/sneakers/filter",
    {
      filter: "all",
      locale: "gb",
      query: initialQuery,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return (
    <div className="sm:w-[90%] w-[95%] mx-auto">
      <div className="sm:w-[35%] w-[90%] mx-auto p-4">
        <p className="font-bold text-center text-2xl">
          Search Results for &apos;
          <span className="text-primary">{initialQuery}</span>
          &apos;
        </p>
        <SearchPageInput query={initialQuery} />
      </div>
      {initialResults?.items?.length === 0 ? (
        <div className="text-sm text-center text-gray-500 my-5 font-bold">
          No results found for{" "}
          <span className="text-primary">{initialQuery}</span>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4 my-5">
          {initialResults.items.map((result) => (
            <SearchedProduct
              brand={result.brand}
              imageURL={result.image_url}
              link={`/product/${result.model}`}
              model={result.model}
              name={result.name}
              key={result.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
