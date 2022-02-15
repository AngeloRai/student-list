
const AvatarRound = ({ image, alt }) => {
  return (
    <img
      src={image}
      className="border-2 rounded-full w-24 m-2"
      alt={alt.img}
    />
  );
};

export default AvatarRound;
