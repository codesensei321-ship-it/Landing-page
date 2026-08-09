'use client'

import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export function CopyCommand({ command }: { command: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(command)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="bg-foreground/5 ring-foreground/10 flex items-center gap-2 rounded-lg px-3 py-2 ring max-w-full overflow-hidden sm:px-4 sm:py-2.5 sm:gap-3">
            <code className="text-muted-foreground min-w-0 flex-1 truncate text-[11px] sm:text-xs font-mono">{command}</code>
            <button
                onClick={handleCopy}
                className="text-muted-foreground hover:text-foreground shrink-0 cursor-pointer transition-colors"
                aria-label="Copy to clipboard"
            >
                {copied ? <Check className="size-3.5 sm:size-4" /> : <Copy className="size-3.5 sm:size-4" />}
            </button>
        </div>
    )
}
