export default function VideoSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="ring-foreground/10 overflow-hidden rounded-3xl ring">
                    <div className="relative aspect-video w-full">
                        <iframe
                            src="https://player.vimeo.com/video/1204436590?badge=0&autopause=0&player_id=0&app_id=58479"
                            className="absolute inset-0 h-full w-full"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            allowFullScreen
                            title="Coldmail Demo"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
