'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { Check, Copy, Terminal, Key, Globe, ExternalLink } from 'lucide-react'
import confetti from 'canvas-confetti'

function fireConfetti() {
    // First burst
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#facc15', '#22c55e', '#ffffff', '#3b82f6', '#f97316'],
    })
    // Side cannons after a short delay
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#facc15', '#22c55e', '#ffffff'],
        })
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#facc15', '#22c55e', '#ffffff'],
        })
    }, 300)
}

function SuccessContent() {
    const searchParams = useSearchParams()
    const licenseKey = searchParams.get('license_key')
    const [copiedInstall, setCopiedInstall] = useState(false)
    const [copiedKey, setCopiedKey] = useState(false)
    const [validKey, setValidKey] = useState(false)

    useEffect(() => {
        fireConfetti()
        if (licenseKey && /^[a-zA-Z0-9-]{8,}$/.test(licenseKey)) {
            setValidKey(true)
        }
    }, [licenseKey])

    const copyToClipboard = (text: string, type: 'install' | 'key') => {
        navigator.clipboard.writeText(text)
        if (type === 'install') {
            setCopiedInstall(true)
            setTimeout(() => setCopiedInstall(false), 2000)
        } else {
            setCopiedKey(true)
            setTimeout(() => setCopiedKey(false), 2000)
        }
    }

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-16">
            <div className="w-full max-w-2xl space-y-6">

                {/* Header */}
                <div className="ring-foreground/10 rounded-2xl bg-card p-8 ring text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        <Check className="size-3.5" strokeWidth={3} />
                        Payment Successful
                    </div>
                    <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Welcome to Cleanmails</h1>
                    <p className="text-muted-foreground mt-3">Follow these three steps to get your infrastructure live.</p>
                </div>

                {/* Step 1 */}
                <div className="ring-foreground/10 rounded-2xl bg-card p-6 ring">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-sm font-bold">1</div>
                        <h2 className="text-sm font-bold uppercase tracking-wide">Point Your Domain to Your VPS</h2>
                    </div>
                    <div className="text-muted-foreground text-sm leading-relaxed space-y-3">
                        <p>
                            Log in to your DNS provider (Cloudflare, GoDaddy, Namecheap, etc.) and create an <strong className="text-foreground">A record</strong> that points a domain or subdomain at your VPS&apos;s public IP.
                        </p>
                        <p>
                            Example: <code className="bg-foreground/5 ring-foreground/10 rounded px-2 py-0.5 text-xs ring">app</code> → <code className="bg-foreground/5 ring-foreground/10 rounded px-2 py-0.5 text-xs ring">203.0.113.45</code> (so <strong className="text-foreground">app.yourdomain.com</strong> resolves to your server).
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-yellow-500">
                                <Globe className="size-3" /> Wait ~5 min
                            </span>
                            <span>for DNS to propagate before running Step 2.</span>
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="rounded-2xl bg-zinc-950 p-6 ring-1 ring-zinc-800">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-zinc-900 text-sm font-bold">2</div>
                        <h2 className="text-sm font-bold uppercase tracking-wide text-yellow-500">SSH into Your VPS & Run This</h2>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        Connect to your server as root and paste the command below. The installer handles everything (Docker, database, SSL, reverse proxy) automatically.
                    </p>

                    {/* Terminal */}
                    <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="size-2.5 rounded-full bg-red-500" />
                            <div className="size-2.5 rounded-full bg-yellow-500" />
                            <div className="size-2.5 rounded-full bg-green-500" />
                            <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600">Terminal</span>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                            <code className="text-sm text-white font-mono flex-1 overflow-x-auto whitespace-nowrap">
                                curl -fsSL https://coldmail.host/install.sh | sudo bash
                            </code>
                            <button
                                onClick={() => copyToClipboard('curl -fsSL https://coldmail.host/install.sh | sudo bash', 'install')}
                                className={`shrink-0 rounded-lg px-4 py-2 text-xs font-bold uppercase transition-all ${copiedInstall ? 'bg-emerald-500 text-white' : 'bg-yellow-500 text-zinc-900 hover:bg-yellow-400'}`}
                            >
                                {copiedInstall ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </div>

                    <p className="text-zinc-500 text-xs mt-3">
                        Takes about 3–5 minutes. When it finishes, it prints your dashboard URL — open it in a browser.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="ring-foreground/10 rounded-2xl bg-card p-6 ring">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-sm font-bold">3</div>
                        <h2 className="text-sm font-bold uppercase tracking-wide">Paste Your License Key in the Dashboard</h2>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        Open the dashboard URL from Step 2. On the Welcome screen, paste this license key to activate your installation:
                    </p>

                    {/* License Key Box */}
                    <div className="rounded-xl bg-yellow-500/10 border-2 border-dashed border-yellow-500/30 p-4 flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                            <Key className="size-4 shrink-0 text-yellow-500" />
                            {validKey ? (
                                <code className="text-sm font-bold font-mono break-all">{licenseKey}</code>
                            ) : (
                                <span className="text-sm text-yellow-600 font-medium">Check your email from Dodo Payments for your license key</span>
                            )}
                        </div>
                        {validKey && (
                            <button
                                onClick={() => copyToClipboard(licenseKey!, 'key')}
                                className={`shrink-0 rounded-lg px-4 py-2 text-xs font-bold uppercase transition-all ${copiedKey ? 'bg-emerald-500 text-white' : 'bg-yellow-500 text-zinc-900 hover:bg-yellow-400'}`}
                            >
                                {copiedKey ? 'Copied!' : 'Copy Key'}
                            </button>
                        )}
                    </div>

                    <p className="text-muted-foreground text-xs mt-4">
                        Once activated, proceed to Step 4 to configure your reverse DNS.
                    </p>
                </div>

                {/* Step 4 */}
                <div className="ring-foreground/10 rounded-2xl bg-card p-6 ring">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-sm font-bold">4</div>
                        <h2 className="text-sm font-bold uppercase tracking-wide">Set Reverse DNS (PTR Record)</h2>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        Reverse DNS (rDNS/PTR) maps your server&apos;s IP address back to your domain. Email providers check this to verify your server identity. <strong className="text-foreground">Without it, your emails will likely land in spam.</strong>
                    </p>

                    <div className="space-y-4">
                        <div className="bg-foreground/5 rounded-xl p-4 space-y-3">
                            <p className="text-foreground text-sm font-medium">How to set it up:</p>
                            <ol className="text-muted-foreground text-sm leading-relaxed space-y-2 list-decimal list-inside">
                                <li>Log in to your <strong className="text-foreground">VPS provider&apos;s dashboard</strong> (Hetzner, DigitalOcean, Vultr, AWS, etc.)</li>
                                <li>Find the <strong className="text-foreground">Networking</strong> or <strong className="text-foreground">Reverse DNS</strong> section for your server</li>
                                <li>Set the PTR record to the <strong className="text-foreground">exact same domain</strong> you used in Step 1 (e.g. <code className="bg-foreground/10 rounded px-1.5 py-0.5 text-xs">app.yourdomain.com</code>)</li>
                                <li>Save and wait 5–15 minutes for propagation</li>
                            </ol>
                        </div>

                        <div className="bg-foreground/5 rounded-xl p-4 space-y-2">
                            <p className="text-foreground text-sm font-medium">Where to find it by provider:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <span className="size-1.5 rounded-full bg-yellow-500" />
                                    <span><strong className="text-foreground">Hetzner:</strong> Server → Networking → Reverse DNS</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="size-1.5 rounded-full bg-yellow-500" />
                                    <span><strong className="text-foreground">DigitalOcean:</strong> Droplet → Networking → PTR</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="size-1.5 rounded-full bg-yellow-500" />
                                    <span><strong className="text-foreground">Vultr:</strong> Server → Settings → Reverse DNS</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="size-1.5 rounded-full bg-yellow-500" />
                                    <span><strong className="text-foreground">AWS/Lightsail:</strong> Networking → Manage → rDNS</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="size-1.5 rounded-full bg-yellow-500" />
                                    <span><strong className="text-foreground">Contabo:</strong> VPS Control → Reverse DNS</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="size-1.5 rounded-full bg-yellow-500" />
                                    <span><strong className="text-foreground">OVH:</strong> IP → Manage → Reverse</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl bg-yellow-500/10 border border-yellow-500/20 p-3 flex items-start gap-3">
                            <Globe className="size-4 shrink-0 text-yellow-500 mt-0.5" />
                            <p className="text-xs text-yellow-500/90 leading-relaxed">
                                <strong>Verify it worked:</strong> After setting rDNS, run <code className="bg-yellow-500/15 rounded px-1.5 py-0.5">dig -x YOUR_SERVER_IP</code> — it should return your domain. If it doesn&apos;t resolve within 15 minutes, contact your VPS provider&apos;s support.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Help Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link
                        href="/docs"
                        className="ring-foreground/10 flex items-center justify-center gap-2 rounded-xl bg-card px-5 py-4 text-sm font-semibold ring transition-all hover:bg-foreground/5"
                    >
                        Full Documentation
                        <ExternalLink className="size-3.5" />
                    </Link>
                    <Link
                        href="https://cal.com/zaid-momin-st0o8z/coldmail-setup"
                        target="_blank"
                        className="flex items-center justify-center gap-2 rounded-xl bg-yellow-500 px-5 py-4 text-sm font-semibold text-zinc-900 transition-all hover:bg-yellow-400"
                    >
                        White-Glove Setup ($50)
                        <ExternalLink className="size-3.5" />
                    </Link>
                </div>

                {/* Footer */}
                <p className="text-center text-[11px] font-bold uppercase tracking-widest text-muted-foreground/30 pt-4">
                    coldmail.host · Secure Infrastructure
                </p>
            </div>
        </div>
    )
}

export default function SuccessPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
                <p className="text-muted-foreground">Loading...</p>
            </div>
        }>
            <SuccessContent />
        </Suspense>
    )
}
