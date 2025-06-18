import Card from '../Card/Card.jsx';

const ContainerCard = ({ listCard, AddCard }) => {

  const colores = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-orange-500",
    "bg-amber-700"
  ];

  return (
    <div className='grid grid-cols-3 gap-2 items-center'>

      {listCard.map((card, index) => {
        const color = colores[index % colores.length];
        return (
          <Card
            key={index}
            content={card.title}
            like={card.like}
            className={`${color} w-full h-30 flex justify-between text-white relative shadow-sm rounded-sm`}
          />
        );
      })}

      <Card
        content={"+"}
        onClick={AddCard}
        className={`bg-[#48cae4] sm:w-40 sm:h-30 h-15 w-15 flex justify-center items-center text-white relative shadow-sm rounded-sm hover:bg-[#00b4d8]`}
      />

    </div>
  );
};

export default ContainerCard;
