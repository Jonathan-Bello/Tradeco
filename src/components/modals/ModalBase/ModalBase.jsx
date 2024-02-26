import { Xmark } from "iconoir-react";

const ModalBase = ({ children, show, setShow }) => {
  return (
    <div className={`ModalBase ${show ? "block" : "hidden"}`}>
      <Xmark className="ModalBase__CloseIcon" onClick={() => setShow(!show)} />
      <div className="h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default ModalBase;
