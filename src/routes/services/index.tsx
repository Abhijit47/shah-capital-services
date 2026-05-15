import { createFileRoute } from '@tanstack/react-router'

import { ZohoServiceForm } from '#/components/convert.tsx'
import Banner from '#/features/banner/Banner'
import type { AnimationVariant } from '@/components/elements/FadeInAdvanced'
import FadeInAdvanced from '@/components/elements/FadeInAdvanced'
import { useState } from 'react'

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
        <section className="contact-page">
          <div className="container">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title fw-bold">Get A Free Quote</h3>
                <hr />
                <ZohoServiceForm />
              </div>
            </div>
          </div>
        </section>
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
  desc: Array<string>
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
    desc: [
      `Mutual funds are one of the most effective ways to build long-term wealth through
professionally managed and diversified investments. At Shah Capital Services, we help
individuals, families, and business owners identify mutual fund solutions aligned with their
financial goals, investment horizon, and risk appetite.`,
      `Whether you are looking to start SIPs, create long-term wealth, plan for retirement, or
optimise your portfolio, we provide structured mutual fund investment guidance designed
around your financial objectives.`,
      `Our services include SIP investments, lump sum investments, equity mutual funds, debt
funds, hybrid funds, ELSS tax-saving funds, portfolio reviews, and goal-based investment
planning. We focus on creating disciplined investment strategies that support long-term
financial growth while helping investors navigate market opportunities with confidence.`,
      `At Shah Capital Services, our approach is personalized, research-driven, and focused on long-
term wealth creation through structured financial planning and continuous portfolio
monitoring.`,
      `Start your mutual fund investment journey with Shah Capital Services and build a portfolio
aligned with your financial future.`,
    ],
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
    desc: [
      `Equity investments can play an important role in long-term wealth creation when approached
with discipline and proper market understanding. At Shah Capital Services, we help investors
participate in stock market opportunities through structured investment guidance and
strategic portfolio planning.`,
      `We assist clients in navigating equity markets, securities investments, and diversified market-
linked opportunities based on their financial goals, investment horizon, and risk profile.`,
      `Our services include equity investment guidance, demat and trading account assistance, IPO
investments, bonds, commodities, thematic investments, Equity SIP plans, and portfolio
tracking support. Investors also gain access to research-backed insights and digital
investment platforms designed to simplify investing and long-term portfolio management.`,
      `Our investment philosophy focuses on disciplined investing, diversification, long-term wealth
creation, and structured financial planning tailored to each investor’s financial objectives.`,
      `Build a structured equity portfolio with guidance from Shah Capital Services.`,
    ],
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
    desc: [
      `Insurance plays a critical role in protecting individuals, families, assets, and businesses
against financial uncertainties. At Shah Capital Services, we help clients identify suitable
insurance solutions based on their financial responsibilities, lifestyle requirements, and long-
term protection goals.`,
      `Our insurance solutions include life insurance, health insurance, vehicle insurance, travel
insurance, mediclaim policies, personal accident insurance, overseas mediclaim coverage,
burglary insurance, household insurance, shopkeepers policies, money insurance, and other
miscellaneous insurance products designed to provide comprehensive financial protection.`,
      `Health insurance helps reduce the financial burden arising from medical expenses and
hospitalisation costs, while life insurance supports long-term family protection and income
security. Vehicle insurance provides financial protection against theft, accidental damages,
and third-party liabilities. Travel insurance offers coverage against travel-related disruptions,
emergencies, and unforeseen expenses during domestic or international travel.`,
      `At Shah Capital Services, we focus on personalized guidance, transparent processes, and
structured protection planning to help clients choose insurance solutions aligned with their
specific needs and financial goals.`,
      `Protect your future with comprehensive insurance solutions from Shah Capital Services.`,
    ],
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
    desc: [
      `GIFT City (Gujarat International Finance Tec-City) has emerged as India’s international
financial hub offering access to global investment opportunities, foreign currency-based
investments, and internationally structured financial products.`,
      `At Shah Capital Services, we help eligible investors explore investment opportunities
available through GIFT City structures while understanding the associated regulatory
framework, diversification benefits, and global market exposure.`,
      `These investment opportunities provide access to international financial markets, portfolio
diversification beyond domestic investments, and exposure to global investment ecosystems
through structured financial solutions.`,
      `Our approach focuses on aligning global investment opportunities with each investor’s
financial goals, risk appetite, and long-term wealth strategy.`,
      `Explore global investment opportunities through GIFT City with Shah Capital Services.`,
    ],
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
    desc: [
      `Fixed deposits continue to remain a preferred investment option for investors seeking
stability, predictable returns, and capital protection. At Shah Capital Services, we help clients
identify fixed deposit solutions suited to their financial goals, liquidity requirements, and
investment horizon.`,
      `We assist investors in evaluating fixed income options across different tenures and financial
institutions to support structured financial planning and stable wealth preservation.`,
      `Our offerings include company fixed deposits, fixed maturity plans (FMPs), debentures, 54EC
bonds, and other fixed income investment solutions designed to provide stable and efficient
investment opportunities.`,
      `Fixed deposits and fixed income products are suitable for investors looking for comparatively
lower market volatility, predictable returns, and capital preservation-focused investment
strategies. Certain products may also offer tax efficiency and flexible tenure options based on
investment objectives.`,
      `At Shah Capital Services, we provide personalized fixed income guidance and structured
investment support designed around your financial objectives and liquidity preferences.`,
      `Secure your investments with fixed deposit solutions tailored to your financial needs.`,
    ],
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
    desc: [],
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
    desc: [],
    path: '/services/health-insurance',
    animationClass: 'flipInY',
    animationDelay: 1000,
  },
]

const ServicesSec: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  )

  return (
    <>
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
                  <p className="services-three__sub-title">
                    {service.subTitle}
                  </p>
                  <h3 className="services-three__title">
                    <a
                      role={'button'}
                      data-bs-toggle="modal"
                      data-bs-target="#serviceModal"
                      onClick={() => setSelectedService(service)}
                    >
                      {service.title}
                    </a>
                  </h3>
                  <p className="services-three__text">{service.text}</p>
                  <a
                    className="services-three__learn-more"
                    role={'button'}
                    data-bs-toggle="modal"
                    data-bs-target="#serviceModal"
                    onClick={() => setSelectedService(service)}
                  >
                    Learn More<span className="icon-arrow-right"></span>
                  </a>
                </div>
              </FadeInAdvanced>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal service={selectedService} />
    </>
  )
}

function ServiceModal({ service }: { service: ServiceItem | null }) {
  return (
    <div
      className="modal fade"
      id="serviceModal"
      tabIndex={-1}
      aria-labelledby="serviceModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {service ? service.title : 'Service Details'}
              </h1>
              <p className="text-muted">{service ? service.text : ''}</p>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {service && service.desc.length <= 0 ? (
              <p className={'text-danger fw-3 fs-2'}>No Content Provided Yet</p>
            ) : (
              <>
                {service?.desc.map((paragraph, index) => (
                  <p key={index} className={'mb-2'}>
                    {paragraph}
                  </p>
                ))}
              </>
            )}
          </div>
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}
