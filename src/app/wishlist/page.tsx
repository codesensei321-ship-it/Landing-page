'use client'

import Link from 'next/link'
import Script from 'next/script'
import { Sparkles, Gift, Zap } from 'lucide-react'

export default function WishlistPage() {
    return (
        <>
            <Script src="https://getlaunchlist.com/js/widget.js" strategy="afterInteractive" />

            <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-16">
                <div className="w-full max-w-lg text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-500">
                        <Sparkles className="size-3.5" />
                        Coming Soon
                    </div>

                    {/* Heading */}
                    <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                        Cleanmails Cloud is coming.
                    </h1>
                    <p className="text-muted-foreground mt-4 text-balance text-base leading-relaxed">
                        The same powerful cold email platform — fully managed. No servers, no setup, no maintenance. Just log in and send.
                    </p>

                    {/* Perks */}
                    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <div className="ring-foreground/10 flex flex-col items-center gap-2 rounded-xl bg-card p-4 ring">
                            <Gift className="size-5 text-yellow-500" />
                            <p className="text-xs font-medium text-foreground">Early Bird LTD</p>
                            <p className="text-[11px] text-muted-foreground">Lifetime deal for first users</p>
                        </div>
                        <div className="ring-foreground/10 flex flex-col items-center gap-2 rounded-xl bg-card p-4 ring">
                            <Zap className="size-5 text-yellow-500" />
                            <p className="text-xs font-medium text-foreground">Special Discounts</p>
                            <p className="text-[11px] text-muted-foreground">Exclusive pricing at launch</p>
                        </div>
                        <div className="ring-foreground/10 flex flex-col items-center gap-2 rounded-xl bg-card p-4 ring">
                            <Sparkles className="size-5 text-yellow-500" />
                            <p className="text-xs font-medium text-foreground">First Access</p>
                            <p className="text-[11px] text-muted-foreground">Be the first to try it</p>
                        </div>
                    </div>

                    {/* Waitlist Widget */}
                    <div className="mt-10 ring-foreground/10 rounded-2xl bg-card p-6 ring sm:p-8">
                        <p className="text-sm font-medium text-foreground mb-4">Join the waitlist for early access:</p>
                        <div className="launchlist-widget" data-key-id="297eUV" />
                    </div>

                    {/* Back link */}
                    <p className="mt-8 text-sm text-muted-foreground">
                        <Link href="/" className="text-yellow-500 hover:underline">
                            ← Back to homepage
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
