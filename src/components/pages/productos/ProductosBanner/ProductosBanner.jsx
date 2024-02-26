import { Camera } from "iconoir-react";
import { useState } from "react";
import ProductosBannerModal from "./ProductosModalCarousel";
import ModalBase from "@/components/modals/ModalBase";

const ProductosBanner = ({ arrayImgs }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className="ProductosBanner relative w-11/12 md:container
      rounded-lg overflow-hidden
      h-40 sm:h-48 md:h-52 lg:h-80
      bg-cover"
      style={{
        backgroundImage: `url(${arrayImgs[0].src}.src)`,
      }}
    >
      <div
        className="ProductosBanner__btnContainer
        flex flex-col items-center
      "
      >
        <Camera className="text-white size-10 mb-4" />
        <button
          className="text-white bg-transparent
          border-white border-2 rounded-full
          px-6 py-2"
          onClick={() => {
            setShowModal(!showModal);
            console.log(showModal);
          }}
        >
          Ampliar foto
        </button>
      </div>

      <ModalBase show={showModal} setShow={setShowModal}>
        <ProductosBannerModal items={arrayImgs} />
      </ModalBase>
    </section>
  );
};

export default ProductosBanner;
