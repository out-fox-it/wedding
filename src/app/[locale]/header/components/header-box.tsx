import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  legend: string | React.ReactNode
  header?: string
  className?: string
}

export default function HeaderBox({
  children,
  legend,
  header,
  className,
}: Props) {
  return (
    <fieldset
      className={twMerge(
        'flex min-w-0 flex-1 flex-col items-center justify-evenly gap-4 border-4 bg-base-100 p-10 text-center text-xl',
        className,
      )}
    >
      <legend className="px-4 text-center text-2xl font-bold">{legend}</legend>
      {header && <h2 className="font-bold">{header}</h2>}
      {children}
    </fieldset>
  )
}
