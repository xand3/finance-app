import { CheckIcon} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Intuitivo.',
    description:
      'Com uma interface fácil de usar e intuitiva o Finance App permite que você navegue e compreenda as suas funcionalidades facilmente.',
    icon: CheckIcon,
  },
  {
    name: 'Prático.',
    description: 'Gerenciamento de finanças de maneira simples, proporcionando uma visão clara de suas receitas e dívidas.',
    icon: CheckIcon,
  },
  {
    name: 'Rápido.',
    description: 'Navegue de forma rápida entre todas as funcionalidades do sistema.',
    icon: CheckIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-56 sm:pb-24 sm:pt-24">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Finance App</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Gerencie as suas Finanças de um jeito prático.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
          />
        </div>
      </div>
    </div>
  )
}
