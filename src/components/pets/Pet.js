import "./Pet.css";

const iconMap = {
  cat: "🐈",
  dog: "🐕",
};

export const Pet = ({ kind, pet }) => {
  const icon = iconMap[kind];
  return (
    <article>
      <h3>
        {icon} {pet.name}
      </h3>
    </article>
  );
};

export default Pet;
