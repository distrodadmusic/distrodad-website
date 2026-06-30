import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why \"Just Drop It Tomorrow\" Is the Most Expensive Decision You Can Make | DistroDad",
  description: "Submitting your release early isn't bureaucracy — it's strategy. Here's the plain-English breakdown of how far in advance to plan your next single, EP, or album.",
};

export default function ReleaseTiming() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2744] text-[#f5f0e8] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)] font-semibold bg-[#c9a84c]/20 text-[#c9a84c]">
              Release Guides
            </span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">June 30, 2026</span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">· DistroDad Team</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold leading-tight mb-6">
            Why &ldquo;Just Drop It Tomorrow&rdquo; Is the Most Expensive Decision You Can Make
          </h1>
          <p className="text-[#f5f0e8]/75 font-[family-name:var(--font-inter)] text-lg leading-relaxed">
            The date you hit &ldquo;submit&rdquo; matters almost as much as the song itself. Here&apos;s why waiting pays off — and exactly how to plan your timeline.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none font-[family-name:var(--font-inter)] text-[#1a2744]
            prose-headings:font-[family-name:var(--font-playfair)] prose-headings:text-[#1a2744] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:leading-relaxed prose-p:mb-5 prose-p:text-[#1a2744]/85
            prose-li:text-[#1a2744]/85 prose-li:leading-relaxed
            prose-strong:text-[#1a2744] prose-strong:font-semibold
            prose-a:text-[#3d6b9e] prose-a:no-underline hover:prose-a:underline">

            <p>
              You finished the song. You&apos;re excited. You want it out <em>now</em>. We get it — that excitement is exactly why you make music in the first place.
            </p>
            <p>
              But here&apos;s the thing nobody tells new artists: the date you hit &ldquo;submit&rdquo; matters almost as much as the song itself. Rush it, and you quietly lose chances you can&apos;t get back. Here&apos;s the plain-English version of why, and how to plan around it.
            </p>

            <h2>Why Waiting Actually Pays Off</h2>
            <p>It feels backwards — why would <em>waiting</em> help your music do better? A few reasons:</p>
            <ul>
              <li><strong>Playlist curators need a heads up.</strong> The people who decide what goes on Spotify and Apple Music&apos;s big editorial playlists aren&apos;t looking at songs the day they drop. They&apos;re looking at what&apos;s coming. If your music isn&apos;t submitted early enough, it&apos;s not that they said no — they never had the chance to say yes.</li>
              <li><strong>Pre-saves turn into real first-day numbers.</strong> When fans pre-save your track, that turns into an instant stream the moment it&apos;s live, which helps your song&apos;s algorithmic momentum out of the gate.</li>
              <li><strong>Every platform needs processing time.</strong> Spotify, Apple Music, Amazon — they all have to receive your files, check them, and load them into their systems. That&apos;s not instant, even when everything goes right.</li>
              <li><strong>You need a buffer for things going wrong.</strong> Wrong file format, a metadata typo, an artwork issue — these happen to everyone. Early submission means you have time to fix it quietly instead of panicking three days before release.</li>
              <li><strong>Your own marketing needs runway.</strong> Social posts, press outreach, telling your fans — none of that works well crammed into 48 hours.</li>
            </ul>

            <h2>So How Early Is Early Enough?</h2>
            <p>Here&apos;s the honest, no-fluff version:</p>
            <p><strong>Two weeks is your floor, not your goal.</strong> Submitting two weeks out is the minimum for things to go smoothly — basic processing, a buffer for fixing issues, and just barely enough time for Spotify&apos;s algorithmic playlists to notice you.</p>
            <p><strong>Three to four weeks is where it gets good.</strong> This is the sweet spot for most singles. It gives you real consideration for editorial playlists, room to run a pre-save campaign, and breathing room if anything unexpected pops up.</p>
            <p><strong>Albums need four to six weeks.</strong> More songs means more moving pieces — more chances for a metadata hiccup, more coordination if you&apos;re staggering singles before the full release.</p>

            <h2>What That Actually Looks Like, Week by Week</h2>
            <p>If you&apos;re dropping a single, here&apos;s a realistic plan:</p>
            <ul>
              <li><strong>4+ weeks out:</strong> Lock the final audio, artwork, and song info. No more &ldquo;actually, let me re-mix this real quick.&rdquo;</li>
              <li><strong>3–4 weeks out:</strong> Submit for distribution.</li>
              <li><strong>2–3 weeks out:</strong> Once it&apos;s approved, get your pre-save link out to fans.</li>
              <li><strong>1–2 weeks out:</strong> Ramp up the promotion — posts, stories, telling people.</li>
              <li><strong>Release day:</strong> Go live, share everywhere, and actually enjoy it instead of stressing.</li>
              <li><strong>The week after:</strong> Watch how it&apos;s performing and start pitching for playlists.</li>
            </ul>
            <p>Dropping an album? Start the clock 6–8 weeks out, and treat your lead single as the first wave of a longer campaign — not a separate thing.</p>

            <h2>A Few Things Worth Knowing</h2>
            <p><strong>Changing your release date after you&apos;ve submitted is a bigger deal than it sounds.</strong> It resets your release and requires re-approval, which can cost you several more days. Pick a date you actually mean before you submit.</p>
            <p><strong>The holidays are slower across the board.</strong> If you&apos;re aiming for a release around Christmas, New Year&apos;s, or Thanksgiving, push your timeline out further — everyone else is submitting then too, and platforms get backed up.</p>
            <p><strong>Specialist platforms like Beatport need extra runway.</strong> If you&apos;re chasing genre-specific placement, two-plus weeks of advance notice matters even more there.</p>

            <h2>The Real Takeaway</h2>
            <p>
              None of this is about bureaucracy for its own sake. It&apos;s about giving your music its best shot at being <em>found</em> — not just released. Every extra week of lead time is a week working in your favor instead of against you.
            </p>
            <p>
              This is exactly the kind of thing we walk every DistroDad artist through before their release goes out — because we&apos;d rather you ask &ldquo;is this too early?&rdquo; than &ldquo;why didn&apos;t this do better?&rdquo;
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 pt-10 border-t border-[#1a2744]/10">
            <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] text-base italic mb-6">
              Got a release coming up and not sure about your timeline?{" "}
              <Link href="/get-started" className="text-[#3d6b9e] hover:underline not-italic font-semibold">
                Tell us about it
              </Link>{" "}
              and we&apos;ll help you map out the right schedule.
            </p>
          </div>

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-inter)] font-semibold text-[#1a2744]/50 hover:text-[#1a2744] transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>
    </>
  );
}
