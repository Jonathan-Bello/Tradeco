import { MenuScale, Xmark } from "iconoir-react";
import tradecoLogo from "../assets/svg/tradeco_logo.svg";
import iconFacebook from "../assets/svg/icon-facebook.svg";
import iconInstagram from "../assets/svg/icon-instagram.svg";
import { useState } from "react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <header className="Header top-0 shadow-lg flex justify-center w-full h-20 lg:h-auto">
      <div
        className="Header__content container flex items-center
        justify-between px-4 py-5"
      >
        <div className="text-primary-500 basis-1/4 md:hidden">
          <MenuScale
            height={36}
            width={36}
            onClick={() => {
              console.log("pucho");
              setShowMobileMenu(!showMobileMenu);
            }}
          />
        </div>

        <a href="/">
          <img
            className="basis-1/2 max-w-32 md:basis-1/4 lg:max-w-44"
            src={tradecoLogo.src}
            alt="Logo Tradeco"
          />
        </a>

        <ul
          className={`Header__content__links
          ${showMobileMenu ? "Header__content__links--active" : "hidden"}
          list-none text-base lg:text-lg
          md:flex md:justify-end md:flex-1 md:space-x-20 md:pr-16`}
        >
          <li>
            <a
              className={`${currentPath === "/" && "font-medium"} hover:text-accent-900 hover:font-medium`}
              href="/"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              className={`${currentPath === "/productos" && "font-medium"} hover:text-accent-900 hover:font-medium`}
              href="/productos"
            >
              Productos
            </a>
          </li>
          <li>
            <a
              className={`${currentPath === "/contacto" && "font-medium"} hover:text-accent-900 hover:font-medium`}
              href="/contacto"
            >
              Contacto
            </a>
          </li>

          <li className={"md:hidden"}>
            <Xmark
              height={36}
              width={36}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            />
          </li>
        </ul>

        <div className="flex basis-1/4 gap-2 justify-end md:gap-4 md:grow-0 md:flex-none">
          <a
            href="https://www.facebook.com/p/Tradeco-Costa-Rica-100079059044916/?locale=es_LA"
            target="_blank"
          >
            <img src={iconFacebook.src} alt="socialIcon Facebook" />
          </a>

          <a
            href="https://www.instagram.com/tradecocostarica/?hl=es"
            target="_blank"
          >
            <img src={iconInstagram.src} alt="socialIcon Instagram" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
