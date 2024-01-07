"use client"

import { useAuth } from "@clerk/nextjs"
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
    const {isSignedIn} = useAuth();
    return (
        <div className="text-white font-bold py-36 text-center space-y-7">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-7 font-extrabold leading-tight">
                <h1>A single AI platform for</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-400 leading-tight">
                    <TypewriterComponent 
                        options={{
                            strings: [
                                "Chatbot.",
                                "Image Generation.",
                                "Music Generation.",
                                "Code Generation.",
                                "Video Generation."
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
                Unlock unparalleled content creation efficiency with DsimplyAI.
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                        Get started fot free
                    </Button>
                </Link>
            </div>
            <div className="text-zinc-400 text-xs md:text-sm font-normal">
                No Card required.
            </div>
        </div>

    )
}