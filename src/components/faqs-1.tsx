'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const faqItems = [
    {
        id: 'item-1',
        question: 'Is this really a one-time payment?',
        answer: 'Yes, you pay once and self-host forever. No recurring fees, no per-seat charges. All future updates are included in your license.',
    },
    {
        id: 'item-2',
        question: 'Can I connect any SMTP provider?',
        answer: "Yes, Cleanmails works with any SMTP server — Gmail, Outlook, Amazon SES, Mailgun, or your own private SMTP. Connect as many as you need.",
    },
    {
        id: 'item-3',
        question: 'What server do I need to self-host?',
        answer: 'Any Linux VPS with 1GB RAM works. We support Ubuntu, Debian, and CentOS. Install takes under two minutes with our script.',
    },
    {
        id: 'item-4',
        question: 'Is there a sending limit?',
        answer: 'No, Cleanmails has no built-in sending limits. Your volume is only bound by your SMTP provider limits.',
    },
    {
        id: 'item-5',
        question: 'Do you offer refunds?',
        answer: "We offer a 14-day money-back guarantee. If you're not satisfied, contact us within 14 days for a full refund.",
    },
]

export default function FAQs() {
    return (
        <section id="faq" className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-medium tracking-tight">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Find answers to common questions about our platform.</p>
                </div>
                <Card
                    variant="outline"
                    className="mt-12 p-2"
                >
                    <Accordion>
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-b-0 px-4"
                            >
                                <AccordionTrigger className="cursor-pointer py-4 text-sm font-medium hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground pb-2 text-sm">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Card>
                <p className="text-muted-foreground mt-6 text-center text-sm">
                    Still have questions?{' '}
                    <Link
                        href="mailto:hello@cleanmails.online"
                        className="text-yellow-500 font-medium hover:underline"
                    >
                        hello@cleanmails.online
                    </Link>
                </p>
            </div>
        </section>
    )
}
