import Link from 'next/link'
import { ArrowRight, Cloud } from 'lucide-react'

export default function ManagedServiceBanner() {
    return (
        <section className="bg-background py-10">
            <div className="mx-auto max-w-3xl px-6">
                <Link
                    href="/wishlist"
                    className="ring-foreground/10 group flex items-center justify-between gap-4 rounded-xl bg-card px-5 py-4 ring transition-all hover:ring-foreground/20"
                >
                    <div className="flex items-center gap-3">
                        <Cloud className="size-4 shrink-0 text-yellow-500" />
                        <p className="text-sm text-muted-foreground">
                            <span className="text-foreground font-medium">Prefer a managed service?</span> Get Cleanmails hosted for you — starting at $39/mo.
                        </p>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
            </div>
        </section>
    )
}
