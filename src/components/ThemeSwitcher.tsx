'use client'

import * as Switch from '@radix-ui/react-switch'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="theme-switch">
        <Sun className="h-5 w-5" />
      </label>
      <Switch.Root
        className="relative h-[25px] w-[42px] rounded-full bg-zinc-200 px-[2px] shadow-lg focus:shadow-sm data-[state=checked]:bg-zinc-600"
        id="theme-switch"
        defaultChecked={theme === 'dark'}
        onCheckedChange={() => {
          theme === 'light' ? setTheme('dark') : setTheme('light')
        }}
      >
        <Switch.Thumb className="left-[2px] block h-[21px] w-[21px] rounded-full bg-zinc-700 shadow-sm transition-transform duration-100 data-[state=checked]:translate-x-[17px] data-[state=checked]:bg-violet-300" />
      </Switch.Root>
      <label className="pr-4" htmlFor="theme-switch">
        <Moon className="h-5 w-5" />
      </label>
    </div>
  )
}
