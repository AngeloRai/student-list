
const AvatarRound = ({ image, alt }) => {
  return (
    <img
      src={image}
      className="border-2 rounded-full w-28 h-28"
      alt={alt.img}
    />
  );
};

export default AvatarRound;
