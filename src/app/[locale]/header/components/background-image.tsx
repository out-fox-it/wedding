'use client'

import Image from 'next/image'
import { useState } from 'react'

import background from '../images/background.webp'
import hoverBackground from '../images/hover-background.webp'

export default function BackgroundImage() {
  const [isHovering, setIsHovering] = useState(false)

  return isHovering ? (
    <Image
      className="w-full border-y-4 border-primary"
      src={hoverBackground}
      alt="background"
      onMouseLeave={() => setIsHovering(false)}
    />
  ) : (
    <Image
      className="w-full border-y-4 border-primary"
      src={background}
      alt="background"
      priority
      onMouseEnter={() => setIsHovering(true)}
    />
  )
}
