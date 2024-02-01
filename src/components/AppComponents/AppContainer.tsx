type BoxProps = {
  children?: React.ReactNode;
  myClasses?: string;
}

export default function AppContainer({children, myClasses}: BoxProps) {
  return (
    <main className={`mt-[80px] px-2 ${myClasses}`}>
      {children}
    </main>
  )
}