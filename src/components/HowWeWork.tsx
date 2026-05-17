import FadeInAdvanced from '@/components/elements/FadeInAdvanced'
import TextAnimation from '@/components/elements/TextAnimation'
import type { ReactNode } from 'react'
import processTwoShape1 from '/assets/images/shapes/process-two-shape-1.png'

interface ProcessItem {
  id: number
  icon: ReactNode
  title: string
  text: string
  animation: string
}

const processItems: ProcessItem[] = [
  {
    id: 1,
    icon: <i className="fa-regular fa-comment-dots"></i>,
    title: 'We discuss First ',
    text: 'We begin by understanding your life, goals, and concerns — not your money.',
    animation: 'fadeInLeft',
  },
  {
    id: 2,
    icon: <i className="fa-solid fa-chalkboard-user"></i>,
    title: 'Educate Next',
    text: 'We simplify your options so you can make clear, informed decisions without pressure.',
    animation: 'fadeInRight',
  },
  {
    id: 3,
    icon: <i className="fa-solid fa-people-line"></i>,
    title: 'Execute Together',
    text: 'Every step is implemented with your consent, aligned to a structured long-term plan.',
    animation: 'fadeInLeft',
  },
]

export default function HowWeWork() {
  return (
    <section className="process-two">
      <FadeInAdvanced
        className="process-two__shape-1"
        variant="slideInLeft"
        delay={100}
      >
        <img
          src={processTwoShape1}
          style={{ width: 'auto', height: 'auto' }}
          alt="Decorative shape"
          className="float-bob-x"
        />
      </FadeInAdvanced>

      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <h6 className="section-title__tagline">
            <span className="section-title__tagline-border"></span>
            How we work
          </h6>
          <h3 className="section-title__title title-animation">
            <TextAnimation>
              We use the most effective methods
              <br /> to build a brand
            </TextAnimation>
          </h3>
        </div>

        <div className="process-two__inner">
          <ul className="list-unstyled row">
            {processItems.map((item) => (
              <li
                key={item.id}
                className={`col-xl-4 col-lg-4 wow ${item.animation}`}
                data-wow-delay="100ms"
              >
                <div className="process-two__single">
                  <div className="process-two__count"></div>
                  <div className="process-two__icon">
                    <span>{item.icon}</span>
                    {/* <span className={item.icon}></span> */}
                  </div>
                  <h3 className="process-two__title">{item.title}</h3>
                  <p className="process-two__text">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
