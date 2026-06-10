'use client';

import Link from 'next/link';
import { Button } from '@heroui/react';
import { ShieldExclamation, ArrowLeft } from '@gravity-ui/icons';
import { LogIn } from 'lucide-react';

export default function UnauthorizedPage() {
    return (
        <div className="min-h-[100vh] flex items-center justify-center bg-black px-6">
            <div className="max-w-lg w-full text-center">

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">
                    <ShieldExclamation
                        size={40}
                        className="text-red-400"
                    />
                </div>

                {/* Status */}
                <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
                    403 Forbidden
                </span>

                {/* Heading */}
                <h1 className="mt-6 text-4xl font-bold text-white">
                    Access Denied
                </h1>

                {/* Description */}
                <p className="mt-4 text-zinc-400 leading-relaxed">
                    You do not have permission to access this page.
                    Please contact your administrator or return to your dashboard.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <Link
                        href="/auth/signin"
                        className="flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                    >
                        <LogIn className="h-4 w-4" />
                        Sign In
                    </Link>
                    
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-black px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Go Back Home
                    </Link>
                </div>

                {/* Footer */}
                <p className="mt-10 text-xs text-zinc-600">
                    If you believe this is a mistake, please contact support.
                </p>

            </div>
        </div>
    );
}