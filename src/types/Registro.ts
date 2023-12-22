
export type Registro = {
  id: string;
  descripton: string;
  date: string;
  value: number;
  recordType: 1 | 0 // 1 entrada | 0 saida
}