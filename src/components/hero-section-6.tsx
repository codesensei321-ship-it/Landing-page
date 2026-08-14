import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import PillNav from '@/components/pill-nav'
import { CopyCommand } from '@/components/copy-command'

export default function HeroSection() {
    return (
        <>
            <PillNav
                logo="/icon.png"
                logoAlt="Cleanmails"
                items={[
                    { label: 'Features', href: '#workflow-agents' },
                    { label: 'Savings', href: '#savings' },
                    { label: 'Pricing', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
                baseColor="#ffffff"
                pillColor="#18181b"
                hoveredPillTextColor="#18181b"
                pillTextColor="#ffffff"
                initialLoadAnimation={true}
            />

            <main>
                <section className="overflow-hidden">
                    <div className="relative pt-24 lg:pt-40">
                        <div className="space-y-12 md:space-y-16">
                            <div className="relative mx-auto max-w-7xl px-6">
                                <Link
                                    href="/"
                                    className="flex w-fit items-center gap-2 font-medium">
                                    <span>Launch</span>
                                    <span className="text-muted-foreground">$199 for first 100 Customers</span>

                                    <ArrowRight className="size-3.5" />
                                </Link>

                                <div className="mt-8 grid items-end gap-4 md:grid-cols-2 md:gap-6">
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-balance text-4xl font-medium tracking-tight md:text-5xl xl:text-6xl">Own your cold email infrastructure</h1>
                                        <a href="https://www.producthunt.com/products/cleanmails?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-cleanmails-2" target="_blank" rel="noopener noreferrer">
                                            <img alt="Cleanmails - Self-hosted alternative to Instantly &amp; Smartlead | Product Hunt" width="250" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1208799&theme=light&t=1786686549409" />
                                        </a>
                                    </div>
                                    <div className="mx-auto flex max-w-md flex-col gap-6">
                                        <p className="text-muted-foreground text-lg leading-relaxed">Self-host your cold-email infrastructure. Unlimited mailboxes, rotation, warmup & AI replies. $199 once — no monthly fee.</p>

                                        <CopyCommand command="curl -fsSL https://coldmail.host/install.sh | sudo bash" />

                                        <div className="flex items-center gap-3">
                                            <Button
                                                className="w-fit"
                                                nativeButton={false}
                                                render={<Link href="https://checkout.dodopayments.com/buy/pdt_0NjDtkmaYaeeHprWb02rS?quantity=1&redirect_url=https://coldmail.host%2Fsuccess%3Flicense_key%3D%7Blicense_key%7D" target="_blank">Buy now ($199)</Link>}
                                            />
                                            <Button
                                                className="w-fit"
                                                variant="outline"
                                                nativeButton={false}
                                                render={<Link href="https://demo.cleanmails.online/dashboard" target="_blank">Demo</Link>}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mx-auto max-w-7xl max-xl:px-2">
                                <div className="bg-muted md:aspect-5/3 relative aspect-square overflow-hidden rounded-3xl lg:aspect-video">
                                    <div className="bg-background min-w-4xl lg:min-w-5xl xl:min-w-7xl ring-foreground/6.5 before:mask-radial-at-top-left before:mask-radial-from-65% before:mask-radial-[100%_60%] before:ring-foreground before:border-foreground/10 absolute left-4 top-4 z-10 rounded-2xl p-2 shadow-lg ring before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-l before:border-t lg:left-16 lg:top-16">
                                        <div
                                            aria-hidden
                                            className="bg-foreground/2 z-1 absolute inset-0 rounded-2xl"
                                        />
                                        <Image
                                            className="bg-background aspect-15/8 relative rounded-2xl"
                                            src="/Screenshot 2026-07-30 103154.png"
                                            alt="app screen"
                                            width="2700"
                                            height="1440"
                                        />
                                    </div>

                                    <Image
                                        src="https://images.unsplash.com/photo-1772037440088-2ef162671434?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt=""
                                        width={1313}
                                        height={1000}
                                        sizes="(max-width: 768px) 100vw, 1280px"
                                        className="size-full rotate-180 rounded-3xl object-cover object-bottom"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
