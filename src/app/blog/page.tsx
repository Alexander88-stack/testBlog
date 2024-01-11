import Card from "@/components/card";
import styles from "./Blog.module.css";
import Post from "@/models/Post";
import { connect } from "mongoose";

const Blog = async () => {
  await connect(process.env.DB_CONNECTION as string, {
    dbName: "ena",
  });

  const posts = await Post.find();

  return (
    <>
      <div className={styles.container}>
        {posts.map((post) => {
          return (
            <Card
              key={post._id}
              title={post.title}
              description={post.description}
              price={post.price}
              image={post.image}
            />
          );
        })}
      </div>

      <br />
      <div>
        <h1>Blog</h1>
        <a
          href="https://www.vueloartico.com/2022/07/20/la-novela-rosa-elitismo-literario/"
          target="_blank"
          rel="noopener noreferrer"
        >
          - La novela rosa: elitismo literario
        </a>
      </div>
      <div>
        <a
          href="https://www.cervantesvirtual.com/obra-visor/el-ingenioso-hidalgo-don-quijote-de-la-mancha-6/html/"
          target="_blank"
          rel="noopener noreferrer"
        >
          - El ingenioso hidalgo don Quijote de la Mancha
        </a>
      </div>
      <div>
        <a
          href="https://www.hola.com/"
          target="_blank"
          rel="noopener noreferer"
        >
          - Revista Hola
        </a>
      </div>
    </>
  );
};

export default Blog;
