import { connect } from "mongoose";
import Books from "@/models/Books";
import styles from "./Book.module.css";

// "use client";

// import { useEffect, useState } from "react";

// const Library = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:3000/api/books")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   return <div>{JSON.stringify(data)}</div>;
// };

// export default Library;
const Library = async () => {
  await connect(process.env.DB_CONNECTION as string, {
    dbName: "ena",
  });
  let data;
  try {
    data = await Books.find(); // Usa el método find() para obtener los datos
  } catch (error) {
    console.error(error);
  }
  return (
    <>
      <div>
        {data?.map((book) => {
          return (
            <div key={book._id} className={styles.bookCard}>
              <h1>{book.title}</h1>
              <p>{book.author}</p>
              <p>{book.description}</p>
              <p>{book.price}</p>
              <img src={book.image} />
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Library;
