"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { formUrlQuery, removeKeysUrlQuery } from "@/lib/url";

const filters = [
  { name: "React", value: "react" },
  { name: "JavaScript", value: "javascript" },

  //   { name: "Newest", value: "newest" },
  //   { name: "Popular", value: "popular" },
  //   { name: "Unanswered", value: "unanswered" },
  //   { name: "Recommended", value: "recommended" },
];
const HomeFilter = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter") || "newest";

  const [active, setActive] = useState(filterParams);

  const handleTypeClick = (filter: string) => {
    let newUrl = "";

    if (filter === active) {
      newUrl = removeKeysUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
      setActive("");
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter,
      });
      setActive(filter);
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((filter) => (
        <Button
          key={filter.name}
          className={cn(
            `body-medium rounded-lg px-2 capitalize shadow-none`,
            active === filter.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-200 dark:bg-dark-400 dark:hover:bg-dark-500"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:hover:bg-dark-500",
          )}
          onClick={() => handleTypeClick(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
