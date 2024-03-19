import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work',
};

export default function Page() {
  return (
    <section>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          A computer scientist with a passion for customer success, mobile apps,
          developer experience, and design engineering.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">TruckSmarter</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Support Engineer (Mobile Platform)
        </p>
        <p>
          TruckSmarter is building the financial operating system for America's
          independent owner-operators. I joined <Link
          href="https://www.trucksmarter.com">TruckSmarter</Link> in 2022 to
          manage the weekly release of the TruckSmarter mobile app. I work
          closely with engineering, product, design, and operations to ensure
          the app is released without bugs or regressions every week.  I support
          our user operations team to troubleshoot and triage user issues.
        </p>
        <p>
          Since I joined TruckSmarter in 2022, the platform has grown to include
          multiple products (Load Board, Factoring, Fuel) that are used by
          hard-working carriers all across the United States. I am proud to be a
          part of a passionate team that is helping owner-operators succeed on
          the road.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Plaid</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Technical Support Engineer • 2017 — 2021
        </p>
        <p>
          I joined Plaid in 2017 to support thousands of developers building
          with the Plaid API and SDK. I worked closely with the product and
          engineering teams to triage customer issues and report bugs.
        </p>
        <p>
          I helped grow the Developer Support team from a team of 2 to a team of
          10. As a team lead, I was responsible for training and mentoring new team
          members, as well as creating internal documentation to ensure our team
          could succeed as Plaid scaled.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Solutions Engineer • 2021 — 2022
        </p>
          I joined the Solutions Engineering team in 2021 to continue my work as
          a Plaid product expert. I provided hands-on support for customers that
          were in the early stages of their Plaid integration by guiding them
          from receiving their API keys all the way to shipping production traffic.
        <p>
          Plaid's culture was the highlight of my 4.5 years — I was so lucky to
          work with a world-class team! I shared more about my experience on the <Link
          href="https://plaid.com/blog/daniel-lacoste-on-the-reward-of-helping-others/">official
          Plaid blog</Link>.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Nintendo of Canada</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Brand Ambassador • 2017
        </p>
        <p>
          After the Nintendo Switch launched on March 3rd, 2017, I was lucky
          enough to join the team to promote and demo the Nintendo Switch at
          various events across Canada. My main responsibility was to create
          smiles by sharing the Nintendo experience across the country!
        </p>
      </div>
    </section>
  );
}
