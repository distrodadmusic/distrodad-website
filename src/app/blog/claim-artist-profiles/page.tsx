import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Claim Your Artist Profile on Spotify, Apple Music, and YouTube | DistroDad",
  description: "Once your music is live, claiming your artist profiles is one of the most important next steps. Here's how to do it on every major platform.",
};

export default function ClaimArtistProfiles() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)] font-semibold bg-[#c9a84c]/20 text-[#c9a84c]">
              Release Guides
            </span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">July 11, 2026</span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">· DistroDad Team</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold leading-tight mb-6">
            How to Claim Your Artist Profile on Spotify, Apple Music, and YouTube
          </h1>
          <p className="text-[#f5f0e8]/75 font-[family-name:var(--font-inter)] text-lg leading-relaxed">
            Getting your music distributed is step one. Claiming your artist profiles is step two — and most
            independent artists skip it entirely.
          </p>
        </div>
      </section>

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
              When your release goes live on streaming platforms, a basic artist page is created automatically — but
              it&apos;s essentially a placeholder. Claiming your profile unlocks the ability to add a bio, upload
              photos, pitch for playlists, and see real analytics on who&apos;s listening. It takes about 15 minutes
              per platform and makes an enormous difference in how professional you look to new listeners.
            </p>

            <br />

            <h2>Spotify for Artists</h2>
            <p>
              Spotify for Artists is the most important profile to claim first. It&apos;s where editorial playlist
              pitching lives, and it gives you detailed streaming data broken down by city, age, and how listeners are
              finding you.
            </p>

            <p><strong>How to claim it:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Go to artists.spotify.com and click &ldquo;Get Access.&rdquo;</p>
              <p className="!mb-1">Search for your artist name and select your profile.</p>
              <p className="!mb-1">Log in with or create a Spotify account (can be a free account).</p>
              <p className="!mb-1">Verify your identity — Spotify will ask for a link to your social media or website to confirm you&apos;re the artist.</p>
              <p className="!mb-1">Approval typically takes 2–5 business days.</p>
            </div>

            <p><strong>Once approved, prioritize these:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Add a bio (keep it concise — 1–3 paragraphs)</p>
              <p className="!mb-1">Upload a high-quality artist photo (3000 × 3000 px minimum)</p>
              <p className="!mb-1">Pin a playlist or highlight a release</p>
              <p className="!mb-1">Submit upcoming releases for editorial playlist consideration (must be done at least 7 days before release date)</p>
            </div>

            <br />

            <p>Spotify for Artists is also where you&apos;ll find your Spotify URI — a unique identifier you&apos;ll need for some third-party tools and playlist pitching platforms.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>Apple Music for Artists</h2>
            <p>
              Apple Music for Artists gives you access to streaming data across Apple Music and Shazam, which together
              paint a useful picture of where your music is gaining traction organically.
            </p>

            <p><strong>How to claim it:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Go to artists.apple.com and click &ldquo;Get Started.&rdquo;</p>
              <p className="!mb-1">Sign in with your Apple ID (or create one).</p>
              <p className="!mb-1">Search for your artist name and select your profile.</p>
              <p className="!mb-1">Submit verification — Apple will ask for links to your social media profiles or website.</p>
              <p className="!mb-1">Approval typically takes 3–7 business days.</p>
            </div>

            <p><strong>Once approved:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Add or update your bio</p>
              <p className="!mb-1">Upload artist images optimized for Apple&apos;s platform (they display differently than Spotify)</p>
              <p className="!mb-1">Review your Shazam data — it often surfaces listeners in markets you didn&apos;t expect</p>
            </div>

            <br />

            <p>Note: your Apple Music profile image is separate from your album artwork. Upload both.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>YouTube: Claiming Your Official Artist Channel</h2>
            <p>
              YouTube is where things get a little more complicated — but it&apos;s worth understanding because YouTube
              is still one of the largest music discovery platforms in the world.
            </p>
            <p>
              When your music is distributed to YouTube Music, a YouTube Music artist profile is created automatically.
              Separately, you may already have a personal YouTube channel where you post videos. An Official Artist
              Channel (OAC) merges both into a single verified channel that shows your music releases alongside your
              uploaded content.
            </p>

            <p><strong>To be eligible for an OAC, you need:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">At least one official release distributed to YouTube Music</p>
              <p className="!mb-1">An existing YouTube channel (your personal one works)</p>
              <p className="!mb-1">Your distributor to submit the OAC request on your behalf</p>
            </div>

            <p>
              DistroDad handles OAC requests for our artists as part of the distribution process — just let us know
              you have an existing YouTube channel and we&apos;ll coordinate the merge.
            </p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>Merging Your Personal YouTube Channel with Your YouTube Music Artist Profile</h2>
            <p>
              This is the step most artists don&apos;t know exists. By default, your personal YouTube channel (where
              you post vlogs, behind-the-scenes content, etc.) and your YouTube Music artist profile (created
              automatically when your music is distributed) are completely separate pages. To a listener, it looks like
              you have two different YouTube presences.
            </p>
            <p>
              An Official Artist Channel solves this by combining both into one. Your uploaded videos and your
              distributed music releases appear together, under one channel, with a verified music note badge.
            </p>

            <p><strong>How the merge works:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Your distributor submits a request to YouTube on your behalf, linking your personal channel to your YouTube Music artist profile.</p>
              <p className="!mb-1">YouTube reviews the request — this typically takes 1–4 weeks.</p>
              <p className="!mb-1">Once approved, your channel gets the music note badge and your releases appear automatically.</p>
              <p className="!mb-1">Your existing subscribers, videos, and channel history are preserved.</p>
            </div>

            <p><strong>A few things to know before requesting:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">The merge is permanent — it cannot be undone once completed.</p>
              <p className="!mb-1">Your channel name should match (or be close to) your artist name.</p>
              <p className="!mb-1">If you have multiple YouTube channels, decide which one you want to use as your primary before submitting.</p>
            </div>

            <br />

            <p>
              If you&apos;re not sure whether to request an OAC right away, a good rule of thumb is: once you have at
              least one release live and a YouTube channel you&apos;re actively using, it&apos;s worth doing. The
              sooner you consolidate your presence, the easier it is for the algorithm to connect your content to the
              right listeners.
            </p>

          </div>

          <div className="mt-12 pt-10 border-t border-[#1a2744]/10">
            <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] text-base italic mb-6">
              Ready to get your profiles set up? DistroDad handles OAC requests and can walk you through the rest.{" "}
              <Link href="/get-started" className="text-[#3d6b9e] hover:underline not-italic font-semibold">
                Get started here
              </Link>.
            </p>
          </div>

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
