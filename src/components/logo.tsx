import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <Image src="/icon.png" alt="Cleanmails" width={24} height={24} className="size-6" />
            <span className="text-foreground text-lg font-semibold tracking-tight">Cleanmails</span>
        </div>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <Image src="/icon.png" alt="Cleanmails" width={24} height={24} className="size-6" />
            <span className="text-foreground text-lg font-semibold tracking-tight">Cleanmails</span>
        </div>
    )
}
