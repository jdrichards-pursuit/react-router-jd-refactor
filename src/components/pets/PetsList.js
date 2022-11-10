import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets, kind }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  // const acc = [[],[]]
  // if pet.kind is a Cat
  // push into acc[0] which is the cats array
  // otherwise push into acc[1] which is the dogs array

  // const x = [[],[]]
  //array destructuring
  // const [c, d] = x

  const chosen = kind === "cats" ? cats : dogs;

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {chosen.map((animal) => (
          <Pet key={animal.id} kind={animal.kind.toLowerCase()} pet={animal} />
        ))}
      </section>
    </section>
  );
};

export default PetsList;
