import FadeInAdvanced from '#/components/elements/FadeInAdvanced'
import type { TeamMember } from '#/contents/team/team'
import { teamMembers } from '#/contents/team/team'
import Banner from '#/features/banner/Banner'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(pages)/team')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Team" subTitle="Team" />
      <section className="team-page">
        <div className="container">
          <div className="row">
            {teamMembers.map((member: TeamMember) => (
              <FadeInAdvanced
                key={member.id}
                className={`col-xl-3 col-lg-6 col-md-6`}
                delay={member.animationDelay}
                variant={member.animationDirection}
              >
                <div className="team-two__single">
                  <div className="team-two__img-box">
                    <div className="team-two__img">
                      <img
                        src={member.image}
                        width={300}
                        height={250}
                        alt={`${member.name} - ${member.role}`}
                      />
                    </div>
                  </div>
                  <div className="team-two__content">
                    <div className="team-two__social">
                      <a href="#" title="Facebook">
                        <span className="icon-facebook"></span>
                      </a>
                      <a href="#" title="Twitter">
                        <span className="icon-instagram"></span>
                      </a>
                      <a href="#" title="LinkedIn">
                        <span className="icon-link-in"></span>
                      </a>
                      <a href="#" title="Email">
                        <span className="icon-xpa"></span>
                      </a>
                    </div>
                    <h3 className="team-two__title">
                      <a href="/team-details">{member.name}</a>
                    </h3>
                    <p className="team-two__sub-title">{member.role}</p>
                  </div>
                </div>
              </FadeInAdvanced>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
