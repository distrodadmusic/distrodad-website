import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Release Checklist: Everything to Do Before You Hit Publish | DistroDad",
  description: "Metadata, artwork specs, ISRC codes, PRO registration — here's the full checklist so you don't miss anything on release day.",
};

export default function ReleaseChecklist() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)] font-semibold bg-[#c9a84c]/20 text-[#c9a84c]">
              Distribution
            </span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">July 25, 2026</span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">· DistroDad Team</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold leading-tight mb-6">
            Release Checklist: Everything to Do Before You Hit Publish
          </h1>
          <p className="text-[#f5f0e8]/75 font-[family-name:var(--font-inter)] text-lg leading-relaxed">
            Most release mistakes aren&apos;t about the music. They&apos;re about the details that happen before
            distribution — metadata, registrations, artwork, and timing. Here&apos;s the full checklist.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none font-[family-name:var(--font-inter)] text-[#1a2744]
            prose-headings:font-[family-name:var(--font-playfair)] prose-headings:text-[#1a2744] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:leading-relaxed prose-p:mb-5 prose-p:text-[#1a2744]/85
            prose-strong:text-[#1a2744] prose-strong:font-semibold
            prose-a:text-[#3d6b9e] prose-a:no-underline hover:prose-a:underline">

            <p>
              Use this checklist for every release — singles, EPs, and albums. The more releases you do, the more
              automatic this becomes. But skipping steps, especially early on, is how royalties get lost and releases
              get delayed.
            </p>

            <br />

            <h2>4+ Weeks Before Release</h2>

            <p><strong>Audio files:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Final mix approved — no more changes after this point</p>
              <p className="!mb-1">Master delivered as WAV, 16-bit/44.1kHz minimum (24-bit/48kHz preferred)</p>
              <p className="!mb-1">High-resolution archive master saved (24-bit/96kHz WAV) — store this permanently</p>
              <p className="!mb-1">Instrumental/TV mix created if you plan to pursue sync licensing</p>
              <p className="!mb-1">Loudness target: -14 LUFS integrated for streaming</p>
            </div>

            <p><strong>Artwork:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Cover art at 3000 × 3000 px minimum, JPG or PNG, RGB color mode</p>
              <p className="!mb-1">No web addresses, social handles, or promotional text in the artwork</p>
              <p className="!mb-1">Artist profile photo ready (3000 × 3000 px)</p>
              <p className="!mb-1">Banner image ready if updating streaming profiles (2048 × 1152 px)</p>
            </div>

            <p><strong>Splits and ownership:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Split sheet signed by all co-writers (even informal ones)</p>
              <p className="!mb-1">All co-writers&apos; legal names, IPI numbers, and PRO affiliations documented</p>
              <p className="!mb-1">Publishing shares agreed upon and documented</p>
            </div>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>3–4 Weeks Before Release</h2>

            <p><strong>Submit to your distributor:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Song title (exactly as you want it to appear — capitalization matters)</p>
              <p className="!mb-1">Artist name (consistent with all other releases)</p>
              <p className="!mb-1">Release date confirmed</p>
              <p className="!mb-1">Genre and sub-genre selected</p>
              <p className="!mb-1">Explicit content flagged correctly</p>
              <p className="!mb-1">Featured artist credits added if applicable</p>
              <p className="!mb-1">Songwriter and producer credits entered in the metadata</p>
              <p className="!mb-1">UPC (for the release) and ISRC (for each track) recorded — your distributor assigns these</p>
              <p className="!mb-1">℗ and © lines entered correctly with the year and rights holder name</p>
            </div>

            <p><strong>PRO registration:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Song registered with your PRO (ASCAP or BMI) with all writer and publisher IPIs</p>
              <p className="!mb-1">ISRC included in the PRO registration</p>
            </div>

            <p><strong>MLC registration:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Song registered at themlc.com with title, all writer and publisher IPIs, splits, and ISRC</p>
            </div>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>2–3 Weeks Before Release</h2>

            <p><strong>Once the release is approved by your distributor:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Pre-save link created and shared with fans</p>
              <p className="!mb-1">Spotify editorial playlist pitch submitted (must be done at least 7 days before release)</p>
              <p className="!mb-1">Social content calendar mapped out through release week and the week after</p>
              <p className="!mb-1">Press contacts and playlist curators notified if applicable</p>
            </div>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>Release Week</h2>

            <p><strong>In the days leading up:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Tease the release on social media — short clips, behind-the-scenes, countdowns</p>
              <p className="!mb-1">Confirm the release is showing as &ldquo;upcoming&rdquo; on Spotify (visible via Spotify for Artists)</p>
              <p className="!mb-1">Prepare links for the day-of share (link aggregator like Linktree or smartURL recommended)</p>
            </div>

            <p><strong>On release day:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Confirm the release is live across all platforms</p>
              <p className="!mb-1">Share everywhere — don&apos;t assume the algorithm does the work on day one</p>
              <p className="!mb-1">Ask fans, friends, and family to save, share, and add to playlists</p>
            </div>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>After Release</h2>

            <p><strong>Within the first week:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Claim or update your Spotify for Artists profile with new bio, photo, and pinned release</p>
              <p className="!mb-1">Claim or update your Apple Music for Artists profile</p>
              <p className="!mb-1">Verify the release appears correctly on all platforms — title, artwork, credits</p>
              <p className="!mb-1">Pitch to independent playlist curators</p>
            </div>

            <p><strong>Ongoing:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Monitor streams and saves in Spotify for Artists and Apple Music for Artists</p>
              <p className="!mb-1">Check MLC account for unmatched royalties</p>
              <p className="!mb-1">Archive all files: final audio, artwork, metadata, split sheet, registration confirmations</p>
            </div>

            <br />

            <p>
              Every item on this list exists because someone, at some point, skipped it and paid for it later. The
              artists who build sustainable careers are the ones who treat each release like a professional project —
              because that&apos;s exactly what it is.
            </p>

          </div>

          <div className="mt-12 pt-10 border-t border-[#1a2744]/10">
            <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] text-base italic mb-6">
              Want DistroDad to walk through this checklist with you before your next release?{" "}
              <Link href="/get-started" className="text-[#3d6b9e] hover:underline not-italic font-semibold">
                Tell us about your project
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
