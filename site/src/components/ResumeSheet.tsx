import { Children, isValidElement, type ReactNode } from "react";

function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="resume-label font-display text-accent-text">{children}</h2>
  );
}

function Mark({ children }: { children: ReactNode }) {
  return <span className="resume-mark text-text font-semibold">{children}</span>;
}

function Job({
  company,
  role,
  dates,
  children,
}: {
  company: string;
  role: string;
  dates: string;
  children: ReactNode;
}) {
  return (
    <section className="resume-job">
      <h3 className="resume-company font-display text-text">{company}</h3>
      <p className="resume-job-role font-display text-text">{role}</p>
      <p className="resume-job-dates font-sans text-text-muted">{dates}</p>
      <div className="resume-body font-display space-y-3 text-text-secondary">
        {Children.map(children, (child) =>
          isValidElement<{ children?: ReactNode; className?: string }>(child) ? (
            <p className={child.props.className}>
              <span className="resume-tick" aria-hidden="true" />
              {child.props.children}
            </p>
          ) : (
            child
          ),
        )}
      </div>
    </section>
  );
}

export default function ResumeSheet() {
  return (
    <article className="resume-sheet">
      <div className="resume-grid grid grid-cols-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(15rem,0.72fr)] gap-x-16 gap-y-12 items-start">
        <header className="resume-masthead">
          <p className="font-display text-[1.75rem] font-bold leading-none tracking-[-0.03em] text-text">
            xiao song<span className="resume-period">.</span>
          </p>
          <p className="resume-kicker mt-1.5 font-display text-text-secondary">
            Product designer · 8+ years
          </p>
        </header>
        <div className="resume-main">
          <SectionLabel>Experience</SectionLabel>
          <div className="resume-jobs mt-6 space-y-8">
            <Job
              company="Meta"
              role="Sr. Product Designer, Tundra Technical"
              dates="November 2025 – September 2026"
            >
              <p>
                Supported bringing WhatsApp marketing messages into{" "}
                <Mark>WhatsApp Manager</Mark>, Meta’s own tool in Meta Business
                Suite, for small and medium businesses.
              </p>
              <p>
                Visualized how <Mark>Meta’s business agent</Mark> would
                collaborate with a business on strategy, build, and delivery,
                including a first try for a business new to the tools.
              </p>
              <p>
                Narrowed developer onboarding through the API from{" "}
                <Mark>44 steps across five surfaces to 17 steps on one</Mark>.
              </p>
              <p>
                Designed onboarding and creation for WhatsApp marketing
                messages on <Mark>Shopify and WooCommerce</Mark>.
              </p>
            </Job>

            <Job
              company="DoorDash"
              role="Sr. Product Designer"
              dates="April 2025 – August 2025"
            >
              <p>
                Designed DoorDash’s <Mark>first Parcels product</Mark>, bringing
                separate manual workflows into one web and mobile tool for
                frontline logistics.
              </p>
            </Job>

            <Job
              company="Meta"
              role="Sr. Product Designer, TEKsystems"
              dates="October 2022 – September 2024"
            >
              <p>
                Supported the end-to-end integration of WhatsApp marketing
                messages into ads creation in Ads Manager, projected to add{" "}
                <Mark>$1.4B in revenue by 2026</Mark>.
              </p>
              <p>
                Joined a small design team for the opening sprint, then led{" "}
                <Mark>budgeting and post-creation reporting</Mark> with the
                vertical ads, marketing messages, and metrics teams.
              </p>
            </Job>

            <Job
              company="LiveControl"
              role="Lead Product Designer"
              dates="August 2021 – September 2022"
            >
              <p>
                Led <Mark>Studio</Mark>, software for remote control of PTZ
                cameras, from discovery through product-market fit and a{" "}
                <Mark>$30M Series A</Mark>. Operators could follow people and
                cut between cameras at a venue, without a full production crew.
              </p>
              <p>
                Set the <Mark>design system</Mark> for product and marketing,
                leading the graphic, brand, and visual designers on it.
              </p>
            </Job>

            <Job
              company="Walmart Labs"
              role="Sr. Product Designer"
              dates="July 2019 – August 2021"
            >
              <p>
                Led modular search on Walmart.com from idea through test to
                launch. <Mark>Top Picks and inline filters</Mark> cut the path
                to cart by <Mark>about 30%</Mark>, from about 20 clicks to
                about 14.
              </p>
              <p>
                Designed a pre-checkout tipping step, and tip rates rose by{" "}
                <Mark>more than 20%</Mark>.
              </p>
              <p>
                Launched traceable tender so in-store receipts joined the
                online account for <Mark>37M+ customers</Mark>.
              </p>
              <p>
                Led fulfillment in the app across pickup, warehouse shipment,
                and store delivery, so a shopper could see whether an item came
                from a store or a warehouse, for groceries and the rest of the
                online inventory.
              </p>
            </Job>

            <Job
              company="Awake"
              role="User Experience Designer"
              dates="August 2017 – July 2019"
            >
              <p>
                Designed Kering store-app features for{" "}
                <Mark>20K+ associates</Mark>, and helped lead the redesign of
                Plume’s customer site after its Series B.
              </p>
            </Job>
          </div>
        </div>

        <aside className="resume-aside space-y-10">
          <section className="resume-bio">
            <SectionLabel>Bio</SectionLabel>
            <p className="resume-summary font-display text-text-secondary">
              I like solving complex problems. I collaborate with AI agents
              to simplify the work, so more of my time goes to my team and to
              what matters most for our users. I love skiing, golf, and
              basketball.
            </p>
          </section>
          <section>
            <SectionLabel>Education</SectionLabel>
            <div className="mt-4">
              <p className="resume-company resume-school font-display text-text">
                Rhode Island School of Design
              </p>
              <p className="resume-detail font-display text-text-secondary">
                BFA, Industrial Design, class of 2017
              </p>
            </div>
          </section>

          <section>
            <SectionLabel>Skills</SectionLabel>
            <div className="resume-skills mt-4">
              <p className="resume-detail font-display text-text-secondary">
                I still use <Mark>Figma</Mark> for the system and the states.
              </p>
              <p className="resume-detail font-display text-text-secondary">
                Wherever I can, I collaborate with <Mark>AI agents</Mark> on
                the work that doesn’t need me all day: HTML and CSS, specs,
                and the files that used to live in Framer, Zeplin, Adobe, Jira,
                and Confluence.
              </p>
            </div>
          </section>

          <section>
            <SectionLabel>Contact</SectionLabel>
            <div className="resume-contact mt-4 space-y-2 font-display text-text-secondary">
              <p>
                <a
                  href="tel:+16262038927"
                  className="hover:text-accent-text transition-colors"
                  data-hover
                >
                  (626) 203 8927
                </a>
              </p>
              <p>
                <a
                  href="mailto:songxiao16@gmail.com"
                  className="hover:text-accent-text transition-colors"
                  data-hover
                >
                  songxiao16@gmail.com
                </a>
              </p>
              <span className="resume-corner" aria-hidden="true" />
            </div>
          </section>
        </aside>
      </div>
    </article>
  );
}
