import Link from 'next/link'
import { Logo } from '@/components/logo'
import Footer from '@/components/footer-3'

export default function LegalPage() {
    return (
        <>
            <header className="bg-background fixed top-0 z-20 w-full">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex items-center py-5">
                        <Link href="/" aria-label="home" className="flex items-center space-x-2">
                            <Logo uniColor />
                        </Link>
                    </div>
                </div>
            </header>

            <main className="pt-32 pb-16">
                <div className="mx-auto max-w-4xl px-6">
                    <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Legal</h1>
                    <p className="text-muted-foreground mt-4 text-lg">Last updated: August 1, 2025</p>

                    <div className="mt-16 space-y-20">
                        {/* Privacy Policy */}
                        <section id="privacy">
                            <h2 className="text-2xl font-semibold tracking-tight">Privacy Policy</h2>
                            <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed">
                                <p>Coldmail (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the coldmail.host platform. This Privacy Policy explains how we collect, use, and protect your information when you use our services.</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Information We Collect</h3>
                                <p>We collect information you provide directly: account details (name, email, company), billing information, domain and mailbox configuration data, and usage analytics related to sending volume and deliverability metrics.</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">How We Use Your Information</h3>
                                <p>Your information is used to provision and maintain email infrastructure, monitor deliverability health, process payments, provide customer support, and improve our platform. We do not sell your personal data to third parties.</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Data Security</h3>
                                <p>We implement industry-standard encryption, access controls, and monitoring to protect your data. All mailbox credentials are encrypted at rest. DNS records and domain configurations are stored in secure, redundant systems.</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Data Retention</h3>
                                <p>We retain account data for the duration of your subscription. Upon cancellation, account data is deleted within 30 days, except where required by law or for legitimate business purposes (billing records, fraud prevention).</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Your Rights</h3>
                                <p>You may request access to, correction of, or deletion of your personal data at any time by contacting support@coldmail.host. We respond to all requests within 30 days.</p>
                            </div>
                        </section>

                        {/* Terms of Service */}
                        <section id="terms">
                            <h2 className="text-2xl font-semibold tracking-tight">Terms of Service</h2>
                            <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed">
                                <p>By accessing or using Coldmail, you agree to be bound by these Terms of Service. If you do not agree, you may not use the platform.</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Service Description</h3>
                                <p>Coldmail provides cold email infrastructure services including domain provisioning, mailbox creation, DNS authentication configuration, email warmup, IP management, and deliverability monitoring.</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Account Responsibilities</h3>
                                <p>You are responsible for maintaining the security of your account credentials, all activity that occurs under your account, and ensuring your email sending practices comply with applicable laws including CAN-SPAM, GDPR, and CASL.</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Payment Terms</h3>
                                <p>Subscriptions are billed monthly or annually in advance. All fees are non-refundable except where required by law. We may change pricing with 30 days written notice. Failure to pay may result in service suspension.</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Service Availability</h3>
                                <p>We target 99.9% uptime for all infrastructure services. Scheduled maintenance windows are communicated at least 48 hours in advance. We are not liable for downtime caused by factors outside our reasonable control.</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Termination</h3>
                                <p>Either party may terminate the agreement at any time. Upon termination, we will deprovision your domains and mailboxes within 7 days. You may export your data prior to termination.</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Limitation of Liability</h3>
                                <p>To the maximum extent permitted by law, Coldmail shall not be liable for indirect, incidental, or consequential damages including lost revenue, lost emails, or reputation damage arising from use of our services.</p>
                            </div>
                        </section>

                        {/* Acceptable Use Policy */}
                        <section id="acceptable-use">
                            <h2 className="text-2xl font-semibold tracking-tight">Acceptable Use Policy</h2>
                            <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed">
                                <p>This policy defines acceptable and prohibited uses of Coldmail infrastructure. Violation may result in immediate suspension or termination without refund.</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Permitted Use</h3>
                                <p>Coldmail is designed for legitimate B2B cold outreach, sales prospecting, partnership outreach, and business development communications. All sending must comply with applicable anti-spam legislation.</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Prohibited Activities</h3>
                                <ul className="list-inside list-disc space-y-2 pl-4">
                                    <li>Sending spam, phishing, or malware distribution emails</li>
                                    <li>Harvesting email addresses without consent</li>
                                    <li>Sending to purchased lists without proper opt-in verification</li>
                                    <li>Impersonating other businesses or individuals</li>
                                    <li>Sending content that is illegal, deceptive, or fraudulent</li>
                                    <li>Attempting to circumvent sending limits or abuse warmup systems</li>
                                    <li>Using the service for bulk B2C marketing without explicit consent</li>
                                    <li>Reselling infrastructure access without an Agency plan</li>
                                </ul>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Sending Standards</h3>
                                <p>All emails must include a valid unsubscribe mechanism, accurate sender identification, a legitimate physical mailing address, and truthful subject lines. Bounce rates must remain below 5% and spam complaint rates below 0.1%.</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Enforcement</h3>
                                <p>We monitor sending patterns and deliverability metrics. Accounts that violate this policy will receive a warning for first offenses. Repeated or severe violations result in immediate termination. We reserve the right to report illegal activity to appropriate authorities.</p>

                                <h3 className="text-foreground mt-8 text-lg font-medium">Reporting Abuse</h3>
                                <p>If you believe a Coldmail user is violating this policy, please contact abuse@coldmail.host with relevant details. We investigate all reports within 24 hours.</p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-20 border-t pt-8">
                        <p className="text-muted-foreground text-sm">
                            Questions about our legal policies? Contact us at{' '}
                            <Link href="mailto:legal@coldmail.host" className="text-foreground underline">
                                legal@coldmail.host
                            </Link>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
