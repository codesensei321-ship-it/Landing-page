import { Mail, Bot, Flame, LineChart, Inbox } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl space-y-12 px-6">
                <h2 className="text-muted-foreground relative z-10 max-w-4xl text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                    <span className="text-foreground">Unlimited mailboxes, one inbox.</span> <br /> Manage all replies from a single dashboard.
                </h2>
                <div className="relative -mx-6 overflow-hidden px-3 pt-3 md:-mx-8">
                    <div className="mask-radial-at-top-left mask-radial-from-65% mask-radial-[100%_60%] z-1 absolute inset-3 size-64 rounded-tl-3xl border-l border-t md:size-96 lg:inset-4"></div>
                    <div className="min-w-2xl aspect-88/36 mask-b-from-75% mask-b-to-95% relative">
                        <Image
                            src="/Screenshot 2026-07-30 103105.png"
                            className="absolute inset-0 z-10"
                            alt="app screenshot"
                            width={2797}
                            height={1137}
                        />
                        <Image
                            src="/Screenshot 2026-07-30 103105.png"
                            alt="app screenshot"
                            width={2797}
                            height={1137}
                            className="opacity-75"
                        />
                    </div>
                </div>
                <div className="@container mt-12 md:mt-16 lg:mt-24">
                    <div className="@xl:grid-cols-3 grid grid-cols-2 gap-6 text-sm">
                        <div className="space-y-3 border-t pt-6">
                            <Mail className="text-muted-foreground size-4" />
                            <p className="text-muted-foreground leading-5">
                                <span className="text-foreground font-medium">Unlimited mailboxes</span> Connect as many SMTP accounts as you need with zero per-seat fees.
                            </p>
                        </div>

                        <div className="space-y-3 border-t pt-6">
                            <Inbox className="text-muted-foreground size-4" />
                            <p className="text-muted-foreground leading-5">
                                <span className="text-foreground font-medium">Unified inbox</span> See and reply to every conversation across all accounts from one place.
                            </p>
                        </div>

                        <div className="space-y-3 border-t pt-6">
                            <Bot className="text-muted-foreground size-4" />
                            <p className="text-muted-foreground leading-5">
                                <span className="text-foreground font-medium">AI auto-replies</span> When you can&apos;t respond, AI classifies intent and replies intelligently.
                            </p>
                        </div>

                        <div className="space-y-3 border-t pt-6">
                            <Flame className="text-muted-foreground size-4" />
                            <p className="text-muted-foreground leading-5">
                                <span className="text-foreground font-medium">Auto warmup</span> Every connected mailbox is warmed up automatically in the background.
                            </p>
                        </div>

                        <div className="space-y-3 border-t pt-6">
                            <LineChart className="text-muted-foreground size-4" />
                            <p className="text-muted-foreground leading-5">
                                <span className="text-foreground font-medium">Health metrics</span> Detailed analytics on deliverability, reputation, and domain health.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
