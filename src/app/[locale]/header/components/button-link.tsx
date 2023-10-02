import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  link: string
  className?: string
}

export default function ButtonLink({ children, link, className }: Props) {
  return (
    <a
      className={twMerge(
        "btn btn-primary btn-block rounded-none text-2xl font-bold transition-[letter-spacing] duration-1000 ease-in-out before:pt-2 before:content-['*'] after:pt-2 after:content-['*'] hover:tracking-[0.5rem]",
        className,
      )}
      href={link}
    >
      {children}
    </a>
  )
}
