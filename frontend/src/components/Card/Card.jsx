

const Card = ({ content , className , like}) => {
  return (
    <div className={className}>
      <h2 className="text-lg font-semibold mb-2 p-3">{content}</h2>
      <span className="absolute right-0 bottom-0 p-3">{like}</span>
    </div>
  );
}

export default Card;