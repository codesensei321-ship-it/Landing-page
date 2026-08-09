import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Card } from '@/components/ui/card'

const benefits = ['One-time payment', 'No monthly fees', 'Self-host anywhere', 'Lifetime updates']

export default function CallToAction() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-2xl px-6">
                <Card
                    variant="outline"
                    className="grid gap-8 p-6 md:grid-cols-2 md:p-8"
                >
                    <div>
                        <h2 className="text-balance text-3xl font-medium tracking-tight">Own Your Cold Outreach</h2>
                        <p className="text-muted-foreground mt-3 text-balance">Deploy on your server and send unlimited campaigns without recurring fees.</p>
                        <ul className="mt-6 space-y-2">
                            {benefits.map((benefit, index) => (
                                <li
                                    key={index}
                                    className="text-muted-foreground flex items-center gap-2 text-sm"
                                >
                                    <Check className="size-4 text-emerald-400" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-muted/50 flex flex-col justify-center rounded-xl border p-6">
                        <p className="text-muted-foreground text-sm">One-time</p>
                        <p className="mt-1 text-4xl font-bold tracking-tight">
                            $199
                        </p>
                        <p className="text-muted-foreground mt-1 text-sm">Pay once, own it forever</p>
                        <Link
                            href="https://checkout.dodopayments.com/buy/pdt_0NjDtkmaYaeeHprWb02rS?quantity=1&redirect_url=https://coldmail.host%2Fsuccess%3Flicense_key%3D%7Blicense_key%7D"
                            target="_blank"
                            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-yellow-400 active:scale-[0.97]"
                        >
                            Buy now
                            <ArrowRight className="size-4" />
                        </Link>
                    </div>
                </Card>
            </div>
        </section>
    )
}
