import React, { useState } from "react";
import "./Project1.css";
export default function Project1() {
  const data = [
    {
      id: 1,
      name: "Bertie Yates",
      age: 29,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },
    {
      id: 2,
      name: "Hester Hogan",
      age: 32,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },
    {
      id: 3,
      name: "Larry Little",
      age: 36,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
    {
      id: 4,
      name: "Sean Walsh",
      age: 34,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
      id: 5,
      name: "Lola Gardner",
      age: 29,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
    {
      id: 6,
      name: "Yates",
      age: 20,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },
    {
      id: 7,
      name: "Hester",
      age: 32,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },
    {
      id: 8,
      name: "Lattle",
      age: 36,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
    {
      id: 9,
      name: "Sealsh",
      age: 34,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
      id: 10,
      name: "Lardner",
      age: 36,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
    {
      id: 11,
      name: "tes",
      age: 45,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },
    {
      id: 12,
      name: "ter Hogan",
      age: 39,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },
    {
      id: 13,
      name: "ittle",
      age: 50,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
    {
      id: 14,
      name: "Sea",
      age: 60,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
      id: 15,
      name: "Lodner",
      age: 13,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
    {
      id: 16,
      name: "Yat",
      age: 18,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },
    {
      id: 17,
      name: "Hesr",
      age: 46,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },
    {
      id: 18,
      name: "Late",
      age: 32,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
    {
      id: 19,
      name: "Sesh",
      age: 89,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
      id: 20,
      name: "Laner",
      age: 22,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
  ];
  const [query, setQuery] = useState("");
  const [people, setPeople] = useState(data);
  
  function List({ people ,props}) {
    return (
      <>
        {people
          .filter((person) => {
            if (query === "") {
              return person;
            } else if (
              person.name.toLowerCase().includes(query.toLowerCase())
            ) {
              return person;
            }
          })
          .map((person) => {
            const { id, name, age, image } = person;
            return (
              <article key={id}>
                <img className="img" src={image} alt={name} />
                <div>
                  <h3>
                    Name : {name} , Age : {age} years
                  </h3>
                </div>
              </article>
            );
          })}
      </>
    );
  }
  return (
    <div>
      <h1>Project- 1</h1>
      <label>Search : </label>
      <input
        placeholder="Search Name"
        onChange={(event) => setQuery(event.target.value)}
      />

      <h3 className="title">
        <List people={people} />
      </h3>
    </div>
  );
}
