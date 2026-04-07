import Image from "next/image";

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
    name: "Alex Rivera",
    role: "Co-founder & CEO",
    bio: "Former graphics tools PM; obsessed with creative workflows that respect artists' time.",
    imageSrc: "/images/team-placeholder.svg",
    imageAlt: "Portrait placeholder for Alex Rivera",
    founder: true,
  },
  {
    name: "Jordan Lee",
    role: "Co-founder & CTO",
    bio: "ML systems and real-time 3D — building Posematic's sketch-to-pose brain.",
    imageSrc: "/images/team-placeholder.svg",
    imageAlt: "Portrait placeholder for Jordan Lee",
    founder: true,
  },
  {
    name: "Sam Okonkwo",
    role: "Lead Product Designer",
    bio: "Interfaces for pro tools; previously shipped design systems for creative software.",
    imageSrc: "/images/team-placeholder.svg",
    imageAlt: "Portrait placeholder for Sam Okonkwo",
  },
  {
    name: "Morgan Chen",
    role: "3D & Anatomy",
    bio: "Character TD and anatomy nerd — making poses that hold up under scrutiny.",
    imageSrc: "/images/team-placeholder.svg",
    imageAlt: "Portrait placeholder for Morgan Chen",
  },
  {
    name: "Riley Patel",
    role: "Engineering",
    bio: "Performance, rendering, and the glue between ML and interactive 3D.",
    imageSrc: "/images/team-placeholder.svg",
    imageAlt: "Portrait placeholder for Riley Patel",
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
      {/* Smaller, equal portrait frames — width-capped so all match */}
      <div className="flex justify-center px-4 pt-5 sm:px-5 sm:pt-6">
        <div className="relative aspect-[3/4] w-full max-w-[148px] overflow-hidden rounded-xl bg-gradient-to-b from-[#1a1535] to-[#0c0c1a] sm:max-w-[168px]">
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
  const row1 = team.slice(0, 3);
  const row2 = team.slice(3, 5);

  return (
    <section
      id="team"
      className="relative scroll-mt-28 px-4 py-16 sm:scroll-mt-32 sm:px-6 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Team
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
          Builders who care as much about craft as about code — a small team with
          a loud roadmap.
        </p>

        {/*
          Balanced 3 + 2: six-column grid, three cards on row one (span 2 each),
          two cards centered on row two (span 2, starts 2 and 4) — equal widths.
        */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-6 sm:gap-6">
          {row1.map((member) => (
            <MemberCard
              key={member.name}
              member={member}
              className="sm:col-span-2"
            />
          ))}
          {row2.map((member, i) => (
            <MemberCard
              key={member.name}
              member={member}
              className={
                i === 0
                  ? "sm:col-span-2 sm:col-start-2"
                  : "sm:col-span-2 sm:col-start-4"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
