import SearchComponent from "@/components/search";

async function SearchPage({ params }: { params: { query: string } }) {
  const query = decodeURIComponent(params.query).trim();

  const initialResults = await fetch(
    "https://www.sneakerjagers.com/api/sneakers/filter",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: "all",
        locale: "gb",
        query,
        page: 1,
      }),
    }
  ).then((res) => res.json());

  return (
    <SearchComponent initialQuery={query} initialResults={initialResults} />
  );
}

export default SearchPage;
