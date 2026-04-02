import { sanityFetch } from "@/sanity/lib/live";
import { allPostsQuery } from "@/sanity/lib/queries";
import { NewsList, type NewsItem } from "./_components/NewsList";

const staticFallback: NewsItem[] = [
  {
    title:
      "KijiK Founder arranges and mediates top film and TV composer panel at the Miami Media and Film Market",
    date: "September 5, 2024",
    category: "Events",
    excerpt:
      "Kevin Sharpley arranged and moderated an incredible panel at the Miami Media and Film Market featuring 14-time Grammy Award winning composer Julio Reyes Copello and fellow maestros.",
    href: "https://kijikmultimedia.com/2024/09/05/kijik-founder-arranges-and-mediates-top-film-and-tv-composer-panel-at-the-miami-media-and-film-market/",
    external: true,
  },
  {
    title: "Above Ground and the Depths of Human Struggle",
    date: "January 29, 2024",
    category: "Film",
    excerpt:
      "An exploration of human resilience and the relentless fight against adversity. Above Ground emerges as a powerful film that delves into the complexities of tragedy, self-medication, and the triumph of the human spirit.",
    href: "https://kijikmultimedia.com/2024/01/29/above-ground-and-the-depths-of-human-struggle/",
    external: true,
  },
  {
    title: "VFX = WE THE BEST!",
    date: "May 10, 2023",
    category: "Production",
    excerpt:
      "We're excited as we embark on an amazing visual effects adventure with visionary filmmakers and an iconic brand with a story to match.",
    href: "https://kijikmultimedia.com/2023/05/10/hello-world/",
    external: true,
  },
  {
    title: "Above Ground wins the Levin Grand Jury Award at the Wheaton Film Festival",
    date: "2023",
    category: "Awards",
    excerpt:
      "Our award-winning film about the opioid crisis, mental health, the cycle of abuse, and redemption continues its festival run — four awards, five nominations, fifteen amazing festivals.",
    href: "/projects",
    external: false,
  },
  {
    title:
      "Sundance Institute: Ask Yourself These Questions When Developing Your Documentary Film",
    date: "2023",
    category: "Press",
    excerpt:
      "KijiK founder Kevin Sharpley contributed a featured article to the Sundance Institute blog, now live on Sundance.org.",
    href: "https://www.sundance.org/blogs/ask-yourself-these-questions-when-developing-your-documentary-film-3/",
    external: true,
  },
];

export default async function NewsPage() {
  const { data: posts } = await sanityFetch({ query: allPostsQuery });

  const items: NewsItem[] =
    posts.length > 0
      ? posts.map((p: { title?: string | null; publishedAt?: string | null; category?: string | null; excerpt?: string | null; externalUrl?: string | null }) => ({
          title: p.title ?? "",
          date: p.publishedAt
            ? new Date(p.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            : "",
          category: p.category ?? "",
          excerpt: p.excerpt ?? "",
          href: p.externalUrl ?? "/news",
          external: !!p.externalUrl,
        }))
      : staticFallback;

  return <NewsList items={items} />;
}
