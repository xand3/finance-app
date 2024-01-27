type Props = {
  children?: React.ReactNode;
};

export default function AppEditPerson({
  children,
}: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-72 h-1/4 bg-slate-300 opacity-90 rounded-lg flex justify-center items-center ">
      {children}
    </div>
  );
}
