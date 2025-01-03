function SearchPage({ params }: { params: { slug: string; model: string } }) {
  const model = decodeURIComponent(params.model).trim();
  const slug = decodeURIComponent(params.slug).trim();

  return (
    <div>
      <p> {model}</p>
      <p>{slug}</p>
    </div>
  );
}

export default SearchPage;
