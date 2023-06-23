import { MouseEvent, useState } from "react";
import Image from "../../types/image";
import styles from "./card.module.scss";

type CardProps = {
  image: Image;
  onModalOpen: () => void;
};

const Card = ({ image, onModalOpen }: CardProps) => {
  const [imageLikes, setImageLikes] = useState<number>(image.likes);

  function handleModalOpen(image: Image): void {
    onModalOpen();
  }

  function like(event: any) {
    setImageLikes(imageLikes + 1);
    event.stopPropagation();
    event.view.blur();
    console.log(event);
  }

  return (
    <div
      className={styles.card}
      key={image.id}
      onClick={() => handleModalOpen(image)}
      tabIndex={0}
    >
      <div className={styles.card__overlay}>
        <div className={styles.card__overlayContent}>
          {image.description && (
            <p className={styles.card__overlayDescription}>
              {image.description}
            </p>
          )}
          <button
            className={styles.card__heart}
            onClick={(event) => like(event)}
          >
            <img src="./heart.svg" />
          </button>
          {imageLikes > 0 && <span>{imageLikes} likes</span>}
        </div>
      </div>
      <div className={styles.card__image}>
        <img
          src={`${image.url}.webp`}
          height={300}
          alt={image.alt_description}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Card;
