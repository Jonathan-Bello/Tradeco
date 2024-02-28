import { useState } from "react";

const ProductosSelect = (props) => {
  const [typeSelected, setTypeSelected] = useState(1);

  return (
    <section className="ProductosSelect container">
      <div className="ProductosSelect__selector grid grid-cols-2">
        <button
          className={`ProductosSelect__selector__btn ${typeSelected === 1 && "ProductosSelect__selector__btn--active"}`}
          onClick={() => setTypeSelected(1)}
        >
          Pisos vinílicos
        </button>
        <button
          className={`ProductosSelect__selector__btn ${typeSelected === 2 && "ProductosSelect__selector__btn--active"}`}
          onClick={() => setTypeSelected(2)}
        >
          Piedras
        </button>
      </div>

      <div className="ProductosSelect__content mb-12">
        {typeSelected === 1 ? props.pisos : props.piedras}
      </div>
    </section>
  );
};

export default ProductosSelect;
