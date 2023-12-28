import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type Props = {
  closeModal: () => void;
};

const RegisterModal = ({ closeModal }: Props) => {
  const [isEntry, setIsEntry] = useState(Boolean);
  const [selectedOption, setSelectedOptin] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptin(event.target.value);
    isEntry ? setIsEntry(false) : setIsEntry(true);
  };

  return (
    <Transition appear show={true} as={Fragment}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex justify-center items-center">
          <div className="fixed bg-gray-500 opacity-95 w-1/2 h-2/3 rounded-lg">
            <div className="flex flex-col w-full items-center">
              <div>
                <fieldset>
                  <legend>Tipo de Lançamento:</legend>
                </fieldset>

                <div>
                  <input
                    className="mr-3"
                    onChange={handleOptionChange}
                    type="checkbox"
                    name="ENTRADA"
                    id="entrada"
                    value="Option1"
                    checked={selectedOption === "Option1"}
                  />
                  <label htmlFor="entrada">ENTRADA</label>
                </div>
                <div>
                  <input
                    className="mr-3"
                    onChange={handleOptionChange}
                    type="checkbox"
                    name="SAIDA"
                    id="saida"
                    value="Option2"
                    checked={selectedOption === "Option2"}
                  />
                  <label htmlFor="saida">SAIDA</label>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Descrição:</label>
                <input type="text" name="" id="" placeholder="Digite aqui" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Valor:</label>
                <input type="number" name="" id="" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="">
                  {isEntry ? "Data de recebimento: " : "Data de Vencimento: "}
                </label>
                <input type="date" name="" id="" />
              </div>

              <div className="m-3">
                <button onClick={closeModal}>ADICIONAR</button>
              </div>
            </div>
          </div>
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default RegisterModal;
