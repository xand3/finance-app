
export type Registro = {
  id: string;
  descripton: string;
  date: string;
  value: number;
  recordType: "E" | "S" // 1 entrada | 0 saida
}