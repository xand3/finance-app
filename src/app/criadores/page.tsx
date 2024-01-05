import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

const devs = [
  {
    name: "Alexandre Bastos",
    job: "Front End Developer",
    exp: "Hello, my name is Alexandre Bastos. I consider myself a technology enthusiast and am always seeking to learn new technologies to understand how applications really work. Currently, I am studying Software Engineering, where I have exposure to the fundamentals of systems development.",
    photo: "/devs/dev.png",
    socials: [
      {
        name: "Linkedin",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg",
        link: "https://www.linkedin.com/in/alexandr3-bastos/",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        link: "https://github.com/xand3",
      },
    ],
  },
  {
    name: "Marilson Souza",
    job: "Back End Developer",
    exp: "",
    photo: "/devs/dev.png",
    socials: [
      {
        name: "Linkedin",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg",
        link: "",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        link: "https://github.com/MarilsonSouZa/",
      },
    ],
  },
];

export default function CreatorsPage() {
  return (
    <>
      <PageHeader />
      <section className="h-80 flex justify-center mt-8 mb-60 mx-32">
        <div className="flex flex-col">
          <div>
            <h1 className="text-2xl mb-3">Desenvolvedores:</h1>
          </div>
          <div className="grid grid-cols-2 gap-28">
            {devs.map((dev) => (
              <div key={dev.name} className="border-2 rounded-lg p-5">
                <div>
                  <img className="h-44 my-5" src={dev.photo} alt="" />
                </div>
                <h2 className="font-bold">{dev.name}</h2>
                <p className="text-sm mb-3">{dev.job}</p>
                <p className="text-justify">{dev.exp}</p>
                <div className="flex my-3">
                  {dev.socials.map((social) => (
                    <a className="mr-3" href={social.link} target="_blank">
                      <img width={28} src={social.icon} alt={social.name} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PageFooter />
    </>
  );
}
