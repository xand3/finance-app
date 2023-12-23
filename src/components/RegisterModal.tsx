import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type Props = {
  closeModal: () => void;
}

const RegisterModal = ({ closeModal }: Props) => {
  return (
      <div className="flex justify-center items-center">
        <div className="fixed flex flex-col items-center justify-center bg-gray-500 opacity-95 w-3/4 h-3/4">
          <div >
            <p>Descrição</p>
            <input type="text" name="" id="" placeholder="Digite aqui" />
          </div>
          <div>
            <p>Valor</p>
            <input type="number" name="" id="" />
          </div>
          <div>
            <p>Data</p>
            <input type="date" name="" id="" />
          </div>
          <div>
            <button onClick={closeModal}>ADICIONAR</button>
          </div>
        </div>
      </div>
  );
};

export default RegisterModal;
