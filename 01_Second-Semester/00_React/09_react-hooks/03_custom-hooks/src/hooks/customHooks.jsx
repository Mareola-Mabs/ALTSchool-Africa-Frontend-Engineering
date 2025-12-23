import { useEffect, useState } from "react";

// Custom Hook
export const getData = (type) => {
  const [data, setData] = useState([]);

  const [mem, setMem] = useState([])


  useEffect(() => {

    const users = [
      {
        id: 1,
        name: "John",
      },
      {
        id: 2,
        name: "Jane",
      },
      {
        id: 3,
        name: "Hammed",
      },
    ];

    const books = [
      {
        id: 1,
        name: "Harry Potter",
      },
      {
        id: 2,
        name: "Lord of the Rings",
      },
    ];

    setMem(users, books)


    if (type === "users") {
      setData(users);
    } else if (type === "books") {
      setData(books);
    }
    else{
        setData([])
    }

  }, [type]);

  return [data, mem];
};
