"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { TriangleExclamation, ArrowLeft } from "@gravity-ui/icons";

export default function ForbiddenPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20">
          <TriangleExclamation
            className="text-red-400"
            width={42}
            height={42}
          />
        </div>

        {/* Status */}
        <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1 text-sm font-medium text-red-400">
          403 Forbidden
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-white">
          Access Denied
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
          You do not have permission to access this page.
          Please contact an administrator if you believe this is a mistake.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link href="/">
            <Button
              variant="bordered"
              className="border-zinc-700 text-zinc-300"
            >
              <ArrowLeft width={16} height={16} />
              Go Home
            </Button>
          </Link>

          <Link href="/jobs">
            <Button className="bg-white text-black font-medium">
              Browse Jobs
            </Button>
          </Link>

        </div>

        {/* Footer Text */}
        <p className="mt-10 text-sm text-zinc-600">
          Error Code: 403 • Forbidden Resource
        </p>

      </div>
    </div>
  );
}