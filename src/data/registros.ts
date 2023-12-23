import { v4 as uuid } from 'uuid';

import { Registro } from "@/types/Registro";

export const registros: Array<Registro> = [
  {
    id: uuid(),
    date: new Date().toISOString(),
    descripton: "Internet",
    value: 60.00,
    recordType: 'S'
  },
  {
    id: uuid(),
    date: new Date().toISOString(),
    descripton: "Luz",
    value: 80,
    recordType: "S"
  },
  {
    id: uuid(),
    date: new Date().toISOString(),
    descripton: "Curso Udemy",
    value: 27,
    recordType: "S"
  },
  {
    id: uuid(),
    date: new Date().toISOString(),
    descripton: "Salário",
    value: 1320.0,
    recordType: "E"
  },
]