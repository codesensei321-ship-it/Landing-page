'use client'

import { Button } from '@/components/ui/button'
import { useState, type SVGProps } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const testimonials = [
    {
        quote: 'We were spending $450/month on Instantly for our agency. Cleanmails gave us the same features on a $20 VPS.',
        highlight: 'Paid for itself in the first week.',
        author: 'Arjun Mehta',
        role: 'Founder, LeadReach Agency',
    },
    {
        quote: 'Setting it up took 15 minutes with the install script. Email warmup, rotation, everything just works out of the box.',
        highlight: 'Honestly easier than configuring Instantly was.',
        author: 'Priya Sharma',
        role: 'Growth Lead, SaaSBox',
    },
    {
        quote: 'I run outreach for 12 clients and the multi-workspace setup is exactly what I needed. No per-seat pricing nonsense.',
        highlight: 'Unlimited accounts, unlimited campaigns — one flat cost.',
        author: 'Rohan Desai',
        role: 'Cold Email Consultant',
    },
    {
        quote: 'The inbox rotation and smart scheduling keep our deliverability solid. We went from 40% open rates to 62% after switching.',
        highlight: 'Our reply rates doubled in the first month.',
        author: 'Kavitha Nair',
        role: 'Head of Sales, PixelForge',
    },
    {
        quote: 'I was skeptical about self-hosting but the Docker setup is dead simple. Updates are one command. Support on Discord is fast.',
        highlight: 'Best purchase I made this year for my business.',
        author: 'Vikram Joshi',
        role: 'Indie Founder',
    },
]

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeTestimonial = testimonials[activeIndex]

    const previousTestimonial = () => {
        setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length)
    }

    const nextTestimonial = () => {
        setActiveIndex((index) => (index + 1) % testimonials.length)
    }

    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-3xl">
                    <div className="mb-20 flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-7 px-4"
                            aria-label="read previous testimonial"
                            onClick={previousTestimonial}
                            disabled={activeIndex === 0}
                        >
                            <ArrowIcon className="size-3!" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-7 px-4"
                            aria-label="read next testimonial"
                            onClick={nextTestimonial}
                            disabled={activeIndex === testimonials.length - 1}
                        >
                            <ArrowIcon className="size-3! rotate-180" />
                        </Button>
                    </div>
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-muted-foreground mb-20 text-2xl font-medium leading-snug md:text-4xl md:leading-tight">
                                {activeTestimonial.quote} <span className="rounded bg-yellow-500/10 px-1.5 text-yellow-500">{activeTestimonial.highlight}</span>
                            </p>
                        </motion.div>

                        <motion.div
                            key={`${activeIndex}-author`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-4"
                        >
                            <div className="flex size-10 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500 font-semibold text-lg">
                                {activeTestimonial.author.charAt(0)}
                            </div>
                            <div className="border-l pl-4">
                                <p className="font-medium">{activeTestimonial.author}</p>
                                <p className="text-muted-foreground text-sm">{activeTestimonial.role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 1L1 8L8 15M1 8H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
