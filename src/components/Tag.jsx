const Tag = ({ tagText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white p-2 rounded-lg cursor-pointer mr-2 xs:text-xs xs:p-1 xs:m-0"
    >
      {tagText}
    </button>
  );
};

export default Tag;
