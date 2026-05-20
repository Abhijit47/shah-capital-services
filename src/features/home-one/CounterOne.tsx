import CounterUp from '@/components/elements/CounterUp'
import JarallaxSection from '@/components/elements/JarallaxSection'
import { ClientOnly } from '@tanstack/react-router'
import counterOneBg from '/assets/images/backgrounds/counter-one-bg.jpg'

interface CounterItem {
  id: number
  iconClass: string
  count: number
  suffix: string
  label: string
}

const counterItems: CounterItem[] = [
  {
    id: 1,
    iconClass: 'icon-project-complete',
    count: 20,
    suffix: '+',
    label: 'years in wealth',
  },
  {
    id: 2,
    iconClass: 'icon-technician-1',
    count: 1000,
    suffix: '+',
    label: 'active investors',
  },
  {
    id: 3,
    iconClass: 'icon-happy-customer',
    count: 400,
    suffix: '+',
    label: 'families services',
  },
]

const CounterOne: React.FC = () => {
  return (
    <div className={'feature-one pb-0 p-0'}>
      <JarallaxSection
        className="counter-one process-two"
        imgSrc={counterOneBg}
        overlayOpacity={0.8}
      >
        <div className="container mx-auto">
          <ul className="row list-unstyled">
            {counterItems.map((item) => (
              <li key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className={item.iconClass}></span>
                  </div>
                  <div className="counter-one__count-box">
                    <h3 className="odometer">
                      <ClientOnly fallback={null}>
                        <CounterUp ending={item.count} />
                      </ClientOnly>
                    </h3>
                    <span>{item.suffix}</span>
                  </div>
                  <p className="counter-one__count-text">{item.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </JarallaxSection>
    </div>
  )
}

export default CounterOne
