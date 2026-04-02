import { sanityFetch } from "@/sanity/lib/live";
import { allProjectsQuery } from "@/sanity/lib/queries";
import { ProjectsList, type ProjectItem } from "./_components/ProjectsList";

const staticFallback: ProjectItem[] = [
  {
    id: "above-ground",
    title: "Above Ground",
    subtitle: "Animated Short Film",
    status: "Festival Circuit",
    description:
      "A powerful animated film that delves into the complexities of the opioid crisis, mental health, the cycle of abuse, and redemption. Above Ground is the second in a series about mental health and has been selected for fourteen festivals, garnering five nominations and four wins.",
    achievements: [
      "Levin Grand Jury Award — Wheaton Film Festival",
      "4 total awards, 5 nominations",
      "14 festival selections",
      "Best Animated Film — Independent Shorts Awards",
    ],
    credits: ["Animated Short", "KijiK Multimedia Production"],
    href: "https://stayaboveground.com",
    external: true,
  },
  {
    id: "beach-chronicles",
    title: "The Beach Chronicles",
    subtitle: "Multi-Platform Series",
    status: "Active",
    description:
      "A groundbreaking multi-platform story told across film, television, podcast, and comic books. The first comic debuted at Florida Supercon to massive response. The series features an ensemble of Hollywood talent in a story of Miami, secrets, and survival.",
    achievements: [
      "Featuring Daryl Hannah, Michael Chiklis, Tommy Flanagan",
      "Jimmy Jean Louis (Heroes, TNT's CLAWS)",
      "Podcast Radio Noir — Emmy winner Jordi Vilasuso & Nancy Sinatra",
      "Comic Book Series — Available Now",
    ],
    credits: ["Film · Series · Comics · Podcast"],
    href: "https://www.thebeachchronicles.com",
    external: true,
  },
  {
    id: "peter-panties",
    title: "The Incredibly Short Life of Peter Panties",
    subtitle: "Animated Short Film",
    status: "Festival Complete",
    description:
      "An animated short that defies convention. Officially selected for the prestigious Slamdance Emergence Festival, it has won six awards for its unflinching, original storytelling.",
    achievements: [
      "Slamdance Emergence Festival — Official Selection",
      "Best Animated Film",
      "Best Crime Drama",
      "Best Musical Composition",
      "6 total awards",
    ],
    credits: ["Animated Short", "KijiK Multimedia Production"],
    href: "/projects",
    external: false,
  },
  {
    id: "ayiti-trilogie",
    title: "Ayiti Trilogie",
    subtitle: "Documentary Series",
    status: "Screenings Complete",
    description:
      "A three-part documentary series celebrating the history of Haiti and giving insight into the complex forces that brought the country to where it stands today. Each screening has sold out.",
    achievements: [
      "Sove Nou — narrated by Danny Glover, featuring Wyclef Jean",
      "Nou Sove Timon Yo — Jimmy Jean Louis, Josh Brolin, Maria Bello, Diane Lane",
      "Ayikodans Rise! — sold-out screenings",
      "Father Rick Frachette collaboration",
    ],
    credits: ["Documentary Trilogy", "KijiK Multimedia Production"],
    href: "/projects",
    external: false,
  },
  {
    id: "purvis-young",
    title: "Purvis Young — Young Pervis",
    subtitle: "Documentary",
    status: "Sundance Development",
    description:
      "A documentary profile of the legendary Miami street artist Purvis Young, featuring a tribute by Lenny Kravitz. Selected for a Sundance development workshop, with an article written by KijiK founder Kevin Sharpley published directly on the Sundance website.",
    achievements: [
      "Sundance Development Workshop Selection",
      "Tribute by Lenny Kravitz",
      "Article by Kevin Sharpley on Sundance.org",
    ],
    credits: ["Documentary Profile", "KijiK Multimedia Production"],
    href: "https://www.sundance.org/blogs/ask-yourself-these-questions-when-developing-your-documentary-film-3/",
    external: true,
  },
  {
    id: "deadly-night-out",
    title: "Deadly Night Out",
    subtitle: "Feature Film",
    status: "Coming Soon",
    description: "KijiK Multimedia's next major production. Details coming soon.",
    achievements: [],
    credits: ["Feature Film", "KijiK Multimedia Production"],
    href: "/contact",
    external: false,
  },
];

export default async function ProjectsPage() {
  const { data: sanityProjects } = await sanityFetch({ query: allProjectsQuery });

  const items: ProjectItem[] =
    sanityProjects.length > 0
      ? sanityProjects.map((p: { _id: string; title?: string | null; subtitle?: string | null; status?: string | null; description?: string | null; achievements?: (string | null)[] | null; credits?: (string | null)[] | null; externalUrl?: string | null }) => ({
          id: p._id,
          title: p.title ?? "",
          subtitle: p.subtitle ?? "",
          status: p.status ?? "",
          description: p.description ?? "",
          achievements: (p.achievements ?? []).filter(Boolean) as string[],
          credits: (p.credits ?? []).filter(Boolean) as string[],
          href: p.externalUrl ?? "/projects",
          external: !!p.externalUrl,
        }))
      : staticFallback;

  return <ProjectsList items={items} />;
}
