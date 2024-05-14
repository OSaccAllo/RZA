//page for list of animals

import NavSignedOut from "../components/navbar"

import lion from "../images/Lion.jpg"

function Animals() {
    const animals = [
        {
          name: "Lion",
          image: {lion},
          description: "The lion is a species in the family Felidae and a member of the genus Panthera. It is most recognisable for its muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail."
        },
        {
          name: "Elephant",
          image: "/elephant.jpg",
          description: "Elephants are large mammals of the family Elephantidae and the order Proboscidea. Three species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant."
        },
        {
          name: "Giraffe",
          image: "/giraffe.jpg",
          description: "The giraffe is an African artiodactyl mammal, the tallest living terrestrial animal, and the largest ruminant. It is traditionally considered to be one species, Giraffa camelopardalis, with nine subspecies."
        },
        {
          name: "Zebra",
          image: "/zebra.jpg",
          description: "Zebras are several species of African equids (horse family) united by their distinctive black-and-white striped coats. Their stripes come in different patterns, unique to each individual."
        }
      ];
    
      return (
        <>
        <div>
            <NavSignedOut/>
        </div>
        <div className="container">
          <h1>Welcome to Our Zoo!</h1>
          <div className="animal-cards">
            {animals.map((animal, index) => (
              <div className="animal-card" key={index}>
                
                <h2 className="animal-name">{animal.name}</h2>
                {/* <img className="animal-img" src={animal.image} alt={animal.name} /> */}
                <p className="animal-description">{animal.description}</p>
              </div>
            ))}
          </div>
        </div>
        </>
      );
    }
export default Animals