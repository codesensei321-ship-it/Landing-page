import Image from 'next/image'

const integrations = [
    { name: 'Gmail', logo: '/logos/gmail.svg' },
    { name: 'Outlook', logo: '/logos/microsoft-outlook.svg' },
    { name: 'Slack', logo: '/logos/slack.svg' },
    { name: 'HubSpot', logo: '/logos/hubspot.svg' },
    { name: 'Salesforce', logo: '/logos/salesforce.svg' },
    { name: 'Zapier', logo: '/logos/zapier-icon-svgrepo-com.svg' },
    { name: 'n8n', logo: '/logos/n8n.svg' },
    { name: 'Apollo', logo: '/logos/apollo-io.svg' },
    { name: 'Notion', logo: '/logos/notion.svg' },
    { name: 'Google Sheets', logo: '/logos/google-sheets.svg' },
    { name: 'Calendly', logo: '/logos/calendly.svg' },
    { name: 'Telegram', logo: '/logos/telegram.svg' },
    { name: 'Discord', logo: '/logos/discord.svg' },
    { name: 'Supabase', logo: '/logos/supabase.svg' },
    { name: 'Resend', logo: '/logos/resend-dark.svg' },
    { name: 'SendGrid', logo: '/logos/sendgrid-svgrepo-com.svg' },
    { name: 'AWS', logo: '/logos/aws-dark.svg' },
]

function LogoCard({ name, logo }: { name: string; logo: string }) {
    return (
        <div className="bg-card ring-foreground/10 flex size-16 items-center justify-center rounded-lg ring">
            <Image src={logo} alt={name} width={32} height={32} className="size-8" />
        </div>
    )
}

// Diamond column layout: 1,2,3,4,3,2,1 = 16 items spread across 7 columns
const diamondColumns = [
    [0],           // 1 item
    [1, 2],        // 2 items
    [3, 4, 5],    // 3 items
    [6, 7, 8, 9], // 4 items
    [10, 11, 12], // 3 items
    [13, 14],     // 2 items
    [15],         // 1 item
]

export default function Integrations1() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <h2 className="text-foreground text-4xl font-medium tracking-tight">
                        Seamless integrations, better campaigns
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
                        No extra costs, no limits — just powerful integrations that grow with your marketing goals.
                    </p>
                </div>

                {/* Desktop: Diamond/honeycomb grid */}
                <div className="mt-16 hidden md:flex items-end justify-center gap-3">
                    {diamondColumns.map((indices, colIdx) => (
                        <div key={colIdx} className="flex flex-col items-center gap-3">
                            {indices.map((i) => (
                                <LogoCard key={integrations[i].name} name={integrations[i].name} logo={integrations[i].logo} />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Mobile: Flex wrap grid */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-3 md:hidden">
                    {integrations.map((item) => (
                        <LogoCard key={item.name} name={item.name} logo={item.logo} />
                    ))}
                </div>
            </div>
        </section>
    )
}
