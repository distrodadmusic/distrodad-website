import Link from "next/link";

const posts = [
  {
    title: "Why \"Just Drop It Tomorrow\" Is the Most Expensive Decision You Can Make",
    excerpt: "The date you hit \"submit\" matters almost as much as the song itself. Here's why waiting pays off — and exactly how to plan your timeline.",
    category: "Release Guides",
    date: "June 30, 2026",
    slug: "/blog/release-timing-matters",
  },
  {
    title: "What Is a PRO and Why Does Every Songwriter Need One?",
    excerpt: "If you've written a song and you're not registered with a Performing Rights Organization, you're leaving money on the table. Here's what you need to know.",
    category: "Royalties",
    date: "Coming Soon",
  },
  {
    title: "The Difference Between a Master Recording and a Composition",
    excerpt: "Two types of copyright, two different owners, two different royalty streams. Understanding this distinction is fundamental to your music business.",
    category: "Publishing",
    date: "Coming Soon",
  },
  {
    title: "What Is the MLC and How Do I Register?",
    excerpt: "The Mechanical Licensing Collective collects mechanical royalties from streaming. If you haven't registered, those royalties are sitting unclaimed.",
    category: "Distribution",
    date: "Coming Soon",
  },
  {
    title: "Release Checklist: Everything to Do Before You Hit Publish",
    excerpt: "Metadata, artwork specs, ISRC codes, PRO registration — here's the full checklist so you don't miss anything on release day.",
    category: "Distribution",
    date: "Coming Soon",
  },
  {
    title: "Copyright Registration: Do You Actually Need It?",
    excerpt: "Your music is automatically copyrighted. So why register? Because automatic protection and enforceable protection are very different things.",
    category: "Copyright",
    date: "Coming Soon",
  },
  {
    title: "How DistroDad's Artist Audit Works",
    excerpt: "We review your existing catalog, identify missing registrations, and tell you exactly what royalties you may be leaving uncollected. Free, no obligation.",
    category: "DistroDad",
    date: "Coming Soon",
  },
];

const categoryColors: Record<string, string> = {
  "Release Guides": "bg-[#c9a84c]/20 text-[#8a6f2e]",
  Royalties: "bg-[#3d6b4f]/15 text-[#3d6b4f]",
  Publishing: "bg-[#3d6b9e]/15 text-[#3d6b9e]",
  Distribution: "bg-[#c9a84c]/20 text-[#8a6f2e]",
  Copyright: "bg-[#b84040]/15 text-[#b84040]",
  DistroDad: "bg-[#1a2744]/10 text-[#1a2744]",
};

export default function Blog() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">The DistroDad Blog</h1>
          <p className="text-[#f5f0e8]/80 text-lg font-[family-name:var(--font-inter)] leading-relaxed max-w-2xl mx-auto">
            Music business explained by people you&apos;d actually enjoy having coffee with. No jargon, no gatekeeping.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-[#1a2744]/50 font-[family-name:var(--font-inter)] text-sm mb-10">
            Posts launching soon. In the meantime,{" "}
            <Link href="/contact" className="text-[#3d6b9e] hover:underline">reach out</Link>{" "}
            with questions — we&apos;re always happy to explain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => {
              const card = (
                <div key={post.title} className={`bg-white border border-[#1a2744]/10 rounded-xl p-6 shadow-sm transition-shadow ${"slug" in post ? "hover:shadow-md cursor-pointer" : "opacity-75"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)] font-semibold ${categoryColors[post.category] ?? ""}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-[#1a2744]/40 font-[family-name:var(--font-inter)]">{post.date}</span>
                  </div>
                  <h2 className="font-[family-name:var(--font-playfair)] font-bold text-[#1a2744] text-lg mb-3 leading-snug">{post.title}</h2>
                  <p className="text-[#1a2744]/65 font-[family-name:var(--font-inter)] text-sm leading-relaxed">{post.excerpt}</p>
                  {"slug" in post && (
                    <p className="mt-4 text-xs font-semibold text-[#3d6b9e] font-[family-name:var(--font-inter)]">Read post →</p>
                  )}
                </div>
              );
              return "slug" in post ? (
                <Link key={post.title} href={(post as typeof post & { slug: string }).slug}>{card}</Link>
              ) : card;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
