"use client";

import { Button, Input } from "@heroui/react";

import {
  Briefcase,
  Factory,
  Magnifier,
  Star,
  MapPin,
} from "@gravity-ui/icons";

const Banner = () => {
  const stats = [
    {
      id: 1,
      icon: <Briefcase className="h-4 w-4" />,
      value: "50K",
      label: "Active Jobs",
    },
    {
      id: 2,
      icon: <Factory className="h-4 w-4" />,
      value: "12K",
      label: "Companies",
    },
    {
      id: 3,
      icon: <Magnifier className="h-4 w-4" />,
      value: "2M",
      label: "Job Seekers",
    },
    {
      id: 4,
      icon: <Star className="h-4 w-4" />,
      value: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      
      {/* BG IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: "url('/images/globe.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* GLOW */}
      <div className="absolute left-1/2 top-0 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        
        {/* BADGE */}
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
          <span>🔥</span>

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-xs">
            50,000+ New Jobs This Month
          </p>
        </div>

        {/* HERO */}
        <div className="mx-auto mt-6 max-w-3xl text-center">
          
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Find Your Dream Job Today
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            HireLoop connects top talent with world-class companies.
            Browse thousands of curated opportunities and land your
            next role faster.
          </p>

          {/* SEARCH */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">
            
            <div className="flex flex-col gap-3 lg:flex-row">
              
              {/* INPUT */}
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4">
                <Magnifier className="h-4 w-4 text-white/40" />

                <Input
                  type="text"
                  placeholder="Job title or company"
                  variant="underlined"
                  className={"text-sm text-white placeholder:text-white/40"}
                />
              </div>

              {/* LOCATION */}
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4">
                <MapPin className="h-4 w-4 text-white/40" />

                <Input
                  type="text"
                  placeholder="Location or Remote"
                  variant="underlined"
                  className={"text-sm text-white placeholder:text-white/40"}
                />
              </div>

              {/* BUTTON */}
              <Button className="h-12 rounded-xl bg-violet-600 px-6 text-white hover:bg-violet-500">
                <Magnifier className="h-4 w-4" />
              </Button>
            </div>

            {/* TAGS */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {[
                "Trending",
                "Designer",
                "AI Engineer",
                "DevOps",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] text-white/60 sm:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="mt-40 text-center sm:mt-52">
          <h2 className="text-xl font-medium leading-relaxed text-white/90 sm:text-3xl">
            Assisting over 15,000 job seekers
            <br />
            find their dream positions.
          </h2>
        </div>

        {/* STATS */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:border-violet-500/30"
            >
              {/* GLOW */}
              <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-white/10 blur-3xl transition duration-300 group-hover:bg-violet-500/20" />

              {/* ICON */}
              <div className="relative z-10 text-white/80">
                {stat.icon}
              </div>

              {/* VALUE */}
              <h3 className="relative z-10 mt-8 text-4xl font-bold">
                {stat.value}
              </h3>

              {/* LABEL */}
              <p className="relative z-10 mt-2 text-sm text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;