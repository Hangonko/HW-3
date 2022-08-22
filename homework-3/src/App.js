import React, { useState, useEffect } from "react";

const generateUsers = () => {
  return [
    {
      name: "George",
      age: 20,
      id: 1,
    },
    {
      name: "Saba",
      age: 23,
      id: 2,
    },
    {
      name: "Nini",
      age: 22,
      id: 3,
    },
    {
      name: "Nika",
      age: 18,
      id: 4,
    },
    {
      name: "Sally",
      age: 26,
      id: 5,
    },
    {
      name: "Davit",
      age: 24,
      id: 6,
    },
    {
      name: "Irakli",
      age: 21,
      id: 7,
    },
    {
      name: "Kaxi",
      age: 18,
      id: 8,
    },
    {
      name: "Mariam",
      age: 19,
      id: 9,
    },
    {
      name: "Luka",
      age: 19,
      id: 10,
    },
  ];
};

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(generateUsers());
  }, []);

  const randRemove = () => {
    setUsers((item) => {
      const ind = Math.floor(Math.random() * users.length);
      const filtered = item.filter((x, index) => index !== ind);
      return filtered;
    });
  };

  useEffect(() => {
    document.title = `${users.length} users left`;
  }, [users]);

  return (
    <>
      {users.map((user) => {
        const { name, age, id } = user;
        return (
          <React.Fragment key={id}>
            <div>
              <p>{name}</p>
              <p>{age}</p>
            </div>
          </React.Fragment>
        );
      })}
      <button onClick={randRemove}>Delete Random User</button>
    </>
  );
}

export default App;
