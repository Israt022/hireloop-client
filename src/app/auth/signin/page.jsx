"use client";
import { signIn } from "@/lib/auth-client";
import { ArrowLeft, Envelope, Lock } from "@gravity-ui/icons";
import { Button, Input } from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";


const SignIn = () => {
    const handleSignup = async(e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const signinData = Object.fromEntries(formData.entries());
        const { data, error } = await signIn.email({
            ...signinData,
            callbackURL: "/",
        });
        if(error){
            toast.error("Signin failed!")
            return;
        }
        if(data){
            toast.success("Signin successfully");
        }
    }
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-8 text-white">
      
      {/* BG GLOW */}
      <div className="absolute left-1/2 top-0 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl sm:p-8">
        
        {/* BACK */}
        <Link
          href="/auth/signup"
          className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Sign Up
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

          {/* BUTTON */}
          <Button
            type="submit"
            // isLoading={loading}
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
        //   onClick={handleGoogleSignIn}
          variant="bordered"
          className="h-12 w-full rounded-2xl border-white/10 bg-white/[0.03] text-white hover:bg-white/10"
        >
          Continue with Google
        </Button>

        {/* SIGN IN */}
        <p className="mt-6 text-center text-sm text-white/50">
          Do not have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-medium text-violet-400 hover:text-violet-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
    );
};

export default SignIn;