import styles from "./Card.module.css";

interface ICardProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

const Card = (props: ICardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <img
          src={props.image}
          alt="card__image"
          className={styles.card__image}
          width="600"
          height="400"
        />
      </div>
      <div className={styles.card__body}>
        <span className={`${styles.tag} ${styles["tag-blue"]}`}>{"poly"}</span>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.user}>
          <div className={styles.user__info}>
            <p>{props.price}</p>
            <small>{"time"}</small>
          </div>
        </div>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default Card;
