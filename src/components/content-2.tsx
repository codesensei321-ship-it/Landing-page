import { Button } from '@/components/ui/button'
import { ChevronRight, Cpu, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-12">
                    <h2 className="max-w-md text-balance text-4xl font-medium tracking-tight lg:text-5xl">Email infrastructure built for agencies at scale.</h2>
                    <div className="space-y-6 lg:space-y-12">
                        <p className="text-muted-foreground text-balance text-lg">Coldmail keeps your domains authenticated, mailboxes warmed, and sending reputation healthy so your team can focus on closing deals instead of troubleshooting deliverability.</p>

                        <div className="grid gap-4 pt-6 sm:grid-cols-2">
                            <p className="text-muted-foreground text-balance text-lg">
                                <span className="text-foreground font-medium">
                                    <Zap className="inline size-4 -translate-y-0.5" /> Fast.
                                </span>{' '}
                                Provision 50+ mailboxes in minutes, not hours.
                            </p>

                            <p className="text-muted-foreground text-balance text-lg">
                                <span className="text-foreground font-medium">
                                    <Cpu className="inline size-4 -translate-y-0.5" /> Reliable.
                                </span>{' '}
                                99.9% uptime with dedicated infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
