import Fuse from "fuse.js";
import createSlug from "../lib/createSlug";
import { useState, useMemo } from "react";
export type SearchDefinition = {
  readonly primary: string;
  readonly secondary?: string;
  readonly url?: string;
  readonly slug?: string;
  readonly featuredImage?: string;
};

const useFuse = <T,>({
  collection,
  searchTerm,
  options,
}: {
  readonly collection: readonly T[];
  readonly searchTerm: string;
  readonly options: Fuse.IFuseOptions<T>;
}) => {
  const fuse = useMemo(() => {
    return new Fuse(collection, options);
  }, [collection, options]);

  const results = useMemo(() => {
    return fuse.search(searchTerm);
  }, [fuse, searchTerm]);

  return results;
};

const SearchResultList = ({
  results,
}: {
  readonly results: readonly SearchDefinition[];
}) => (
  <div className="grid gap-3 py-4 md:grid-cols-2 lg:grid-cols-3">
    {results.map((result) => (
      <a
        href={`/videos/${createSlug(result.secondary)}`}
        key={result.secondary}
        rel="prefetch"
        class="group animate__fadeIn animate__animated relative h-64 bg-gray-900  justify-center items-center overflow-hidden rounded-lg border border-gray-700 flex "
      >
        <div class="absolute inset-0 ">
          <img
            src={result.featuredImage}
            alt={result.secondary}
            loading="lazy"
            decoding="async"
            class="h-full w-full object-cover opacity-10 object-center group-hover:opacity-30 duration-300 sm:h-full sm:w-full"
          />
        </div>
        <div class="flex w-full p-6 relative z-10 flex-col">
          <h3 class="text-2xl font-medium font-sans px-4 opacity-100 group-hover:opacity-80 text-gray-100 line-clamp-3 text-center">
            {result.secondary}
          </h3>
        </div>
      </a>
    ))}
  </div>
);

export default function VideoGSearchrid({
  list,
}: {
  readonly list: readonly SearchDefinition[];
}) {
  const [collection] = useState<readonly SearchDefinition[]>(list);
  const options: Fuse.IFuseOptions<SearchDefinition> = {
    keys: ["primary", "secondary"],
  };
  const [searchTerm, setSearchTerm] = useState("");
  const filteredList = useFuse<SearchDefinition>({
    collection,
    searchTerm,
    options,
  }).map<SearchDefinition>((result) => ({
    primary: result.item.primary,
    secondary: result.item.secondary,
    featuredImage: result.item.featuredImage,
  }));
  const filteredListTop = filteredList.slice(0, 20);

  return (
    <>
      <div className="relative">
        <input
          id="search"
          name="search"
          type="search"
          className="w-full py-3 pr-6 text-lg text-white placeholder-gray-200 bg-gray-700/80 pl-14 "
          autocomplete="off"
          placeholder="Buscar"
          onInput={(event) =>
            setSearchTerm((event.target as HTMLInputElement).value)
          }
        />
        <div class="w-7 m-3 absolute opacity-30  left-0 top-0 h-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            className="w-7 h-7"
            viewBox="0 0 32 32"
          >
            <path
              fill="#fff"
              d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"
            />
          </svg>
        </div>
      </div>
      {filteredListTop && (
        <>
          {filteredListTop.length === 0 ? (
            <>
              <div className="flex items-center justify-center h-64 mt-6 bg-gray-800/80">
                <a className="block max-w-sm mx-auto font-sans text-2xl text-center opacity-80">
                  Escriba en el buscador y aguarde a que aparezcan los
                  resultados aproximados.
                </a>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
      <SearchResultList results={filteredListTop} />
    </>
  );
}
