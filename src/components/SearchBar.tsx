export const SearchBar = () => {
  return (
    <div className="max-sm:hidden block sm:w-48 lg:w-96 mt-3 relative">
      <input
        className="rounded-full bg-black w-96 h-8 pl-4 pr-10 p-2 border-2 border-gray-800"
        type="text"
        placeholder="search"
      />
      <button
        className="absolute inset-y-0 right-3"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
};
