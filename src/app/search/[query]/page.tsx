import SearchComponent from "@/components/search";

async function SearchPage({ params }: { params: { query: string } }) {
  const query = decodeURIComponent(params.query).trim();

  return <SearchComponent initialQuery={query} />;
}

export default SearchPage;
