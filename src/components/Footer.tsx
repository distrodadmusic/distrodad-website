import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a2744] text-[#f5f0e8] pt-12 pb-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-3">
            <Image src="/logo.png" alt="DistroDad" width={40} height={40} className="rounded-full object-cover" />
            <span className="font-[family-name:var(--font-playfair)] text-lg font-bold">DistroDad</span>
          </Link>
          <p className="text-sm text-[#f5f0e8]/70 leading-relaxed">
            Built by musicians. For independent artists who are serious about their music.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#c9a84c] mb-3 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm text-[#f5f0e8]/80">
            <li><Link href="/services/distribution" className="hover:text-[#c9a84c] transition-colors">Distribution</Link></li>
            <li><Link href="/services/publishing-administration" className="hover:text-[#c9a84c] transition-colors">Publishing Administration</Link></li>
            <li><Link href="/services/copyright" className="hover:text-[#c9a84c] transition-colors">Copyright</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#c9a84c] mb-3 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-[#f5f0e8]/80">
            <li><Link href="/about" className="hover:text-[#c9a84c] transition-colors">About</Link></li>
            <li><Link href="/artists" className="hover:text-[#c9a84c] transition-colors">Artists</Link></li>
            <li><Link href="/blog" className="hover:text-[#c9a84c] transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-[#c9a84c] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#c9a84c] mb-3 text-sm uppercase tracking-wider">Get Started</h4>
          <ul className="space-y-2 text-sm text-[#f5f0e8]/80">
            <li><Link href="/contact" className="hover:text-[#c9a84c] transition-colors">Release Your Music</Link></li>
            <li><Link href="/contact?type=audit" className="hover:text-[#c9a84c] transition-colors">Free Artist Audit</Link></li>
            <li>
              <a href="mailto:distro.dad.music@gmail.com" className="hover:text-[#c9a84c] transition-colors">
                distro.dad.music@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-6 border-t border-[#f5f0e8]/10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#f5f0e8]/50">
        <p>© {new Date().getFullYear()} DistroDad LLC. All rights reserved.</p>
        <p>Publishing Administration through <a href="https://werebel.com" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] hover:underline">We Rebel</a></p>
      </div>
    </footer>
  );
}
