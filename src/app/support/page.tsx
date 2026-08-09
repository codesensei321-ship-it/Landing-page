import Link from 'next/link'
import { Mail, MessageCircle, Book, Clock } from 'lucide-react'
import Footer from '@/components/footer-3'

export default function SupportPage() {
    return (
        <>
            <main className="pt-24 pb-16">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="text-center">
                        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">Support</h1>
                        <p className="text-muted-foreground mt-4 text-lg">We&apos;re here to help you get the most out of Cleanmails.</p>
                    </div>

                    <div className="mt-16 grid gap-6 sm:grid-cols-2">
                        <div className="ring-foreground/10 rounded-2xl bg-card p-6 ring">
                            <Mail className="size-6 text-yellow-500" />
                            <h3 className="mt-4 text-lg font-medium">Email Support</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Get help directly from our team. We typically respond within 24 hours.</p>
                            <Link
                                href="mailto:hello@coldmail.host"
                                className="mt-4 inline-flex items-center text-sm font-medium text-yellow-500 hover:underline"
                            >
                                hello@coldmail.host
                            </Link>
                        </div>

                        <div className="ring-foreground/10 rounded-2xl bg-card p-6 ring">
                            <Book className="size-6 text-yellow-500" />
                            <h3 className="mt-4 text-lg font-medium">Documentation</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Step-by-step guides for installation, configuration, and advanced usage.</p>
                            <Link
                                href="/docs"
                                className="mt-4 inline-flex items-center text-sm font-medium text-yellow-500 hover:underline"
                            >
                                Read the docs →
                            </Link>
                        </div>

                        <div className="ring-foreground/10 rounded-2xl bg-card p-6 ring">
                            <MessageCircle className="size-6 text-yellow-500" />
                            <h3 className="mt-4 text-lg font-medium">Community</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Join our Discord community for tips, discussions, and peer support.</p>
                            <Link
                                href="#"
                                className="mt-4 inline-flex items-center text-sm font-medium text-yellow-500 hover:underline"
                            >
                                Join Discord →
                            </Link>
                        </div>

                        <div className="ring-foreground/10 rounded-2xl bg-card p-6 ring">
                            <Clock className="size-6 text-yellow-500" />
                            <h3 className="mt-4 text-lg font-medium">Priority Support</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Starter Kit customers get priority support with faster response times.</p>
                            <Link
                                href="https://starter-kit.cleanmails.online/"
                                target="_blank"
                                className="mt-4 inline-flex items-center text-sm font-medium text-yellow-500 hover:underline"
                            >
                                Get Starter Kit →
                            </Link>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <h2 className="text-2xl font-medium tracking-tight">Common Topics</h2>
                        <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
                            <div className="border-b pb-4">
                                <p className="text-foreground text-sm font-medium">Installation & Setup</p>
                                <p className="text-muted-foreground mt-1 text-xs">Server requirements, install script, first-run configuration.</p>
                            </div>
                            <div className="border-b pb-4">
                                <p className="text-foreground text-sm font-medium">SMTP Configuration</p>
                                <p className="text-muted-foreground mt-1 text-xs">Connecting Gmail, AWS SES, Mailgun, or custom SMTP.</p>
                            </div>
                            <div className="border-b pb-4">
                                <p className="text-foreground text-sm font-medium">Warmup & Deliverability</p>
                                <p className="text-muted-foreground mt-1 text-xs">Auto-warmup settings, reputation monitoring, best practices.</p>
                            </div>
                            <div className="border-b pb-4">
                                <p className="text-foreground text-sm font-medium">MCP & AI Integration</p>
                                <p className="text-muted-foreground mt-1 text-xs">Connecting AI agents, auto-reply configuration, API keys.</p>
                            </div>
                            <div className="border-b pb-4">
                                <p className="text-foreground text-sm font-medium">Campaigns & Sequences</p>
                                <p className="text-muted-foreground mt-1 text-xs">Creating campaigns, scheduling, spintax, A/B testing.</p>
                            </div>
                            <div className="border-b pb-4">
                                <p className="text-foreground text-sm font-medium">Billing & Licensing</p>
                                <p className="text-muted-foreground mt-1 text-xs">License activation, refunds, upgrading to Starter Kit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
