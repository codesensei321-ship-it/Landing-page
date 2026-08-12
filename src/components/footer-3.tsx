import Link from 'next/link'
import { Logo } from '@/components/logo'

const footerLinks = [
    {
        title: 'Product',
        links: [
            { label: 'Features', href: '#workflow-agents' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Savings Calculator', href: '#savings' },
            { label: 'Docs', href: '/docs' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Blog', href: 'https://coldmail.host/blog' },
            { label: 'News', href: 'https://coldmail.host/news' },
            { label: 'Tools', href: 'https://coldmail.host/tools' },
            { label: 'Mail Health', href: 'https://mailhealth.dpdns.org/' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'Support', href: '/support' },
            { label: 'Docs', href: 'https://coldmail.host/docs' },
            { label: 'Legal', href: '/legal' },
            { label: 'Privacy Policy', href: '/legal#privacy' },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="bg-background border-t py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Link href="/" aria-label="home">
                            <Logo className="h-5 w-fit" />
                        </Link>
                        <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                            Self-hosted cold email tool. Send campaigns, clean lists, rotate senders. One-time payment.
                        </p>
                    </div>

                    {/* Link columns */}
                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <p className="text-foreground text-sm font-medium">{group.title}</p>
                            <ul className="mt-4 space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                                            {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col items-center gap-4 border-t pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
                    <p className="text-muted-foreground text-xs">&copy; {2026} Cleanmails. All rights reserved.</p>
                    <p className="text-muted-foreground text-xs">
                        <Link href="mailto:hello@cleanmails.online" className="hover:text-foreground transition-colors">
                            hello@cleanmails.online
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}
