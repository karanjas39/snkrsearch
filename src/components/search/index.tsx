"use client";

import { SearchResult } from "@/types";
import SearchPageInput from "./search-page-input";
import SearchedProduct from "../most-searched/searchedProduct";
import { Button } from "../ui/button";
import { ArrowBigDownDashIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

function SearchComponent({
  initialQuery,
  initialResults,
}: {
  initialQuery: string;
  initialResults: SearchResult;
}) {
  const [results, setResults] = useState<SearchResult>(initialResults);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState(initialResults.items);

  const fetchMoreResults = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://www.sneakerjagers.com/api/sneakers/filter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filter: "all",
            locale: "gb",
            query: initialQuery,
            page,
          }),
        }
      );
      const newResults: SearchResult = await response.json();
      setResults(newResults);
      setItems((prev) => [...prev, ...newResults.items]);
    } catch (error) {
      console.error("Error loading more results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchMoreResults(nextPage);
  };

  useEffect(() => {
    setItems(initialResults.items);
    setResults(initialResults);
  }, [initialQuery, initialResults]);

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
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4 my-5">
        {items.map((result) => (
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
      {results.hasMorePages && (
        <div className="flex items-center justify-center w-full mb-5">
          <Button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="gap-2 min-w-[200px]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                Load More Sneakers
                <ArrowBigDownDashIcon className="animate-bounce" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
