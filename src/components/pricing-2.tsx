import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export default function Pricing() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-md space-y-6">
                    <h1 className="text-muted-foreground text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                        <span className="text-foreground">Simple pricing.</span> <br /> Scale without surprises.
                    </h1>
                </div>

                <div className="mt-12 grid gap-6 border *:p-8 max-lg:mx-auto max-lg:max-w-sm lg:mt-20 lg:grid-cols-3">
                    <div className="flex flex-col gap-8 max-lg:border-b lg:border-r">
                        <div>
                            <p className="text-lg font-medium">Starter</p>
                            <p className="text-muted-foreground text-lg font-medium">For solo senders</p>

                            <div className="my-8 block text-4xl font-medium tracking-tight">
                                $49 <span className="text-muted-foreground text-lg">/mo</span>
                            </div>

                            <Button
                                variant="outline"
                                className="w-full"
                                nativeButton={false}
                                render={<Link href="#">Buy now ($199)</Link>}
                            />
                        </div>

                        <ul className="text-muted-foreground list-outside space-y-3">
                            {['10 Domains', '30 Mailboxes', 'Basic Warmup', 'SPF/DKIM/DMARC Setup', 'Email Support'].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <Check className="text-muted-foreground size-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-card relative flex flex-col gap-8 shadow-xl max-lg:border-y lg:border-x">
                        <div className="inset-ring inset-ring-foreground/10 absolute right-0 top-0 w-fit -translate-y-px translate-x-px rounded-bl bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-200 [corner-shape:bevel]">Popular</div>
                        <div>
                            <p className="text-lg font-medium">Growth</p>
                            <p className="text-muted-foreground text-lg font-medium">For growing teams</p>

                            <div className="my-8 block text-4xl font-medium tracking-tight">
                                $99 <span className="text-muted-foreground text-lg">/mo</span>
                            </div>

                            <Button
                                className="w-full"
                                nativeButton={false}
                                render={<Link href="#">Buy now ($199)</Link>}
                            />
                        </div>

                        <ul className="text-muted-foreground list-outside space-y-3">
                            {['50 Domains', '150 Mailboxes', 'AI-Powered Warmup', 'Dedicated IPs', 'Priority Support', 'Deliverability Dashboard', 'Custom Tracking Domains', 'Blacklist Monitoring', 'API Access', 'Bulk DNS Management'].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <Check className="text-muted-foreground size-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-8 max-lg:border-t lg:border-l">
                        <div>
                            <p className="text-lg font-medium">Agency</p>
                            <p className="text-muted-foreground text-lg font-medium">For agencies at scale</p>

                            <div className="my-8 block text-4xl font-medium tracking-tight">
                                $199 <span className="text-muted-foreground text-lg">/mo</span>
                            </div>

                            <Button
                                className="w-full"
                                variant="outline"
                                nativeButton={false}
                                render={<Link href="#">Buy now ($199)</Link>}
                            />
                        </div>

                        <ul className="text-muted-foreground list-outside space-y-3">
                            {['Unlimited Domains', 'Unlimited Mailboxes', 'Advanced IP Rotation', 'Custom Tracking Domains', 'Dedicated Account Manager', 'API Access', 'White-Label Reports', 'Team Seats', 'SLA Guarantee', 'Priority Onboarding'].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <Check className="text-muted-foreground size-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
