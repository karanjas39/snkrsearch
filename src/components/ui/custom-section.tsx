import { type ReactNode } from "react";

function CustomSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  const [...first] = heading.split(" ");
  const last = first.pop();

  return (
    <section className="flex flex-col gap-5 w-[90%] mx-auto my-10">
      <h2 className="sm:text-4xl text-3xl font-extrabold">
        {first} <span className="text-primary">{last}</span>.
      </h2>
      {children}
    </section>
  );
}

export default CustomSection;
