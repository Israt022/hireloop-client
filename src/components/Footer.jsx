import Link from "next/link";

import {
  LogoFacebook,
  LogoLinkedin,
} from "@gravity-ui/icons";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full border border-white/20" />

        <div className="absolute left-1/2 top-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-white/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        
        {/* TOP */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          
          {/* LEFT */}
          <div className="lg:col-span-2">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>

              <div className="leading-none">
                <h1 className="text-lg font-bold">
                  Programming
                </h1>

                <p className="text-sm text-white/80">
                  Hero
                </p>
              </div>
            </Link>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              The AI-native career platform. Built for people who
              take their work seriously.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-10 flex items-center gap-3">
              
              {/* FACEBOOK */}
              <Link
                href="/"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition hover:bg-violet-600"
              >
                <LogoFacebook className="h-5 w-5" />
              </Link>

              {/* LINKEDIN */}
              <Link
                href="/"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 transition hover:bg-violet-500"
              >
                <LogoLinkedin className="h-5 w-5" />
              </Link>

              {/* CUSTOM X/TWITTER */}
              <Link
                href="/"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-semibold transition hover:bg-violet-600"
              >
                X
              </Link>
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h2 className="mb-5 text-sm font-semibold text-violet-500">
              Product
            </h2>

            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Job discovery
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-white transition">
                  Worker AI
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-white transition">
                  Companies
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-white transition">
                  Salary data
                </Link>
              </li>
            </ul>
          </div>

          {/* NAVIGATION */}
          <div>
            <h2 className="mb-5 text-sm font-semibold text-violet-500">
              Navigations
            </h2>

            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Help center
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-white transition">
                  Career library
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h2 className="mb-5 text-sm font-semibold text-violet-500">
              Resources
            </h2>

            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Brand Guideline
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-white transition">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row">
          
          <p>
            Copyright 2024 — Programming Hero
          </p>

          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-white transition">
              Terms & Policy
            </Link>

            <Link href="/" className="hover:text-white transition">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;