"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@heroui/react';

import { Bars, Xmark } from '@gravity-ui/icons';
import { signOut, useSession } from '@/lib/auth-client';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const {data:session,isPending} = useSession();
  const user = session?.user;
  // console.log(user,"Navbar",isPending,session);


  const navItems = [
    {
      label: 'Browse Jobs',
      href: '/jobs',
    },
    {
      label: 'Companies',
      href: '/companies',
    },
    {
      label: 'Pricing',
      href: '/plans',
    },
  ];

  const dashboardLinks = {
    seeker : '/dashboard/seeker',
    recruiter : '/dashboard/recruiter',
    admin : '/dashboard/admin',
  }

  if(user?.email){
    navItems.push(
      {
        label : 'Dashboard',
        href : dashboardLinks[user?.role || 'seeker']
      }
    )
  }
  const handleLogout = async()=>{
    await signOut();
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0B0F]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 shadow-lg shadow-violet-500/20">
            <div className="h-3 w-3 rounded-full bg-white" />
          </div>

          <div className="leading-none">
            <h1 className="text-lg font-bold tracking-tight text-white">
              Hire
            </h1>

            <p className="text-sm font-medium text-white/80">
              Loop
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVBAR */}
        <div className="hidden items-center gap-8 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 backdrop-blur-xl lg:flex">
          
          {/* NAV LINKS */}
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-white/70 transition duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* DIVIDER */}
          <div className="h-6 w-px bg-white/10" />

          {
            user
            ?
            <>
              <h2>Hello, {user?.name} </h2>
              <Button onClick={handleLogout} className={"bg-red-500 rounded-none"}>Logout</Button>
            </>
            :
            <>
              {/* SIGN IN */}
              <Link
                href="/auth/signin"
                className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
              >
                Sign In
              </Link>

              {/* BUTTON */}
              <Link href={'/auth/signup'}>
                <Button
                  radius="full"
                  className="h-11 bg-white px-6 text-sm font-semibold text-black transition hover:bg-neutral-200"
                >
                  Get Started
                </Button>
              </Link>
            </>
          }
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white lg:hidden"
        >
          {isMenuOpen ? (
            <Xmark className="h-6 w-6" />
          ) : (
            <Bars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mb-4 rounded-3xl border border-white/10 bg-[#111114]/95 p-6 backdrop-blur-2xl">
          
          {/* MOBILE NAV LINKS */}
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm font-medium text-white/70 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* DIVIDER */}
          <div className="my-6 h-px bg-white/10" />

          {/* MOBILE ACTIONS */}
          <div className="flex flex-col gap-4">
            {
              user 
              ?
              <Button onClick={handleLogout} className={"bg-red-500"}>
                Logout
              </Button>
              :
              <>
              <Link
                href="/login"
                className="text-sm font-medium text-violet-400"
              >
                Sign In
              </Link>

              <Button
                radius="full"
                className="h-11 bg-white text-sm font-semibold text-black hover:bg-neutral-200"
              >
                Get Started
              </Button>
              </>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;