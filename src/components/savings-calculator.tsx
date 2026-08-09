'use client'

import { useState } from 'react'
import { TrendingUp, DollarSign, Clock, Zap } from 'lucide-react'

export default function SavingsCalculator() {
    const [monthlySpend, setMonthlySpend] = useState(79)
    const cleanmailsPrice = 199

    const breakEvenMonths = monthlySpend > 0 ? Math.ceil(cleanmailsPrice / monthlySpend) : 0
    const yearSavings = (monthlySpend * 12) - cleanmailsPrice
    const threeYearSavings = (monthlySpend * 36) - cleanmailsPrice
    const savingsPercentage = monthlySpend > 0 ? Math.round(((monthlySpend * 12 - cleanmailsPrice) / (monthlySpend * 12)) * 100) : 0

    return (
        <section id="savings" className="bg-background py-24">
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center">
                    <p className="text-sm font-medium uppercase tracking-wider text-yellow-500">ROI Calculator</p>
                    <h2 className="mt-4 text-balance text-4xl font-medium tracking-tight">How fast do you break even?</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">
                        Slide to what you currently pay monthly for cold email tools.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {/* Left: Slider */}
                    <div className="ring-foreground/10 rounded-2xl bg-card p-6 ring">
                        <p className="text-xs font-medium uppercase tracking-wider text-yellow-500">Your current monthly spend</p>

                        <div className="mt-6">
                            <input
                                type="range"
                                min="20"
                                max="300"
                                step="1"
                                value={monthlySpend}
                                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                                className="savings-slider w-full"
                            />
                            <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
                                <span>$20/mo</span>
                                <span>$300/mo</span>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <span className="text-5xl font-bold tracking-tight">${monthlySpend}</span>
                            <span className="text-muted-foreground text-xl ml-1">/mo</span>
                        </div>

                        <div className="mt-8 space-y-3 border-t border-dashed pt-6">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground text-sm">You pay yearly</span>
                                <span className="text-sm font-medium text-red-400">${(monthlySpend * 12).toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground text-sm">Cleanmails (one-time)</span>
                                <span className="text-foreground text-sm font-medium">$199</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Results */}
                    <div className="flex flex-col gap-4">
                        {/* Breakeven - hero stat */}
                        <div className="ring-foreground/10 flex flex-1 flex-col items-center justify-center rounded-2xl bg-card p-6 ring">
                            <Clock className="size-5 text-yellow-500" />
                            <p className="text-muted-foreground mt-2 text-xs font-medium uppercase tracking-wider">Breakeven in</p>
                            <p className="mt-1 text-5xl font-bold tracking-tight text-yellow-500">
                                {breakEvenMonths} {breakEvenMonths === 1 ? 'month' : 'months'}
                            </p>
                            <p className="text-muted-foreground mt-2 text-sm">Then it&apos;s free forever</p>
                        </div>

                        {/* Bottom row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="ring-foreground/10 flex flex-col items-center justify-center rounded-2xl bg-card p-5 ring">
                                <DollarSign className="size-4 text-emerald-400" />
                                <p className="text-muted-foreground mt-2 text-[10px] font-medium uppercase tracking-wider">Year 1 savings</p>
                                <p className={`mt-1 text-xl font-bold ${yearSavings > 0 ? 'text-emerald-400' : 'text-muted-foreground'}`}>
                                    {yearSavings > 0 ? `$${yearSavings.toLocaleString()}` : '$0'}
                                </p>
                            </div>
                            <div className="ring-foreground/10 flex flex-col items-center justify-center rounded-2xl bg-card p-5 ring">
                                <Zap className="size-4 text-emerald-400" />
                                <p className="text-muted-foreground mt-2 text-[10px] font-medium uppercase tracking-wider">3-year savings</p>
                                <p className={`mt-1 text-xl font-bold ${threeYearSavings > 0 ? 'text-emerald-400' : 'text-muted-foreground'}`}>
                                    ${threeYearSavings.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom banner */}
                {yearSavings > 0 && (
                    <div className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-emerald-500/10 p-4 ring-1 ring-emerald-500/20">
                        <TrendingUp className="size-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-400">
                            At ${monthlySpend}/mo, Cleanmails pays for itself in {breakEvenMonths} months — then saves you ${yearSavings.toLocaleString()} every year
                        </span>
                    </div>
                )}
            </div>

            <style jsx>{`
                .savings-slider {
                    -webkit-appearance: none;
                    appearance: none;
                    height: 6px;
                    border-radius: 9999px;
                    background: linear-gradient(to right, #facc15 ${((monthlySpend - 20) / 280) * 100}%, rgba(255,255,255,0.1) ${((monthlySpend - 20) / 280) * 100}%);
                    outline: none;
                    cursor: pointer;
                }
                .savings-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #facc15;
                    cursor: pointer;
                    box-shadow: 0 2px 8px rgba(250, 204, 21, 0.4);
                    transition: transform 0.15s ease;
                }
                .savings-slider::-webkit-slider-thumb:hover {
                    transform: scale(1.15);
                }
                .savings-slider::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #facc15;
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 2px 8px rgba(250, 204, 21, 0.4);
                }
            `}</style>
        </section>
    )
}
