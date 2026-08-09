import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'
import { CopyCommand } from '@/components/copy-command'

const features = [
    'Unlimited mailboxes & senders',
    'Unlimited leads & contacts',
    'Smart sender rotation',
    'Built-in email warmup ($0)',
    'Spintax + A/B body variants',
    'AI auto-reply (BYO API key)',
    'MCP protocol (AI agents)',
    'Webhook & CRM integrations',
    'Unlimited client workspaces',
    'White-label branding',
    'Self-hosted (your data)',
    'Lifetime free updates',
]

export default function Pricing() {
    return (
        <section id="pricing" className="bg-background py-24">
            <div className="mx-auto max-w-3xl px-6">
                <div className="text-center">
                    <p className="text-sm font-medium uppercase tracking-wider text-yellow-500">Pricing</p>
                    <h2 className="mt-4 text-balance text-4xl font-medium tracking-tight">One price. Everything included.</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">No monthly fees. No per-seat charges. Pay once, self-host forever.</p>
                </div>

                <div className="ring-foreground/10 relative mt-12 overflow-hidden rounded-3xl bg-card p-6 ring sm:p-8 md:p-10">
                    {/* Glow accent */}
                    <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-yellow-500/10 blur-3xl" />

                    <div className="relative grid gap-10 md:grid-cols-2">
                        {/* Left: Price */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <Sparkles className="size-5 text-yellow-500" />
                                <span className="text-sm font-medium text-yellow-500">Lifetime License</span>
                            </div>

                            <div className="mt-4">
                                <span className="text-5xl sm:text-6xl font-bold tracking-tight">$199</span>
                                <span className="text-muted-foreground ml-2 text-lg">one-time</span>
                            </div>

                            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                                Everything you need to run cold outreach from your own server. No recurring costs, no limits, no vendor lock-in.
                            </p>

                            <div className="mt-8 flex flex-col gap-3">
                                <Link
                                    href="https://checkout.dodopayments.com/buy/pdt_0NjDtkmaYaeeHprWb02rS?quantity=1&redirect_url=https://coldmail.host%2Fsuccess%3Flicense_key%3D%7Blicense_key%7D"
                                    target="_blank"
                                    className="inline-flex w-full items-center justify-center rounded-full bg-yellow-500 px-8 py-3.5 text-sm font-semibold text-zinc-900 transition-all hover:bg-yellow-400 active:scale-[0.97] sm:w-auto"
                                >
                                    Buy now
                                </Link>
                                <Link
                                    href="https://demo.cleanmails.online/dashboard"
                                    target="_blank"
                                    className="ring-foreground/10 inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium text-foreground ring transition-all hover:bg-foreground/5 sm:w-auto"
                                >
                                    View demo
                                </Link>
                            </div>

                            <div className="mt-5">
                                <CopyCommand command="curl -fsSL https://coldmail.host/install.sh | sudo bash" />
                            </div>

                            <p className="text-muted-foreground mt-4 text-xs">30-day money-back guarantee. No questions asked.</p>
                        </div>

                        {/* Right: Features */}
                        <div>
                            <p className="text-foreground text-sm font-semibold">Everything included:</p>
                            <ul className="mt-4 grid grid-cols-1 gap-3">
                                {features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2.5">
                                        <Check className="size-4 shrink-0 text-emerald-400" strokeWidth={3} />
                                        <span className="text-muted-foreground text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
