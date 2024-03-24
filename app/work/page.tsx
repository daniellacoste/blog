import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        experience 
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          <Link href="https://www.trucksmarter.com">TruckSmarter</Link>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Support Engineer (Mobile Platform) • 2022 — Present
        </p>
        <p>
          TruckSmarter is building the financial operating system for America's
          independent owner-operators. Since joining, the TruckSmarter platform
          has grown to include multiple products (Load Board, Factoring,
          Banking, Fuel) that are used by hard-working carriers all across the
          United States. I am proud to be a part of a passionate team that is
          helping owner-operators succeed on the road. Working at a startup is
          the optimal way to be responsible for many things — here is a list of
          the many hats I've worn at TruckSmarter:
        </p>
        <ul>
          <li>
            I am responsible for managing the weekly release of the TruckSmarter
            mobile app for both the Apple App Store and Google Play Store.
          </li>
          <li>
            I work cross-functionally with engineering and design to ensure a high
            quality UX is maintained across versions.
          </li>
          <li>
            Core maintainer of TruckSmarter's <Link
            href="https://github.com/storybookjs/react-native">Storybook React
            Native</Link> component library.
          </li>
          <li>
            Actively contribute to the design system by improving our components
            at the <Link
            href="https://atomicdesign.bradfrost.com/table-of-contents/">atomic
            level</Link> — I am especially interested in the organization of
            typography, colors, spacing, and more.
          </li>
          <li>
            Act as an escalation support engineer for the user operations team
            across all TruckSmarter products.
          </li>
          <li>
            I am the administrator of our 900+ member <Link
            href="https://discord.gg/trucksmarter">Discord community</Link> and
            the weekly moderator for a live Q&A with users to learn more about
            their lives and gather product feedback.
          </li>
        </ul>
        <p>
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          <Link href="https://www.plaid.com">Plaid</Link>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Solutions Engineer • 2021 — 2022
        </p>
        <p>
          In 2021, I moved to the Solutions Engineering to continue my work as a
          Plaid product expert. I provided hands-on support for customers new to
          Plaid, from receiving their API keys all the way to shipping production
          traffic.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Developer Support Engineer • 2017 — 2021
        </p>
        <p>
          I joined Plaid in 2017 to support thousands of developers building
          with the Plaid API and SDK. I worked closely with the product and
          engineering teams to triage customer issues and report bugs. I helped
          grow the Developer Support team from 2 to 10 team members. As a team
          lead, I was responsible for training and mentoring new team members,
          as well as improving processes to ensure our team would succeed as
          Plaid scaled from 100 to 1,000+ employees.
        </p>
        <p>
          Plaid's culture was the highlight of my 4.5 years — I was so fortunate
          to work with a world-class team! I shared more about my experience on
          the <Link
          href="https://plaid.com/blog/daniel-lacoste-on-the-reward-of-helping-others/">official
          Plaid blog</Link>.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          <Link href="https://www.nintendo.com/">Nintendo of Canada</Link>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Brand Ambassador • 2017
        </p>
        <p>
          After the Nintendo Switch launched on March 3rd, 2017, I was lucky
          enough to join the team to promote and demo the Nintendo Switch at
          various events across Canada. My main responsibility was to create
          smiles by sharing the Nintendo experience across the country!
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          <Link href="https://www.bravurasecurity.com/">Bravura Systems</Link> 
          <span className="font-medium text-base mb-1 tracking-tighter">
            {' '}(fka Hitachi ID Systems)
          </span>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Support Engineer (Internship) • 2015 — 2016 
        </p>
        <p>
          My first and only internship where I learned how to provide
          high-quality support for enterprise tech companies. I was lucky to
          learn from a team of seasoned customer support experts who taught me
          the skills, tools, and principles that I continue to use today as a
          support engineer... <span className="font-mono font-extrabold">:wq</span>
        </p>
      </div>
    </section>
  );
}
