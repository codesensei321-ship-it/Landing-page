import Link from 'next/link'
import { ArrowRight, Check, Code, Rocket, Shield } from 'lucide-react'
import Image from 'next/image'

const features = [
    { icon: Code, text: 'Full source code (Next.js + Go)' },
    { icon: Rocket, text: 'Deploy to your VPS in 5 minutes' },
    { icon: Shield, text: 'White-label ready, no reselling' },
]

const includes = [
    'Pre-configured sending infrastructure',
    'Campaign builder + sequence engine',
    'Warmup system built-in',
    'Admin dashboard & client workspaces',
    'Private GitHub repo with lifetime updates',
    'Priority developer support',
]

export default function StarterKit() {
    return (
        <section className="bg-background py-16">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
                    {/* Left: Info */}
                    <div className="ring-yellow-500/20 relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-card p-6 sm:p-8">
                        <div className="pointer-events-none absolute -left-20 -bottom-20 size-48 rounded-full bg-yellow-500/5 blur-3xl" />
                        <div className="relative">
                            <p className="text-xs font-bold uppercase tracking-widest text-yellow-500">Source Code / SaaS License</p>
                            <div className="mt-4">
                                <span className="text-4xl font-bold tracking-tight sm:text-5xl">$997</span>
                                <span className="text-muted-foreground ml-2">one-time</span>
                            </div>
                            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                                Get the complete Cleanmails source code. Build your own SaaS product, charge your customers, and keep 100% of the revenue.
                            </p>

                            <div className="mt-6 space-y-3">
                                {features.map(({ icon: Icon, text }) => (
                                    <div key={text} className="flex items-center gap-3">
                                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
                                            <Icon className="size-3.5 text-yellow-500" />
                                        </div>
                                        <span className="text-sm text-foreground">{text}</span>
                                    </div>
                                ))}
                                <div className="flex items-center gap-3">
                                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
                                        <svg className="size-3.5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                    </div>
                                    <span className="text-sm text-foreground">Private GitHub repo access</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link
                                    href="https://starter-kit.cleanmails.online/"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-2.5 text-sm font-semibold text-zinc-900 transition-all hover:bg-yellow-400 active:scale-[0.97]"
                                >
                                    Get Source Access
                                    <ArrowRight className="size-3.5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right: What's included */}
                    <div className="ring-foreground/10 flex flex-col justify-between rounded-2xl bg-card p-6 ring sm:p-8">
                        <div>
                            <p className="text-sm font-semibold text-foreground">What you get:</p>
                            <ul className="mt-4 space-y-3">
                                {includes.map((item) => (
                                    <li key={item} className="flex items-center gap-2.5">
                                        <Check className="size-3.5 shrink-0 text-emerald-400" strokeWidth={3} />
                                        <span className="text-muted-foreground text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t pt-5">
                            <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                                <Check className="size-3 text-emerald-400" strokeWidth={3} /> 14-day guarantee
                            </span>
                            <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                                <span className="text-emerald-400">∞</span> Lifetime updates
                            </span>
                            <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                                <span className="text-emerald-400">→</span> $9 done-for-you install
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
