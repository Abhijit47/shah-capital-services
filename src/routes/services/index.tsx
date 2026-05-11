import { createFileRoute, Link } from '@tanstack/react-router'

import Banner from '#/features/banner/Banner'
import type { AnimationVariant } from '@/components/elements/FadeInAdvanced'
import FadeInAdvanced from '@/components/elements/FadeInAdvanced'

export const Route = createFileRoute('/services/')({
  head: () => ({
    meta: [
      {
        title: 'Services | Shah Capital Services',
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <div className="page-wrapper">
        <Banner title="Services" subTitle="Services" />
        <ServicesSec />
      </div>
    </main>
  )
}

interface ServiceItem {
  id: number
  iconClass: string
  subTitle: string
  title: string
  text: string
  path: string
  animationClass: AnimationVariant
  animationDelay: number
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    iconClass: 'icon-socket',
    subTitle: 'Service Type 1',
    title: 'Mutual Funds',
    text: 'Disciplined, goal-based investing — not product selection.',
    path: '/services/mutual-funds',
    animationClass: 'fadeInLeft',
    animationDelay: 100,
  },
  {
    id: 2,
    iconClass: 'icon-ceiling-lamp',
    subTitle: 'Service Type 2',
    title: 'Stocks & Securities',
    text: 'Direct equity, approached with discipline — not speculation.',
    path: '/services/stocks-securities',
    animationClass: 'fadeInUp',
    animationDelay: 300,
  },
  {
    id: 3,
    iconClass: 'icon-ceiling-lamp-2',
    subTitle: 'Service Type 3',
    title: 'Insurance',
    text: 'Start with protection. Stay protected.',
    path: '/services/insurance',
    animationClass: 'fadeInRight',
    animationDelay: 500,
  },
  {
    id: 4,
    iconClass: 'icon-laptop',
    subTitle: 'Service Type 4',
    title: 'Gift City',
    text: 'Global investing, structured through India.',
    path: '/services/gift-city',
    animationClass: 'fadeInLeft',
    animationDelay: 700,
  },
  {
    id: 5,
    iconClass: 'icon-ac1',
    subTitle: 'Service Type 5',
    title: 'Fixed Deposit',
    text: 'Stability where it is needed.',
    path: '/services/fixed-deposit',
    animationClass: 'fadeInUp',
    animationDelay: 900,
  },
  {
    id: 6,
    iconClass: 'icon-air-conditioning',
    subTitle: 'Service Type 6',
    title: 'Life Insurance',
    text: 'Financial protection for your family — nothing more, nothing less.',
    path: '/services/life-insurance',
    animationClass: 'fadeInRight',
    animationDelay: 1000,
  },
  {
    id: 7,
    iconClass: 'icon-air-conditioning',
    subTitle: 'Service Type 7',
    title: 'Health Insurance',
    text: 'Protect your savings from medical uncertainty.',
    path: '/services/health-insurance',
    animationClass: 'flipInY',
    animationDelay: 1000,
  },
]

const ServicesSec: React.FC = () => {
  return (
    <section className="services-page">
      <div className="container">
        <div className="row">
          {servicesData.map((service) => (
            <FadeInAdvanced
              key={service.id}
              className={`col-xl-4 col-lg-4`}
              variant={service.animationClass}
              delay={service.animationDelay}
            >
              <div className="services-three__single">
                <div className="services-three__icon">
                  <span className={service.iconClass}></span>
                </div>
                <p className="services-three__sub-title">{service.subTitle}</p>
                <h3 className="services-three__title">
                  <Link to={service.path}>{service.title}</Link>
                </h3>
                <p className="services-three__text">{service.text}</p>
                <Link to={service.path} className="services-three__learn-more">
                  Learn More<span className="icon-arrow-right"></span>
                </Link>
              </div>
            </FadeInAdvanced>
          ))}
        </div>
      </div>
    </section>
  )
}
