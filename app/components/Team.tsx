import Image from "next/image";
import {
  PAGE_MAX,
  SECTION_EDGE,
  SECTION_H2,
  SECTION_LEDE_NARROW,
  SECTION_PY,
} from "@/app/lib/pageLayout";
import { CARD_BASE, CARD_INTERACTIVE, SECTION_EYEBROW } from "@/app/lib/uiTokens";

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
    imageAlt: "Portrait of Craig Mellor",
    founder: true,
  },
  {
    name: "Daniel Yang",
    role: "Co-founder",
    bio: "CS @ UMD College Park. Built visualization systems for ML backend, brush engine, system design, front-end development, and design/UI-UX lead.",
    imageSrc: "/images/daniel_pfp.jpg",
    imageAlt: "Portrait of Daniel Yang",
    founder: true,
  },
  {
    name: "Ritvik Gupta",
    role: "Fullstack Engineer & Product Designer",
    bio: "AI & CS @ CMU and UoE. Worked on the sketch-to-pose pipeline, brush and 3D engine, design and business operations.",
    imageSrc: "/images/vik.png",
    imageAlt: "Portrait of Ritvik Gupta",
    founder: true,
  },
  {
    name: "Nicholas Mino",
    role: "Fullstack Engineer & Product Designer",
    bio: "AI @ CMU. Building core ML systems, production inference, frontend, authentication, and the interactive 3D editor.",
    imageSrc: "/images/nmino_headshot.jpg",
    imageAlt: "Portrait of Nicholas Mino",
    founder: true,
  },
  {
    name: "Ivan Zhang",
    role: "Fullstack Engineer",
    bio: "CS @ CMU. Worked on sketch-to-pose pipeline, data generation, and 3D viewer.",
    imageSrc: "/images/ivan.jpeg",
    imageAlt: "Portrait of Ivan Zhang",
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
      className={`flex flex-col overflow-hidden ${CARD_BASE} ${CARD_INTERACTIVE} ${className}`}
    >
      <div className="flex justify-center px-4 pt-5 sm:px-5 sm:pt-6">
        <div className="relative aspect-[3/4] w-full max-w-[132px] overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-b from-[var(--color-bg-card-gradient-base)] to-[var(--color-bg-card-dark)] shadow-[0_12px_36px_rgba(0,0,0,0.5)] sm:max-w-[148px] laptop:max-w-[152px] desktop:max-w-[164px] wide:max-w-[180px]">
          <Image
            src={member.imageSrc}
            alt={member.imageAlt}
            fill
            className="object-cover object-top"
            sizes="152px"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-4 pb-5 pt-3 sm:px-7 sm:pb-6 sm:pt-4">
        <h3 className="text-base font-semibold tracking-[-0.01em] text-white sm:text-[1.0625rem] desktop:text-lg wide:text-xl">
          {member.name}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-white/55 sm:text-[0.8125rem] desktop:text-sm">
          {member.role}
        </p>
        <p className="mt-2 text-[0.8125rem] leading-[1.65] text-[var(--color-text-secondary)] sm:text-sm desktop:text-[0.9375rem] wide:text-base">
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
      <div className={`${PAGE_MAX}`}>
        <div className={SECTION_EYEBROW}>People</div>
        <h2 className={SECTION_H2}>Team</h2>
        <p className={`mt-4 ${SECTION_LEDE_NARROW}`}>
          Developers who care about the craft as much as the code—backgrounds in
          graphics, ML, and real-time 3D. Small team, focused roadmap.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 laptop:mt-12">
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
      </div>
    </section>
  );
}
