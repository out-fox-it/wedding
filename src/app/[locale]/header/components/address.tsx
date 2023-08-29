'use client'

import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const address1 = 'Šárovcova 794, Třebechovice pod Orebem, 503 46'
const address2 = 'Šárovcova 1206, Třebechovice pod Orebem, 503 46'
const changeTime = 5 // seconds

export default function Address({ className }: { className?: string }) {
  const [address, setAddress] = useState(address1)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAddress((address) => (address === address1 ? address2 : address1))
    }, changeTime * 1000)

    return () => clearInterval(timeout)
  }, [address, setAddress])

  return (
    <p className={twMerge('flex flex-col', className)}>
      {address.split(',').map((part, index) => (
        <span className={clsx(index === 0 && 'whitespace-nowrap')} key={part}>
          {part.trim()}
        </span>
      ))}
    </p>
  )
}
