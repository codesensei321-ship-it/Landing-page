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
        <div className="bg-foreground/5 ring-foreground/10 flex items-center gap-3 rounded-lg px-4 py-2.5 ring max-w-full overflow-hidden">
            <code className="text-muted-foreground min-w-0 flex-1 truncate text-xs sm:text-sm">{command}</code>
            <button
                onClick={handleCopy}
                className="text-muted-foreground hover:text-foreground shrink-0 cursor-pointer transition-colors"
                aria-label="Copy to clipboard"
            >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            </button>
        </div>
    )
}
