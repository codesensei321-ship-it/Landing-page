import { Check, Minus } from 'lucide-react'
import { Card } from '@/components/ui/card'

const plans = [
    {
        name: 'Cleanmails',
        price: '$199 once',
        highlighted: true,
    },
    {
        name: 'Instantly',
        price: '$79-97/mo',
    },
    {
        name: 'Smartlead',
        price: '$39-94/mo',
    },
]

const features = [
    { name: 'Self-Hosted (your server, your data)', cleanmails: 'Yes', instantly: 'No', smartlead: 'No' },
    { name: 'One-Time Payment (no monthly)', cleanmails: 'Yes', instantly: 'No', smartlead: 'No' },
    { name: 'Unlimited Mailboxes & Senders', cleanmails: 'Yes', instantly: 'No', smartlead: 'Limits' },
    { name: 'Unlimited Leads & Contacts', cleanmails: 'Yes', instantly: '1K-100K', smartlead: '2K-30K' },
    { name: 'Smart Sender Rotation', cleanmails: 'Yes', instantly: 'Yes', smartlead: 'Yes' },
    { name: 'Email Warmup (built-in, $0)', cleanmails: 'Yes', instantly: 'Add-on', smartlead: 'Yes' },
    { name: 'Spintax + A/B Body Variants', cleanmails: 'Yes', instantly: 'Yes', smartlead: 'Yes' },
    { name: 'AI Auto-Reply (BYO API Key)', cleanmails: 'Yes', instantly: 'No', smartlead: 'No' },
    { name: 'MCP Protocol (AI agents)', cleanmails: 'Yes', instantly: 'No', smartlead: 'No' },
    { name: 'Webhook & CRM Integrations', cleanmails: 'Yes', instantly: 'Limited', smartlead: 'Limited' },
    { name: 'Unlimited Client Workspaces', cleanmails: 'Yes', instantly: 'Per-seat', smartlead: 'Per-seat' },
    { name: 'Data Privacy (no telemetry)', cleanmails: 'Yes', instantly: 'No', smartlead: 'No' },
    { name: 'White-Label Branding', cleanmails: 'Yes', instantly: 'No', smartlead: 'Enterprise' },
]

function CellValue({ value, highlighted }: { value: string; highlighted?: boolean }) {
    if (value === 'Yes') {
        return <span className={`text-sm font-medium ${highlighted ? 'text-emerald-400' : 'text-emerald-400'}`}>Yes</span>
    }
    if (value === 'No') {
        return <span className="text-muted-foreground text-sm">No</span>
    }
    return <span className="text-muted-foreground text-sm">{value}</span>
}

export default function Comparator() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <p className="text-sm font-medium uppercase tracking-wider text-yellow-500">Compare</p>
                    <h2 className="mt-4 text-balance text-4xl font-medium tracking-tight">Why agencies are switching.</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Same features. One payment instead of forever.</p>
                </div>

                <Card variant="outline" className="mt-12 overflow-auto">
                    {/* Header */}
                    <div className="grid min-w-[640px] grid-cols-4 border-b">
                        <div className="p-4 text-sm font-medium">Feature</div>
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`p-4 text-center ${plan.highlighted ? 'bg-primary/5' : ''}`}
                            >
                                <p className={`text-sm font-semibold ${plan.highlighted ? 'text-emerald-400' : 'text-foreground'}`}>{plan.name}</p>
                                <p className={`mt-0.5 text-xs ${plan.highlighted ? 'text-emerald-400/70' : 'text-muted-foreground'}`}>{plan.price}</p>
                            </div>
                        ))}
                    </div>

                    {/* Feature rows */}
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="grid min-w-[640px] grid-cols-4 border-b last:border-b-0"
                        >
                            <div className="text-muted-foreground p-4 text-sm">{feature.name}</div>
                            <div className={`flex items-center justify-center p-4 ${plans[0].highlighted ? 'bg-primary/5' : ''}`}>
                                <CellValue value={feature.cleanmails} highlighted />
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <CellValue value={feature.instantly} />
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <CellValue value={feature.smartlead} />
                            </div>
                        </div>
                    ))}

                    {/* Total cost row */}
                    <div className="grid min-w-[640px] grid-cols-4 bg-foreground/5 border-t">
                        <div className="p-4 text-sm font-medium italic">Total cost after 1 year</div>
                        <div className="flex items-center justify-center p-4 bg-primary/5">
                            <span className="text-lg font-bold text-emerald-400">$199</span>
                        </div>
                        <div className="flex items-center justify-center p-4">
                            <span className="text-lg font-bold text-red-400">$948+</span>
                        </div>
                        <div className="flex items-center justify-center p-4">
                            <span className="text-lg font-bold text-red-400">$468+</span>
                        </div>
                    </div>
                </Card>

                <p className="text-muted-foreground mt-6 text-center text-xs">
                    Based on publicly listed pricing. Cleanmails is a one-time purchase with free lifetime updates.
                </p>
            </div>
        </section>
    )
}
