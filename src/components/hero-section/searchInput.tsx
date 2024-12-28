"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

const placeholders = [
  "Travis Scott x Air Jordan 1 Low OG",
  "Adidas Campus 00s GS 'Grey'",
  "Nike Air Force 1 '07 'Triple White'",
  "Air Jordan 11 Retro 'Legend Blue'",
  "Nike Dunk Low PRM WMNS 'Bacon'",
  "Jordan Jumpman Two Trey",
];

function SearchInput() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-4/5 sm:w-1/2  z-20">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default SearchInput;
