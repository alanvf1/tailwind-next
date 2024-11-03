import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile gap-3">
      <Image
        src="https://github.com/alanvf1.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Alan Varela
        </span>
        <span
          className="truncate text-sm text-zinc-500 dark:text-zinc-400"
          title="alan.varela404@gmail.com"
        >
          alan.varela404@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
