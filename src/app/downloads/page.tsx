import { GithubLogo, Terminal } from '@phosphor-icons/react/dist/ssr'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import { DownloadCard } from '@/components/download-card'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Marquee from '@/components/ui/marquee'
import AnimatedShinyText from '@/components/ui/shiny-text'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Descargas',
  description: 'Página de descargas de Ututo!'
}

export default function DownloadsPage() {
  return (
    <main className="container min-h-[100dvh] flex-1 space-y-4 px-2 pt-4 md:px-8">
      <h2 className="sr-only">Descargas Ututo</h2>
      <section className="flex w-full flex-col items-center justify-center space-y-4 py-12 text-center md:py-24 lg:py-32">
        <div
          className={
            'group rounded-full border border-border bg-card text-base text-card-foreground transition-all ease-in hover:cursor-pointer'
          }
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-card-foreground hover:dark:text-foreground">
            <span>✨ Introduciendo Ututo 11</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
        <h3 className="text-3xl font-bold md:text-5xl">Ututo 11</h3>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Descubrí Ututo 11, la evolución de GNU/Linux, donde cada elemento es completamente libre.
        </p>

        <div className="relative">
          <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center">
            <Card className="max-w-[350px] bg-card/20 backdrop-blur-md">
              <CardHeader>
                <div className="flex flex-row items-center justify-center space-x-2">
                  <Terminal weight="duotone" className="h-4 w-4" />
                  <CardTitle>Work In Progress</CardTitle>
                </div>
                <CardDescription>Se está trabajando para traerte la mejor versión de Ututo 11!</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-row items-center justify-end">
                <Button variant={'ghost'} size={'sm'}>
                  <GithubLogo className="h-4 w-4" />
                  <span className="ml-2">Github</span>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="pointer-events-none relative grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <DownloadCard
              index={0}
              title="UTUTO 11 Live Beta - Araucaria"
              description=""
              image="https://github.com/ututolinux/wallpapers/blob/main/wallpaper%20colores%20simple.png?raw=true"
              links={[
                {
                  label: 'Descargar',
                  href: 'https://descargas.ututo.ar/iso/Ututo-Live-x86_64-11-Beta.iso'
                }
              ]}
            />
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center space-y-4 text-center">
        <h3 className="text-3xl font-bold md:text-5xl">Ututo Legacy</h3>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Las versiones anteriores de Ututo están disponibles para su descarga. Descargá la versión que mejor se adapte
          a tus necesidades.
        </p>

        <div className="relative grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="pointer-events-none absolute -top-48 bottom-auto -z-[2] mx-auto my-[-18.8rem] h-[50rem] w-full overflow-hidden [--color:hsl(var(--primary))] [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)]"></div>
          <DownloadCard
            index={0}
            title="UTUTO XS 2011 AMD"
            description="Ututo-XS, segunda versión 100% libre desarrollada por un equipo liderado por Daniel Olivera."
            image="/screenshots/4.png"
            links={[
              {
                label: '32 Bits',
                href: ''
              },
              {
                label: '64 Bits',
                href: ''
              }
            ]}
          />
          <DownloadCard
            index={1}
            title="UTUTO XS 2011 INTEL"
            description="Ututo-XS, segunda versión 100% libre desarrollada por un equipo liderado por Daniel Olivera."
            image="/screenshots/4.png"
            links={[
              {
                label: '32 Bits',
                href: ''
              },
              {
                label: '64 Bits',
                href: ''
              }
            ]}
          />
          <DownloadCard
            index={2}
            title="UTUTO XS 2011 ATOM"
            description="Ututo-XS, segunda versión 100% libre desarrollada por un equipo liderado por Daniel Olivera."
            image="/screenshots/4.png"
            links={[
              {
                label: 'Descarga',
                href: ''
              }
            ]}
          />
          <DownloadCard
            index={3}
            title="UTUTO XS 2012 AMD"
            description="Ututo-XS, segunda versión 100% libre desarrollada por un equipo liderado por Daniel Olivera."
            image="/screenshots/4.png"
            links={[
              {
                label: '32 Bits',
                href: ''
              },
              {
                label: '64 Bits',
                href: ''
              }
            ]}
          />
          <DownloadCard
            index={4}
            title="UTUTO XS 2012 INTEL"
            description="Ututo-XS, segunda versión 100% libre desarrollada por un equipo liderado por Daniel Olivera."
            image="/screenshots/4.png"
            links={[
              {
                label: '32 Bits',
                href: ''
              },
              {
                label: '64 Bits',
                href: ''
              }
            ]}
          />
          <DownloadCard
            index={5}
            title="UTUTO XS 2012 ATOM"
            description="Ututo-XS, segunda versión 100% libre desarrollada por un equipo liderado por Daniel Olivera."
            image="/screenshots/4.png"
            links={[
              {
                label: 'Descarga',
                href: ''
              }
            ]}
          />
        </div>
      </section>
      <section className="flex w-full flex-col items-start justify-center space-y-4 py-12 md:py-24 lg:py-32">
        <h3 className="text-2xl font-bold">Fondos de pantalla UTUTO!</h3>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Personalizá tu escritorio con los fondos de pantalla de UTUTO. Descargá los diseños exclusivos de la comunidad
          para darle un toque único a tu sistema operativo.
        </p>
        <div className="min-[400px] flex flex-col gap-2 md:flex-row">
          <button
            type="button"
            className="hover:bg-card-hover hover:text-card-foreground-hover flex items-center justify-center rounded-lg border border-border bg-card px-4 py-2 text-base text-card-foreground transition-all ease-in hover:cursor-pointer"
          >
            Descargar wallpapers
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg py-5">
          <Marquee pauseOnHover className="w-full [--duration:60s]" repeat={2}>
            {[
              {
                url: 'https://github.com/ututolinux/wallpapers/blob/main/wallpaper%20colores%20centrado.png?raw=true',
                title: 'Colores centrado',
                author: 'Ututo 11'
              },
              {
                url: 'https://github.com/ututolinux/wallpapers/blob/main/wallpaper%20colores%20simple.png?raw=true',
                title: 'Colores simple',
                author: 'Ututo 11'
              },
              {
                url: 'https://github.com/ututolinux/wallpapers/blob/main/wallpaper%20colores%20textura.png?raw=true',
                title: 'Colores textura',
                author: 'Ututo 11'
              },
              {
                url: 'https://github.com/ututolinux/wallpapers/blob/main/wallpaper%20violetas.png?raw=true',
                title: 'Violetas',
                author: 'Ututo 11'
              },
              {
                url: 'https://i.imgur.com/AisXUeV.png',
                title: 'Spacing green',
                author: 'Emirchus'
              },
              {
                url: 'https://i.imgur.com/2A8zYL1.jpeg',
                title: 'spacing violet',
                author: 'Emirchus'
              }
            ].map(item => {
              return (
                <figure
                  key={item.title}
                  className={cn(
                    'relative aspect-video w-[500px] cursor-pointer overflow-hidden rounded-xl p-4 ring-ring transition-shadow duration-300 ease-out hover:ring-2'
                  )}
                  style={{
                    backgroundImage: `url(${item.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <figcaption className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 ease-out hover:opacity-100">
                    {item.title} - {item.author}
                  </figcaption>
                </figure>
              )
            })}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
        </div>
      </section>
    </main>
  )
}
