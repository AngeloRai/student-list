
const SearchInput = ({ setSearchWord, placeholder }) => {
  return (
    <input
      className="appearance-none focus:outline-none focus:border-b-1 focus:border-black border-b-2 p-2 w-full"
      placeholder={placeholder}
      onChange={(e) => setSearchWord(e.target.value)}
    />
  );
};

export default SearchInput;
