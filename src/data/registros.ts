import { v4 as uuid } from 'uuid';

import { Registro } from "@/types/Registro";

export const registros: Array<Registro> = [
  {
    id: uuid(),
    date: new Date().toISOString(),
    descricao: "Internet",
    value: 60.00,
    tipo: 0
  },
  {
    id: uuid(),
    date: new Date().toISOString(),
    descricao: "Luz",
    value: 80,
    tipo: 0
  },
  {
    id: uuid(),
    date: new Date().toISOString(),
    descricao: "Curso Udemy",
    value: 27,
    tipo: 0
  },
  {
    id: uuid(),
    date: new Date().toISOString(),
    descricao: "Salário",
    value: 1.320,
    tipo: 1
  },
]