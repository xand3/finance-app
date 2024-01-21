const options = [
  { name: "Sobre", href: "/sobre" },
  { name: "Desenvolvedores", href: "/developers" },
  { name: "Contato", href: "/developers" },
];

export default function PageFooter() {
  return (
    <footer className="flex justify-center border-t ">
      <div className="flex flex-col">
        <div className="flex justify-around my-5">
          {options.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>

        <div className="mb-5">
          <p>&#169; Finances App. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
