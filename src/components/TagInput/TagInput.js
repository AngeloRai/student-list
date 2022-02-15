const TagInput = ({ handleSubmit, setTagName, tagName }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add a tag"
          className="ml-3 text-sm appearance-none sticky focus:outline-none focus:border-b-[2px] focus:border-gray-700 border-b-[2px] p-2"
          type="text"
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
        />
        <button type="submit"/>
      </form>
    </div>
  );
};

export default TagInput;
