import { classNames } from '#/lib/utls'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowUpRight,
  Coins,
  Flame,
  GraduationCap,
  Hourglass,
  Palmtree,
  Target,
  TrendingUp,
  Wallet,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { useState } from 'react'
import FadeInAdvanced from '../elements/FadeInAdvanced'
import TextAnimation from '../elements/TextAnimation'
import { ChildEducationCalculator } from './calculators/ChildEducationCalculator'
import { CostOfDelayCalculator } from './calculators/CostOfDelayCalculator'
import { GoalPlannerCalculator } from './calculators/GoalPlannerCalculator'
import { InflationCalculator } from './calculators/InflationCalculator'
import { LumpsumCalculator } from './calculators/LumpsumCalculator'
import { RetirementCalculator } from './calculators/RetirementCalculator'
import { SipCalculator } from './calculators/SipCalculator'
import { SipStepUpCalculator } from './calculators/SipStepUpCalculator'
import { SwpCalculator } from './calculators/SwpCalculator'

export type CalcEntry = {
  id: string
  title: string
  subtitle: string
  desc: string
  icon: LucideIcon
  image: string
  animationDirection: 'fadeInLeft' | 'fadeInRight'
  animationDelay: number
  Component: ComponentType
}

const CALCS: CalcEntry[] = [
  {
    id: 'sip',
    title: 'SIP Calculator',
    desc: 'Grow wealth with monthly investments.',
    icon: TrendingUp,
    image: '/calculators/SIP-icon.png',
    subtitle: 'SIP Calculator',
    Component: SipCalculator,
    animationDirection: 'fadeInLeft',
    animationDelay: 100,
  },
  {
    id: 'stepup',
    title: 'SIP Step-Up',
    desc: 'Increase SIP yearly as income grows.',
    icon: ArrowUpRight,
    image: '/calculators/step-up.webp',
    subtitle: 'SIP Step-Up Calculator',
    Component: SipStepUpCalculator,
    animationDirection: 'fadeInLeft',
    animationDelay: 200,
  },
  {
    id: 'swp',
    title: 'SWP Calculator',
    desc: 'Plan steady withdrawals from a corpus.',
    icon: Wallet,
    image: '/calculators/SWP-icon.png',
    subtitle: 'SWP Calculator',
    Component: SwpCalculator,
    animationDirection: 'fadeInRight',
    animationDelay: 300,
  },
  {
    id: 'child',
    title: 'Child Education',
    desc: "Fund tomorrow's tuition starting today.",
    icon: GraduationCap,
    image: '/calculators/Education-icon.png',
    subtitle: 'Child Education Calculator',
    Component: ChildEducationCalculator,
    animationDirection: 'fadeInRight',
    animationDelay: 400,
  },
  {
    id: 'retire',
    title: 'Retirement',
    desc: "Estimate the corpus you'll need.",
    icon: Palmtree,
    image: '/calculators/Retirement-icon.png',
    subtitle: 'Retirement Calculator',
    Component: RetirementCalculator,
    animationDirection: 'fadeInLeft',
    animationDelay: 500,
  },
  {
    id: 'delay',
    title: 'Cost of Delay',
    desc: 'See what waiting really costs you.',
    icon: Hourglass,
    image: '/calculators/cost-of-delay.webp',
    subtitle: 'Cost of Delay Calculator',
    Component: CostOfDelayCalculator,
    animationDirection: 'fadeInLeft',
    animationDelay: 600,
  },
  {
    id: 'lump',
    title: 'Lumpsum',
    desc: 'Compound a one-time investment.',
    icon: Coins,
    image: '/calculators/lumpsum.webp',
    subtitle: 'Lumpsum Calculator',
    Component: LumpsumCalculator,
    animationDirection: 'fadeInRight',
    animationDelay: 700,
  },
  {
    id: 'goal',
    title: 'Goal Planner',
    desc: 'Find the SIP needed to hit a goal.',
    icon: Target,
    image: '/calculators/Goal-icon.png',
    subtitle: 'Goal Planner Calculator',
    Component: GoalPlannerCalculator,
    animationDirection: 'fadeInRight',
    animationDelay: 800,
  },
  {
    id: 'infl',
    title: 'Inflation',
    desc: "Convert today's money to tomorrow's.",
    icon: Flame,
    image: '/calculators/Inflation-icon.png',
    subtitle: 'Inflation Calculator',
    Component: InflationCalculator,
    animationDirection: 'fadeInLeft',
    animationDelay: 900,
  },
]

export default function Calculators() {
  const [selectedCalculator, setSelectedCalculator] =
    useState<CalcEntry | null>(null)

  return (
    <>
      <section className="project-page pb-0">
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h6 className="section-title__tagline">
              <span className="section-title__tagline-border"></span>Calculators
            </h6>
            <h3 className="section-title__title title-animation">
              <TextAnimation>Calculators</TextAnimation>
            </h3>
          </div>

          {/* <div className="row">
            {CALCS.map((calculator) => (
              <FadeInAdvanced
                key={calculator.id}
                className={`col-xl-3 col-lg-6 col-md-6`}
                variant={calculator.animationDirection}
                delay={calculator.animationDelay}
              >
                <div className="project-one__single">
                  <div className="project-one__img-box">
                    <div className="project-one__img">
                      <img
                        src={calculator.image}
                        width={300}
                        height={333}
                        alt={`${calculator.title}`}
                      />
                      <div className="project-one__arrow">
                        <a
                          href={'#'}
                          role="button"
                          className="img-popup"
                          aria-label={`View full image of ${calculator.title}`}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          title={calculator.title}
                          onClick={() => {
                            setSelectedCalculator(calculator)
                          }}
                        >
                          <span className="icon-arrow-right"></span>
                        </a>
                      </div>
                    </div>
                    <div className="project-one__content">
                      <h3 className="project-one__title">
                        {calculator.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </FadeInAdvanced>
            ))}
          </div> */}

          <div className="row">
            {CALCS.map((calculator) => (
              <FadeInAdvanced
                key={calculator.id}
                className="col-xl-3 col-lg-6 col-md-6"
                variant={calculator.animationDirection}
                delay={calculator.animationDelay}
              >
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div
                      className={classNames(
                        'team-one__img',
                        'p-2 p-sm-3 p-md-4 p-lg-5 border-0',
                      )}
                      style={{ display: 'flex' }}
                    >
                      {/* <img src={member.image} width={278} alt={member.name} /> */}
                      <img
                        src={calculator.image}
                        width={100}
                        height={100}
                        alt={calculator.title}
                        className="object-fit-contain"
                        style={{
                          height: '100px',
                          width: '100px',
                          margin: '0 auto',
                          borderRadius: 0,
                        }}
                      />
                    </div>
                  </div>
                  <div className="team-one__content">
                    <div className="team-one__title-box">
                      <h3 className="team-one__title fs-5">
                        <a href="#">{calculator.title}</a>
                      </h3>
                      {/* <div className="team-one__sub-title">{member.role}</div> */}
                    </div>
                    <div className="team-one__share-and-social">
                      <button
                        className="team-one__share"
                        style={{ border: 'none' }}
                        aria-label={`View full image of ${calculator.title}`}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        title={calculator.title}
                        onClick={() => {
                          setSelectedCalculator(calculator)
                        }}
                      >
                        <span className="fas fa-plus"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </FadeInAdvanced>
            ))}
          </div>
        </div>
        {/* <Lightbox
        open={openLightBox}
        close={() => setOpenLightBox(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
      /> */}

        <CalculatorModal activeCalculator={selectedCalculator} />
      </section>
    </>
  )
}

function CalculatorModal({
  activeCalculator,
}: {
  activeCalculator: CalcEntry | null
}) {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <div className={'d-flex flex-column'}>
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {activeCalculator
                    ? `${activeCalculator.title} `
                    : 'No Calculator Selected'}
                </h1>
                {activeCalculator && (
                  <p className="modal-description">{activeCalculator.desc}</p>
                )}
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                {activeCalculator ? <activeCalculator.Component /> : null}
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
