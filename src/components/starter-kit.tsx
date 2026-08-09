import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

const points = [
    'Full source code (Next.js + Go)',
    'Pre-configured sending infrastructure',
    'Deploy to your VPS in 5 minutes',
    'White-label ready',
    'No reselling the codebase',
]

export default function StarterKit() {
    return (
        <section className="bg-background py-16">
            <div className="mx-auto max-w-3xl px-6">
                <div className="relative overflow-hidden rounded-2xl border-2 border-yellow-500/30 bg-card p-8 sm:p-10">
                    {/* Glow */}
                    <div className="pointer-events-none absolute -left-20 -top-20 size-60 rounded-full bg-yellow-500/5 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -right-20 size-60 rounded-full bg-yellow-500/5 blur-3xl" />

                    <div className="relative text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-yellow-500">Starter Kit / SaaS License</p>

                        <p className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">$997</p>
                        <p className="text-muted-foreground mt-1 text-sm">one-time payment</p>

                        <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2">
                            {points.map((point) => (
                                <span key={point} className="text-muted-foreground flex items-center gap-1.5 text-sm">
                                    <span className="text-muted-foreground">—</span> {point}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Link
                                href="https://starter-kit.cleanmails.online/"
                                target="_blank"
                                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3.5 text-sm font-semibold text-zinc-900 transition-all hover:bg-yellow-400 active:scale-[0.97]"
                            >
                                Get Starter Kit
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                            <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                                <Check className="size-3 text-emerald-400" strokeWidth={3} /> 14-day money-back guarantee
                            </span>
                            <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                                <span className="text-emerald-400">∞</span> Free lifetime updates
                            </span>
                            <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                                <span className="text-emerald-400">→</span> 5-min install ($9 done-for-you)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
