"use client";

import { useRouter } from "next/navigation";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { useCallback } from "react";

const placeholders = [
  "Travis Scott x Air Jordan 1 Low OG",
  "Adidas Campus 00s GS 'Grey'",
  "Nike Air Force 1 '07 'Triple White'",
  "Air Jordan 11 Retro 'Legend Blue'",
  "Nike Dunk Low PRM WMNS 'Bacon'",
  "Jordan Jumpman Two Trey",
];

function SearchInput() {
  const router = useRouter();

  const navigateToSearch = useCallback(
    (searchTerm: string) => {
      if (searchTerm.trim()) {
        router.push(`/search/${searchTerm}`);
      }
    },
    [router]
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector("input") as HTMLInputElement;
    navigateToSearch(input.value);
  };

  return (
    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-4/5 sm:w-1/2 z-10">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default SearchInput;
