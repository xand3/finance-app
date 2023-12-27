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
    <div className="flex justify-center items-center">
      <div className="fixed flex flex-col items-center justify-center bg-gray-500 opacity-95 w-3/4 h-3/ rounded-lg">
        <div>
          <fieldset>
            <legend>Qual o tipo de Lançamento ?</legend>
          </fieldset>
          <div>
            <input
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
        <div>
          <p>Descrição:</p>
          <input type="text" name="" id="" placeholder="Digite aqui" />
        </div>
        <div>
          <p>Valor:</p>
          <input type="number" name="" id="" />
        </div>
        <div>
          <div>
            <p> {isEntry ? "Data de recebimento: " : "Data de Vencimento: "}</p>
            <input type="date" name="" id="" />
          </div>
        </div>
        <div>
          <button onClick={closeModal}>ADICIONAR</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
