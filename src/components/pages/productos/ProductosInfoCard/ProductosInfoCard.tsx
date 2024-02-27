import ModalBase from "@/components/modals/ModalBase";
import { useState } from "react";

interface ProductosInfoCardProps {
  image: ImageMetadata;
  title: string;
  modalImg?: ImageMetadata;
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
    <article className="flex flex-col items-center">
      <img className="size-20 relative top-8" src={image.src} alt={title} />

      {url ? (
        <a className="w-full" href={url}>
          <p
            className="w-full cursor-pointer
            bg-secondary-500 text-primary-500 rounded-xl
            text-center px-10 pt-10 pb-6
            text-lg font-title tracking-widest"
            onClick={() => setShowModal(!showModal)}
          >
            {title}
          </p>
        </a>
      ) : (
        <p
          className="w-full cursor-pointer
            bg-secondary-500 text-primary-500 rounded-xl
            text-center px-10 pt-10 pb-6
            text-lg font-title tracking-widest"
          onClick={() => setShowModal(!showModal)}
        >
          {title}
        </p>
      )}

      {modalImg && (
        <ModalBase show={showModal} setShow={setShowModal}>
          <div className="rounded-lg overflow-auto w-5/6 lg:w-4/6 my-16 md:my-8">
            <img src={modalImg.src} />
          </div>
        </ModalBase>
      )}
    </article>
  );
};

export default ProductosInfoCard;
