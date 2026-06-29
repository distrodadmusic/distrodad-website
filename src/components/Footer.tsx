import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    label: "YouTube",
    href: "https://youtube.com/@distrodadmusic",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/distrodad",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591599264018",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a2744] text-[#f5f0e8] pt-12 pb-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-3">
            <Image src="/logo.png" alt="DistroDad" width={40} height={40} className="rounded-full object-cover" />
            <span className="font-[family-name:var(--font-playfair)] text-lg font-bold">DistroDad</span>
          </Link>
          <p className="text-sm text-[#f5f0e8]/70 leading-relaxed mb-5">
            Built by musicians. For independent artists who are serious about their music.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-[#f5f0e8]/60 hover:text-[#c9a84c] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
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
            <li><Link href="/get-started" className="hover:text-[#c9a84c] transition-colors">Release Your Music</Link></li>
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
