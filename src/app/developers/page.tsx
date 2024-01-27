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
    exp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est placerat. Ut tristique et egestas quis ipsum suspendisse ultrices. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. ",
    photo: "/devs/dev.png",
    socials: [
      {
        name: "Linkedin",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg",
        link: "https://www.linkedin.com/in/marilsonsouza/",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        link: "https://github.com/MarilsonSouZa/",
      },
    ],
  },
];

export default function DevelopersPage() {
  return (
    <>
      <PageHeader />
      <section className=" flex justify-center mt-8 mx-5 mb-8">
        <div className="flex flex-col">
          <div>
            <h1 className="text-2xl mb-3">Desenvolvedores:</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            {devs.map((dev) => (
              <div key={dev.name} className="md:border-2 rounded-lg p-5">
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
