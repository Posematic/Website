import Image from "next/image";
import { PAGE_EDGE } from "@/app/lib/pageLayout";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  imageAlt: string;
  founder?: boolean;
};

const team: TeamMember[] = [
  {
    name: "Craig Mellor",
    role: "Co-founder",
    bio: "AI @ CMU. Created the project. Worked on all aspects, from the brush engine, sketch to pose pipeline, backend, etc.",
    imageSrc: "/images/craig.jpeg",
    imageAlt: "Portrait for Craig Mellor",
    founder: true,
  },
  {
    name: "Daniel Yang",
    role: "Co-founder",
    bio: "CS @ UMD College Park, involved in developing visualization systems for Posematic's model-backend, app front-end, system design, and design lead.",
    imageSrc: "/images/team-placeholder.svg",
    imageAlt: "Portrait placeholder for Daniel Yang",
    founder: true,
  },
  {
    name: "Ritvik Gupta",
    role: "Co-founder",
    bio: "AI&CS @ CMU and UoE. Worked on the sketch-to-pose pipeline, brush and 3D engine, design and business operations. Certified dork.",
    imageSrc: "/images/vik.png",
    imageAlt: "Portrait placeholder for Ritvik Gupta",
    founder: true,
  },
  {
    name: "Nicholas Mino",
    role: "Co-founder",
    bio: "AI @ CMU. Co-founder of Posematic, building core ML systems, production inference, frontend, authentication, and the interactive 3D editor, while helping drive product design and business strategy.",
    imageSrc: "/images/nmino_headshot.jpg",
    imageAlt: "Portrait placeholder for Nick Mino",
    founder: true,
  },
  {
    name: "Ivan Zhang",
    role: "Fullstack Engineer",
    bio: "CS @ CMU. Worked on sketch-to-pose pipeline, data generation, and 3D viewer.",
    imageSrc: "/images/ivan.jpeg",
    imageAlt: "Portrait placeholder for Ivan Zhang",
  },
];

function MemberCard({
  member,
  className = "",
}: {
  member: TeamMember;
  className?: string;
}) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] surface-matte shadow-[0_20px_60px_rgba(10,5,40,0.35)] ${className}`}
    >
      {/* Smaller, equal portrait frames; width-capped so all match */}
      <div className="flex justify-center px-4 pt-5 sm:px-5 sm:pt-6">
        <div className="relative aspect-[3/4] w-full max-w-[148px] overflow-hidden rounded-xl bg-gradient-to-b from-[#1a1535] to-[var(--color-bg-card-dark)] sm:max-w-[168px]">
          <Image
            src={member.imageSrc}
            alt={member.imageAlt}
            fill
            className="object-cover object-top"
            sizes="168px"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-4 pb-5 pt-4 sm:px-5 sm:pb-6 sm:pt-5">
        <h3 className="text-base font-semibold text-white sm:text-lg">
          {member.name}
        </h3>
        <p className="mt-1 text-xs font-medium text-[var(--color-brand-highlight)] sm:text-sm">
          {member.role}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {member.bio}
        </p>
      </div>
    </article>
  );
}

export function Team() {
  const founders = team.filter((member) => member.founder);
  const nonFounders = team.filter((member) => !member.founder);

  return (
    <section
      id="team"
      className={`relative scroll-mt-5 py-16 sm:scroll-mt-5 lg:py-24 ${PAGE_EDGE}`}
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Team
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
          Developers who care about the craft as much as the code, with backgrounds
          in graphics, ML, and real-time 3D. We&apos;re a small team, but with a focused roadmap: Posematic.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {founders.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>

        {nonFounders.length > 0 && (
          <div className="mt-6 flex justify-center">
            <MemberCard
              member={nonFounders[0]}
              className="w-full sm:max-w-[calc(50%-0.75rem)]"
            />
          </div>
        )}
        {/* <header className="justifyContent-center">
          <p className="mt-4 max-w-2xl text-sm text-[var(--color-text-secondary)]">
            Disclaimer: Order is of when each individual joined the project
          </p>
        </header> */}
      </div>
    </section>
  );
}