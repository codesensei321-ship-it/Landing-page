'use client'

import { Activity, ArrowRightLeft, ArrowUp, Bell, Calendar, ChevronDown, Clock, CloudDownload, HardDriveDownload, History, Link2, ListChecks, Mail, Mic2, MonitorDown, Plug, Plus, Users, Zap, Bot, Cpu, RefreshCw, Send, Shuffle, Server, Flame, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

const features = [
    { id: 'workflow-agents', label: 'Campaign sender' },
    { id: 'alerts', label: 'MCP & AI control' },
    { id: 'timeline', label: 'Smart variants' },
    { id: 'integrations', label: 'SMTP & Warmup' },
] as const

type FeatureId = (typeof features)[number]['id']

const featureHighlights: Record<FeatureId, { icon: LucideIcon; label: string }[]> = {
    'workflow-agents': [
        { icon: ArrowRightLeft, label: 'Automated sequence sending' },
        { icon: ListChecks, label: 'Multi-step cadences' },
        { icon: Zap, label: 'Follow-up scheduling' },
    ],
    alerts: [
        { icon: Bot, label: 'MCP protocol connection' },
        { icon: Cpu, label: 'AI auto-reply handling' },
        { icon: Activity, label: 'Smart campaign control' },
    ],
    timeline: [
        { icon: Shuffle, label: 'Subject line rotation' },
        { icon: RefreshCw, label: 'Sentence-level variants' },
        { icon: Users, label: 'Sender identity rotation' },
    ],
    integrations: [
        { icon: Server, label: 'Any SMTP or AWS SES' },
        { icon: Flame, label: 'Auto warmup per sender' },
        { icon: Calendar, label: 'Sending schedules' },
    ],
}

function FeatureList({ items }: { items: { icon: LucideIcon; label: string }[] }) {
    return (
        <ul className="text-muted-foreground mt-8 divide-y *:flex *:items-center *:gap-3 *:py-3">
            {items.map(({ icon: Icon, label }) => (
                <li key={label}>
                    <Icon className="size-4" />
                    {label}
                </li>
            ))}
        </ul>
    )
}

export default function FeaturesSection() {
    const [activeId, setActiveId] = useState<FeatureId>('workflow-agents')
    const sectionRefs = useRef<Partial<Record<FeatureId, HTMLDivElement | null>>>({})

    const scrollToFeature = (id: FeatureId) => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActiveId(id)
    }

    useEffect(() => {
        const sections = features.map((feature) => sectionRefs.current[feature.id]).filter((section): section is HTMLDivElement => section != null)

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                const nextId = visible[0]?.target.id as FeatureId | undefined
                if (nextId) setActiveId(nextId)
            },
            { rootMargin: '-25% 0px -55% 0px', threshold: [0.15, 0.35, 0.55, 0.75] }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight">
                    <span className="text-foreground">Built for the full sending stack.</span> <br /> One self-hosted outreach platform.
                </h2>
                <div className="mt-16 grid gap-6 md:mt-32 lg:grid-cols-[auto_1fr]">
                    <div className="sticky top-24 h-fit w-56 max-lg:hidden">
                        <div className="text-muted-foreground text-sm">Product</div>
                        <div className="-ml-4 mt-4 flex flex-col *:justify-start">
                            {features.map((feature) => (
                                <Button
                                    key={feature.id}
                                    type="button"
                                    variant="ghost"
                                    data-state={activeId === feature.id ? 'active' : undefined}
                                    onClick={() => scrollToFeature(feature.id)}
                                    className="not-data-[state=active]:text-muted-foreground hover:bg-transparent">
                                    {feature.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 md:gap-32">
                        {/* Campaign Sender */}
                        <div
                            ref={(element) => {
                                sectionRefs.current['workflow-agents'] = element
                            }}
                            id="workflow-agents"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">Campaign sender</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">Automated campaigns.</span> Send sequences, schedule follow-ups, and run cadences from your own server without limits.
                                    </p>
                                </div>
                                <FeatureList items={featureHighlights['workflow-agents']} />
                            </div>
                            <div className="border-border/50 bg-foreground/2 relative flex aspect-square overflow-hidden rounded-3xl border p-3 sm:p-6 md:col-span-3">
                                <SequenceIllustration />
                            </div>
                        </div>

                        {/* MCP & AI Control */}
                        <div
                            ref={(element) => {
                                sectionRefs.current.alerts = element
                            }}
                            id="alerts"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">MCP & AI control</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">AI-powered outreach.</span> Connect via MCP protocol so AI agents manage replies, pause campaigns, and optimize sending automatically.
                                    </p>
                                </div>
                                <FeatureList items={featureHighlights.alerts} />
                            </div>
                            <div className="border-border/50 bg-foreground/2 relative flex aspect-square overflow-hidden rounded-3xl border p-3 sm:p-6 md:col-span-3">
                                <MCPIllustration />
                            </div>
                        </div>

                        {/* Smart Variants */}
                        <div
                            ref={(element) => {
                                sectionRefs.current.timeline = element
                            }}
                            id="timeline"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">Smart variants</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">Unique every time.</span> Subject lines rotate, sentences alter, senders shuffle so <span className="rounded bg-yellow-500/10 px-1.5 text-yellow-500">no two recipients get the same email</span>.
                                    </p>
                                </div>
                                <FeatureList items={featureHighlights.timeline} />
                            </div>
                            <div className="border-border/50 bg-foreground/2 relative flex aspect-square overflow-hidden rounded-3xl border p-3 sm:p-6 md:col-span-3">
                                <VariantsIllustration />
                            </div>
                        </div>

                        {/* SMTP & Warmup */}
                        <div
                            ref={(element) => {
                                sectionRefs.current.integrations = element
                            }}
                            id="integrations"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">SMTP & Warmup</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">Connect anything.</span> Use any SMTP provider or AWS SES, then auto-warmup every sender to build reputation gradually.
                                    </p>
                                </div>
                                <FeatureList items={featureHighlights.integrations} />
                            </div>
                            <div className="border-border/50 bg-foreground/2 relative flex aspect-square overflow-hidden rounded-3xl border p-3 sm:p-6 md:col-span-3">
                                <SMTPWarmupIllustration />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ─── Illustration: Sequence & Follow-ups ─── */
function SequenceIllustration() {
    return (
        <div aria-hidden className="z-1 m-auto w-full max-w-xs space-y-2 sm:space-y-3 overflow-hidden">
            {/* Step 1 */}
            <div className="bg-card ring-foreground/10 flex items-center gap-3 rounded-xl p-3 ring">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-yellow-500/15 text-xs font-bold text-yellow-500">1</div>
                <div className="min-w-0 flex-1">
                    <div className="text-foreground text-xs font-medium">Initial outreach</div>
                    <div className="text-muted-foreground text-[11px]">Day 0 · Personalized intro</div>
                </div>
                <Send className="text-muted-foreground size-3.5" />
            </div>
            {/* Connector */}
            <div className="flex justify-center"><div className="border-border h-4 w-px border-l border-dashed" /></div>
            {/* Step 2 */}
            <div className="bg-card ring-foreground/10 flex items-center gap-3 rounded-xl p-3 ring">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-yellow-500/15 text-xs font-bold text-yellow-500">2</div>
                <div className="min-w-0 flex-1">
                    <div className="text-foreground text-xs font-medium">Follow-up #1</div>
                    <div className="text-muted-foreground text-[11px]">Day 3 · Value add nudge</div>
                </div>
                <Clock className="text-muted-foreground size-3.5" />
            </div>
            {/* Connector */}
            <div className="flex justify-center"><div className="border-border h-4 w-px border-l border-dashed" /></div>
            {/* Step 3 */}
            <div className="bg-card ring-foreground/10 flex items-center gap-3 rounded-xl p-3 ring">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-yellow-500/15 text-xs font-bold text-yellow-500">3</div>
                <div className="min-w-0 flex-1">
                    <div className="text-foreground text-xs font-medium">Follow-up #2</div>
                    <div className="text-muted-foreground text-[11px]">Day 7 · Breakup email</div>
                </div>
                <Mail className="text-muted-foreground size-3.5" />
            </div>
            {/* Connector */}
            <div className="flex justify-center"><div className="border-border h-4 w-px border-l border-dashed" /></div>
            {/* Status */}
            <div className="bg-yellow-500/10 ring-yellow-500/20 flex items-center justify-center gap-2 rounded-xl p-2.5 ring">
                <Zap className="size-3.5 text-yellow-500" />
                <span className="text-xs font-medium text-yellow-500">Auto-sends on schedule</span>
            </div>
        </div>
    )
}

/* ─── Illustration: MCP & AI Control ─── */
function MCPIllustration() {
    return (
        <div aria-hidden className="z-1 m-auto w-full max-w-sm space-y-2 sm:space-y-3 overflow-hidden">
            {/* Chat UI */}
            <div className="bg-card ring-foreground/10 rounded-xl p-3 ring">
                <div className="flex items-center gap-2 border-b border-dashed pb-2 mb-2">
                    <Image src="/logos/claude-ai-icon.svg" alt="Claude" width={16} height={16} className="size-4" />
                    <span className="text-foreground text-[11px] font-medium">Claude Agent</span>
                    <div className="ml-auto size-1.5 rounded-full bg-emerald-400" />
                </div>
                {/* Chat messages */}
                <div className="space-y-2">
                    <div className="flex gap-2">
                        <div className="bg-foreground/5 rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[85%]">
                            <p className="text-[10px] text-muted-foreground">Checking campaign &quot;Q3 Outreach&quot; for new replies...</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-yellow-500/10 rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[85%]">
                            <p className="text-[10px] text-yellow-500">Found 3 replies. Classifying intent...</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-foreground/5 rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[85%]">
                            <p className="text-[10px] text-muted-foreground">✓ 2 interested → moved to hot leads</p>
                            <p className="text-[10px] text-muted-foreground">✓ 1 unsubscribe → removed from list</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-emerald-500/10 rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[85%]">
                            <p className="text-[10px] text-emerald-400">Done. Pausing low-reputation sender3@...</p>
                        </div>
                    </div>
                </div>
                {/* Input */}
                <div className="mt-2 flex items-center gap-2 border-t border-dashed pt-2">
                    <div className="bg-foreground/5 text-muted-foreground flex-1 rounded-full px-3 py-1.5 text-[10px]">Ask agent to do something...</div>
                    <div className="bg-yellow-500 flex size-5 items-center justify-center rounded-full">
                        <ArrowUp className="size-3 text-black" />
                    </div>
                </div>
            </div>
            {/* MCP Connection bar */}
            <div className="bg-card ring-foreground/10 flex items-center gap-2 rounded-lg p-2.5 ring">
                <div className="flex size-5 items-center justify-center rounded-md bg-blue-500/15">
                    <Plug className="size-2.5 text-blue-400" />
                </div>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground font-mono break-all">MCP → cleanmails.replies.handle()</span>
                <div className="ml-auto size-1.5 rounded-full bg-emerald-400" />
            </div>
            {/* Logos row */}
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-card ring-foreground/10 flex items-center gap-2 rounded-lg p-2 ring">
                    <Image src="/logos/claude-ai-icon.svg" alt="Claude AI" width={16} height={16} className="size-4" />
                    <span className="text-[10px] text-purple-400">AI Agent</span>
                </div>
                <div className="bg-card ring-foreground/10 flex items-center gap-2 rounded-lg p-2 ring">
                    <Image src="/icon.png" alt="Cleanmails" width={16} height={16} className="size-4" />
                    <span className="text-[10px] text-yellow-500">Campaigns</span>
                </div>
            </div>
        </div>
    )
}

/* ─── Illustration: Smart Variants ─── */
function VariantsIllustration() {
    return (
        <div aria-hidden className="z-1 m-auto w-full max-w-sm space-y-2 sm:space-y-3 overflow-hidden">
            {/* Original */}
            <div className="bg-card ring-foreground/10 rounded-xl p-3 ring">
                <div className="text-muted-foreground mb-1.5 text-[10px] font-medium uppercase tracking-wider">Original email</div>
                <div className="text-foreground text-xs"><span className="text-yellow-500">Subject:</span> Quick question about your growth</div>
                <div className="text-muted-foreground mt-1 text-[11px]">Hi {'{name}'}, I noticed your team is scaling fast...</div>
            </div>
            {/* Arrow down */}
            <div className="flex items-center justify-center gap-2">
                <Shuffle className="size-3.5 text-yellow-500" />
                <span className="text-[10px] text-yellow-500 font-medium">Generates unique variants</span>
            </div>
            {/* Variants */}
            <div className="grid grid-cols-1 gap-2">
                <div className="bg-card ring-foreground/10 rounded-lg p-2.5 ring opacity-90">
                    <div className="text-foreground text-[11px]"><span className="text-blue-400">✉ A:</span> Curious about your expansion plans</div>
                    <div className="text-muted-foreground text-[10px]">Hey {'{name}'}, saw your team is growing quickly...</div>
                </div>
                <div className="bg-card ring-foreground/10 rounded-lg p-2.5 ring opacity-80">
                    <div className="text-foreground text-[11px]"><span className="text-purple-400">✉ B:</span> Thoughts on scaling your outreach?</div>
                    <div className="text-muted-foreground text-[10px]">Hi {'{name}'}, I came across your rapid growth...</div>
                </div>
                <div className="bg-card ring-foreground/10 rounded-lg p-2.5 ring opacity-70">
                    <div className="text-foreground text-[11px]"><span className="text-emerald-400">✉ C:</span> A quick idea for your team</div>
                    <div className="text-muted-foreground text-[10px]">Hello {'{name}'}, noticed you&apos;re hiring fast...</div>
                </div>
            </div>
            {/* Result */}
            <div className="bg-yellow-500/10 ring-yellow-500/20 flex items-center justify-center gap-2 rounded-lg p-2 ring">
                <RefreshCw className="size-3 text-yellow-500" />
                <span className="text-[10px] font-medium text-yellow-500">Every recipient gets a unique version</span>
            </div>
        </div>
    )
}

/* ─── Illustration: SMTP & Auto Warmup ─── */
function SMTPWarmupIllustration() {
    return (
        <div aria-hidden className="z-1 m-auto w-full max-w-sm space-y-2 sm:space-y-3 overflow-hidden">
            {/* SMTP Providers */}
            <div className="bg-card ring-foreground/10 rounded-xl p-3 ring">
                <div className="text-muted-foreground mb-2 text-[10px] font-medium uppercase tracking-wider">Connected providers</div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="bg-foreground/5 flex flex-col items-center gap-1.5 rounded-lg p-2.5">
                        <Image src="/logos/aws-dark.svg" alt="AWS SES" width={20} height={20} className="size-5" />
                        <span className="text-[9px] text-orange-400">AWS SES</span>
                    </div>
                    <div className="bg-foreground/5 flex flex-col items-center gap-1.5 rounded-lg p-2.5">
                        <Image src="/logos/gmail.svg" alt="Gmail" width={20} height={20} className="size-5" />
                        <span className="text-[9px] text-blue-400">Gmail SMTP</span>
                    </div>
                    <div className="bg-foreground/5 flex flex-col items-center gap-1.5 rounded-lg p-2.5">
                        <Image src="/logos/sendgrid-svgrepo-com.svg" alt="SendGrid" width={20} height={20} className="size-5" />
                        <span className="text-[9px] text-purple-400">SendGrid</span>
                    </div>
                </div>
            </div>
            {/* Warmup Progress */}
            <div className="bg-card ring-foreground/10 rounded-xl p-3 ring">
                <div className="flex items-center gap-2">
                    <Flame className="size-4 text-yellow-500" />
                    <span className="text-foreground text-xs font-medium">Auto Warmup Active</span>
                </div>
                <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground text-[10px] sm:text-[11px] truncate">sender1@domain.com</span>
                        <span className="text-[9px] sm:text-[10px] text-emerald-400 shrink-0 ml-2">Day 14 · 45/day</span>
                    </div>
                    <div className="bg-foreground/10 h-1.5 overflow-hidden rounded-full">
                        <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-yellow-500 to-emerald-400" />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground text-[10px] sm:text-[11px] truncate">sender2@domain.com</span>
                        <span className="text-[9px] sm:text-[10px] text-yellow-400 shrink-0 ml-2">Day 7 · 20/day</span>
                    </div>
                    <div className="bg-foreground/10 h-1.5 overflow-hidden rounded-full">
                        <div className="h-full w-[40%] rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground text-[10px] sm:text-[11px] truncate">sender3@domain.com</span>
                        <span className="text-[9px] sm:text-[10px] text-orange-400 shrink-0 ml-2">Day 2 · 5/day</span>
                    </div>
                    <div className="bg-foreground/10 h-1.5 overflow-hidden rounded-full">
                        <div className="h-full w-[15%] rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" />
                    </div>
                </div>
            </div>
            {/* Status */}
            <div className="bg-emerald-500/10 ring-emerald-500/20 flex items-center justify-center gap-2 rounded-lg p-2 ring">
                <Activity className="size-3 text-emerald-400" />
                <span className="text-[10px] font-medium text-emerald-400">Reputation building automatically</span>
            </div>
        </div>
    )
}
