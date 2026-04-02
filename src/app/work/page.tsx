import { sanityFetch } from "@/sanity/lib/live";
import { allWorkItemsQuery } from "@/sanity/lib/queries";
import { WorkGrid, type WorkItem } from "./_components/WorkGrid";

const staticFallback: WorkItem[] = [
  {
    title: "Above Ground",
    client: "KijiK Original",
    category: "Animation",
    filters: ["Animation", "Film & TV"],
    description:
      "Award-winning animated short film addressing the opioid crisis, mental health, and the cycle of abuse and redemption. 4 awards across 14 festivals.",
    tags: ["Wheaton Grand Jury Award", "4 Awards", "14 Festivals"],
    href: "https://stayaboveground.com",
    external: true,
  },
  {
    title: "The Beach Chronicles",
    client: "KijiK Original",
    category: "Film & TV",
    filters: ["Film & TV"],
    description:
      "Multi-platform series featuring Daryl Hannah, Michael Chiklis, Tommy Flanagan, Jimmy Jean Louis. Includes comic book and podcast extensions.",
    tags: ["Series", "Comics", "Podcast"],
    href: "https://www.thebeachchronicles.com",
    external: true,
  },
  {
    title: "David Lynch Foundation",
    client: "David Lynch Foundation",
    category: "Branding",
    filters: ["Branding"],
    description:
      "Nonprofit branded film narrated by David Lynch himself, featuring Dave Stewart, Peter Gabriel, Tyler Glenn, and MC Lyte.",
    tags: ["Branded Content", "Non-Profit"],
    href: "/work",
    external: false,
  },
  {
    title: "Sove Nou",
    client: "KijiK Original",
    category: "Documentary",
    filters: ["Documentary"],
    description:
      "Documentary narrated by Danny Glover, featuring Wyclef Jean. Part of the Ayiti Trilogie celebrating Haiti's history.",
    tags: ["Danny Glover", "Wyclef Jean", "Haiti"],
    href: "/projects",
    external: false,
  },
  {
    title: "The Incredibly Short Life of Peter Panties",
    client: "KijiK Original",
    category: "Animation",
    filters: ["Animation"],
    description:
      "Selected for the prestigious Slamdance Emergence Festival. Won best animated film, best crime drama, and best musical composition.",
    tags: ["Slamdance", "6 Awards"],
    href: "/projects",
    external: false,
  },
  {
    title: "Bacardi — Brand Campaign",
    client: "Bacardi",
    category: "Branding",
    filters: ["Branding"],
    description: "Multi-platform branded content campaign for one of the world's most iconic spirits brands.",
    tags: ["Campaign", "Branded Content"],
    href: "/work",
    external: false,
  },
  {
    title: "US Air Force",
    client: "US Air Force",
    category: "Branding",
    filters: ["Branding", "Film & TV"],
    description: "Full-service production and branded content for the United States Air Force.",
    tags: ["Corporate", "Production"],
    href: "/work",
    external: false,
  },
  {
    title: "Hart Insurance",
    client: "Hart Insurance",
    category: "Branding",
    filters: ["Branding", "Animation"],
    description: "Animated character development integrated with live-action storytelling to build a distinctive brand presence.",
    tags: ["Animation", "Case Study"],
    href: "/work",
    external: false,
  },
  {
    title: "Jared Dylan",
    client: "Jared Dylan",
    category: "Animation",
    filters: ["Animation", "Music Video"],
    description: "Full animation deliverable for musician Jared Dylan — an immersive visual world built entirely in animation.",
    tags: ["Music", "Full Animation"],
    href: "/work",
    external: false,
  },
  {
    title: "Nou Sove Timon Yo",
    client: "KijiK Original",
    category: "Documentary",
    filters: ["Documentary"],
    description: "Featuring Jimmy Jean Louis with Josh Brolin, Maria Bello, Diane Lane, and Father Rick Frachette.",
    tags: ["Jimmy Jean Louis", "Josh Brolin"],
    href: "/projects",
    external: false,
  },
  {
    title: "AR / VR Showreel",
    client: "Various Clients",
    category: "Immersive",
    filters: ["Immersive"],
    description: "Augmented reality, virtual reality, and mixed reality experiences for clients across multiple industries.",
    tags: ["AR", "VR", "XR", "Gaming"],
    href: "/services#immersive",
    external: false,
  },
  {
    title: "Purvis Young Documentary",
    client: "KijiK Original",
    category: "Documentary",
    filters: ["Documentary"],
    description: "Profile of artist Purvis Young ('Young Pervis'), with tribute by Lenny Kravitz. Selected for a Sundance development workshop.",
    tags: ["Sundance", "Lenny Kravitz"],
    href: "/projects",
    external: false,
  },
];

export default async function WorkPage() {
  const { data: sanityItems } = await sanityFetch({ query: allWorkItemsQuery });

  const items: WorkItem[] =
    sanityItems.length > 0
      ? sanityItems.map((w: { title?: string | null; client?: string | null; category?: string | null; filters?: (string | null)[] | null; description?: string | null; tags?: (string | null)[] | null; externalUrl?: string | null }) => ({
          title: w.title ?? "",
          client: w.client ?? "",
          category: w.category ?? "",
          filters: (w.filters ?? []).filter(Boolean) as string[],
          description: w.description ?? "",
          tags: (w.tags ?? []).filter(Boolean) as string[],
          href: w.externalUrl ?? "/work",
          external: !!w.externalUrl,
        }))
      : staticFallback;

  return <WorkGrid items={items} />;
}
