import { useState } from "react";

interface ProductosInfoCardProps {
  image: ImageMetaData;
  title: string;
  modalImg?: ImageMetaData;
  url?: string;
}

const ProductosInfoCard = ({
  image,
  title,
  modalImg,
  url,
}: ProductosInfoCardProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <article>
      <img src={image.src} alt={title} />

      <p className="">{title}</p>
    </article>
  );
};

export default ProductosInfoCard;
