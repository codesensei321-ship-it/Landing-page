import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
            {/* Big 404 */}
            <div className="relative">
                <h1 className="text-[10rem] font-bold leading-none tracking-tighter text-foreground/5 sm:text-[14rem]">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">📭</div>
                </div>
            </div>

            {/* Meme text */}
            <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
                This inbox is empty.
            </h2>
            <p className="text-muted-foreground mt-3 max-w-sm text-balance text-lg">
                Looks like this page got caught by a spam filter and never made it to the inbox.
            </p>

            {/* Meme-style quote */}
            <div className="ring-foreground/10 mt-8 rounded-xl bg-card px-6 py-4 ring">
                <p className="text-sm italic text-muted-foreground">
                    &ldquo;You miss 100% of the emails you don&apos;t send&rdquo;
                </p>
                <p className="mt-1 text-xs text-muted-foreground/60">— Every cold emailer ever</p>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-8 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-yellow-400 active:scale-[0.97]"
                >
                    Back to homepage
                </Link>
                <Link
                    href="/support"
                    className="ring-foreground/10 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-foreground ring transition-all hover:bg-foreground/5"
                >
                    Get help
                </Link>
            </div>

            {/* Footer joke */}
            <p className="text-muted-foreground/40 mt-16 text-xs">
                Error 404 · Page not found · Deliverability: 0%
            </p>
        </div>
    )
}
