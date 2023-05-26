import Card from "../Card/Card";

function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map(
        ({ id, name, gender, status, species, image, origin }) => {
          return (
            <Card
              id={id}
              key={id}
              name={name}
              gender={gender}
              origin={origin.name}
              status={status}
              species={species}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
}
export default Cards;
