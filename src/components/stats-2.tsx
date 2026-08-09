export default function StatsSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <p className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                    <span className="text-foreground">Trusted by outreach professionals.</span> Delivering at scale every day.
                </p>

                <div className="mt-32 grid gap-12 md:grid-cols-3 xl:mt-44">
                    <div className="space-y-3 border-t pt-6">
                        <div className="text-5xl font-semibold tracking-tight">2,400+</div>
                        <p className="text-muted-foreground">Agencies & Sales Teams</p>
                    </div>
                    <div className="space-y-3 border-t pt-6">
                        <div className="text-5xl font-semibold tracking-tight">180M+</div>
                        <p className="text-muted-foreground">Emails Delivered Monthly</p>
                    </div>
                    <div className="space-y-3 border-t pt-6">
                        <div className="text-5xl font-semibold tracking-tight">99.2%</div>
                        <p className="text-muted-foreground">Average Inbox Placement</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
