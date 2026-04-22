import Image from "next/image";
import {
  SECTION_EDGE,
  SECTION_H2,
  SECTION_LEDE,
  SECTION_PY,
} from "@/app/lib/pageLayout";

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
    bio: "AI @ CMU. Initiated and created the project. Worked on all aspects, from the brush engine, sketch to pose pipeline, backend, etc.",
    imageSrc: "/images/craig.jpeg",
    imageAlt: "Portrait for Craig Mellor",
    founder: true,
  },
  {
    name: "Daniel Yang",
    role: "Co-founder",
    bio: "CS @ UMD College Park. Built visualization systems for ML backend, brush engine, system design, front-end brainstorming and devlopment, and design/UI-UX lead.",
    imageSrc: "/images/daniel_pfp.jpg",
    imageAlt: "Portrait placeholder for Daniel Yang",
    founder: true,
  },
  {
    name: "Ritvik Gupta",
    role: "Fullstack Engineer & Product Designer",
    bio: "AI & CS @ CMU and UoE. Worked on the sketch-to-pose pipeline, brush and 3D engine, design and business operations. Certified dork.",
    imageSrc: "/images/vik.png",
    imageAlt: "Portrait placeholder for Ritvik Gupta",
    founder: true,
  },
  {
    name: "Nicholas Mino",
    role: "Fullstack Engineer & Product Designer",
    bio: "AI @ CMU. Building core ML systems, production inference, frontend, authentication, and the interactive 3D editor, while helping drive product design and business strategy.",
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
      <div className="flex justify-center px-4 pt-4 sm:px-5 sm:pt-5">
        <div className="relative aspect-[3/4] w-full max-w-[132px] overflow-hidden rounded-xl bg-gradient-to-b from-[#1a1535] to-[var(--color-bg-card-dark)] sm:max-w-[148px] laptop:max-w-[152px] desktop:max-w-[164px] wide:max-w-[180px]">
          <Image
            src={member.imageSrc}
            alt={member.imageAlt}
            fill
            className="object-cover object-top"
            sizes="152px"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3 sm:px-7 sm:pb-5 sm:pt-4">
        <h3 className="text-base font-semibold text-white sm:text-[1.0625rem] desktop:text-lg wide:text-xl">
          {member.name}
        </h3>
        <p className="mt-1 text-xs font-medium text-[var(--color-brand-highlight)] sm:text-[0.8125rem] desktop:text-sm">
          {member.role}
        </p>
        <p className="mt-2 text-[0.8125rem] leading-relaxed text-[var(--color-text-secondary)] sm:text-sm desktop:text-[0.9375rem] wide:text-base">
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
      className={`relative scroll-mt-5 sm:scroll-mt-5 ${SECTION_PY} ${SECTION_EDGE}`}
    >
      <div className="mx-auto w-full max-w-5xl desktop:max-w-5xl wide:max-w-6xl">
        <h2 className={SECTION_H2}>Team</h2>
        <p className={`mt-4 max-w-2xl ${SECTION_LEDE}`}>
          Developers who care about the craft as much as the code, with backgrounds
          in graphics, ML, and real-time 3D. We&apos;re a small team, but with a focused roadmap: Posematic.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 laptop:mt-11">
          {founders.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>

        {nonFounders.length > 0 && (
          <div className="mt-5 flex justify-center">
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