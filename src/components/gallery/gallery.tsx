import { useEffect, useState } from "react";
import styles from "./gallery.module.scss";
import Modal from "../modal/modal";
import Card from "../card/card";
import Image from "../../types/image";

type GalleryProps = {
  images: Image[];
};

const Gallery = ({ images }: GalleryProps) => {
  const [modalState, setModalState] = useState<boolean>(false);
  const [openedImage, setOpenedImage] = useState<Image | null>(null);

  function handleModalClose(): void {
    setModalState(false);
    setOpenedImage(null);
  }

  function handleModalOpen(img: Image): void {
    setModalState(true);
    setOpenedImage(img);
  }

  return (
    <section id="gallery" className={styles.section}>
      <Modal isOpen={modalState} onClose={() => handleModalClose()}>
        {openedImage && (
          <img
            src={`${openedImage.url}.webp`}
            alt={openedImage.alt_description}
            loading="lazy"
          />
        )}
      </Modal>
      <div className={styles.container}>
        {images &&
          images.map((img: Image, index: number) => {
            return (
              <Card
                image={img}
                onModalOpen={() => handleModalOpen(img)}
                key={img.id}
              ></Card>
            );
          })}
      </div>
    </section>
  );
};

export default Gallery;
