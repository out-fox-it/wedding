import Image from 'next/image'

import githubMark from './images/github-mark-white.svg'

type Props = {
  title: string
}

export default function Footer({ title }: Props) {
  return (
    <footer className="flex flex-col justify-center gap-8 py-8">
      <p className="text-center text-5xl font-bold before:pr-2 before:content-['</'] after:pl-2 after:content-['>']">
        {title}
      </p>
      <a
        className="link-primary link flex items-center justify-center gap-4"
        href="https://github.com/out-fox-it/wedding"
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image src={githubMark} width={32} alt="GitHub Mark" />
        GitHub Repository
      </a>
    </footer>
  )
}
