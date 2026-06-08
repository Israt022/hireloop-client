"use client";

import Link from "next/link";
import { useState } from "react";
import {Description, Label, Radio, RadioGroup} from "@heroui/react";
import { Button, Input } from "@heroui/react";

import {
  Person,
  Envelope,
  Lock,
  ArrowLeft,
  Picture,
} from "@gravity-ui/icons";

import toast from "react-hot-toast";
import { signUp } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";

// import { authClient } from "@/lib/auth-client";

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const [role,setRole] = useState("seeker");

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || "/";

  const route = useRouter();
  const handleSignup = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;
    const confirmPassword =
      form.confirmPassword.value;

    // VALIDATION
    if (password !== confirmPassword) {
      return toast.error(
        "Passwords do not match"
      );
    }

    if (password.length < 6) {
      return toast.error(
        "Password must be at least 6 characters"
      );
    }

    try {
        setLoading(true);

        const { data, error } = await signUp.email({
            email,
            password,
            name,
            image,
            role
        });

        if (error) {
            return toast.error(error.message);
        }

        toast.success(
            "Account created successfully"
        );

        form.reset();

        route.push(redirectTo);

    } catch (error) {
        toast.error(
        error.message || "Signup failed"
    );
    } finally {
        setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // REMOVE COMMENT WHEN USING BETTER AUTH
      /*
      await authClient.signIn.social({
        provider: "google",
      });
      */

      toast.success(
        "Google Sign In Success"
      );
    } catch (error) {
      toast.error(
        "Google Sign In Failed"
      );
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-8 text-white">
      
      {/* BG GLOW */}
      <div className="absolute left-1/2 top-0 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl sm:p-8">
        
        {/* BACK */}
        <Link
          href="/auth/signin"
          className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Sign In
        </Link>

        {/* HEADING */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-white/50">
            Join and find your dream job.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSignup}
          className="space-y-4"
        >
          {/* NAME */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4">
            <Person className="h-4 w-4 text-white/40" />

            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              variant="underlined"
              required
              className="text-white placeholder:text-white/40"
            />
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4">
            <Envelope className="h-4 w-4 text-white/40" />

            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              variant="underlined"
              required
              className="text-sm text-white placeholder:text-white/40"
            />
          </div>

          {/* IMAGE */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4">
            <Picture className="h-4 w-4 text-white/40" />

            <Input
              type="text"
              name="image"
              placeholder="Image URL"
              variant="underlined"
              className={'text-sm text-white placeholder:text-white/40'}
            />
          </div>

          {/* PASSWORD */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4">
            <Lock className="h-4 w-4 text-white/40" />

            <Input
              type="password"
              name="password"
              placeholder="Password"
              variant="underlined"
              required
              className={"text-sm text-white placeholder:text-white/40"}
            />
          </div>

          {/* CONFIRM */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4">
            <Lock className="h-4 w-4 text-white/40" />

            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              variant="underlined"
              required
              className={"text-sm text-white placeholder:text-white/40"}
            />
          </div>
          {/* Role selection */}
          <div className="flex flex-col gap-4">
            <Label>Subscription plan</Label>
            <RadioGroup 
              defaultValue="seeker" 
              name="role" 
              orientation="horizontal"
              onChange={value => setRole(value)}
            >
              <Radio value="seeker">
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                <Radio.Content>
                  <Label>Job Seeker</Label>
                </Radio.Content>
              </Radio>
              <Radio value="recruiter">
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                <Radio.Content>
                  <Label>Recruiter</Label>
                </Radio.Content>
              </Radio>
            </RadioGroup>
          </div>

          {/* BUTTON */}
          <Button
            type="submit"
            isLoading={loading}
            className="h-12 w-full rounded-2xl bg-violet-600 text-white hover:bg-violet-500"
          >
            Create Account
          </Button>
        </form>

        {/* DIVIDER */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />

          <span className="text-xs text-white/40">
            OR
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* GOOGLE */}
        <Button
          onClick={handleGoogleSignIn}
          variant="bordered"
          className="h-12 w-full rounded-2xl border-white/10 bg-white/[0.03] text-white hover:bg-white/10"
        >
          Continue with Google
        </Button>

        {/* SIGN IN */}
        <p className="mt-6 text-center text-sm text-white/50">
          Already have an account?{" "}
          <Link
            href={`/auth/signin?redirect=${redirectTo}`}
            className="font-medium text-violet-400 hover:text-violet-300"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignupPage;