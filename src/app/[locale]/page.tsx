import { getI18n } from '~/locales/server'

import Header from './header'
import icon from './icon.svg'

export default async function Home() {
  const t = await getI18n()

  return (
    <main className="min-h-screen">
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <Header title={t('title')} icon={icon} />
      <section className="m-auto w-2/3">
        <h2 className="my-8 text-center text-3xl font-bold">TODO</h2>
        <p className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A minus, nam
          dolor doloremque quos, possimus eaque odio non saepe impedit vero esse
          beatae nisi vitae veritatis eum dolores quaerat eos. Illo molestiae ut
          ipsa, sit accusamus numquam. Libero repellat architecto praesentium
          quisquam delectus pariatur vitae sequi minima mollitia? Optio, omnis?
          Autem molestias maxime corrupti eius illum labore tempora consectetur
          quisquam. Aliquid totam quidem a, iure in nihil pariatur voluptatem
          aspernatur atque tempore nostrum vitae sapiente unde dolores
          voluptatibus autem ea suscipit porro fuga architecto voluptate esse!
          Minima, quasi ipsum. Culpa.
        </p>
      </section>
      <footer className="my-8 text-center text-5xl font-bold before:pr-2 before:content-['</'] after:pl-2 after:content-['>']">
        {t('title')}
      </footer>
    </main>
  )
}
