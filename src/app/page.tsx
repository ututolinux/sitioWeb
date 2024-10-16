import { ArrowRight, Code } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';

import { FadeDown } from '@/components/fade-down';
import { FeaturesBento } from '@/components/features-bento';
import { Button } from '@/components/ui/button';
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import Marquee from '@/components/ui/marquee';
import { UtutoWallpapers } from '@/lib/images';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="min-h-[100dvh] flex-1">
      <section id='hero' className="relative w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <FadeDown />
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant={'expandIcon'} Icon={ArrowRight} iconPlacement="right" asChild>
                  <Link href="/downloads">Descargas</Link>
                </Button>
                <Button
                  variant={'ringHover'}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:text-secondary-foreground/90"
                  asChild
                >
                  <a target="_blank" referrerPolicy="no-referrer" href="https://github.com/ututolinux/">
                    <Code className="mr-2 h-4 w-4" /> Ututo 11
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image src="/pc.png" width={800} height={800} alt="ututo lapto" className="h-auto w-1/2 drop-shadow-xl" />
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">¿Por qué UTUTO?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ututo es sinónimo de libertad tecnológica y privacidad indiscutible. Un sistema operativo libre para
                modificar y compartir, que respeta tus datos y se adapta a cualquier hardware. Con Ututo, te unís a una
                comunidad que promueve el apoyo mutuo y una seguridad digital firme. Elegí Ututo y liderá tu camino
                hacia la soberanía digital con cada uso.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
            <FeaturesBento />
          </div>
        </div>
      </section>
      <div className="pointer-events-none relative -z-[2] mx-auto my-[-18.8rem] h-[50rem] w-full overflow-hidden [--color:hsl(var(--primary))] [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--border))] after:bg-background"></div>
      <section id="about" className="w-full">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex w-full flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,white,rgba(255,255,255,0.8),transparent)]">
              <MacbookScroll
                title={
                  <>
                    ¿Como comenzó <span className="font-extrabold">UTUTO</span>?
                  </>
                }
                badge={
                  <Image
                    src="/logo.png"
                    width={100}
                    height={100}
                    className="h-10 w-10 -rotate-12 transform"
                    alt="ututo badge"
                  />
                }
                src={`/screenshots/4.png`}
                showGradient={false}
              />
            </div>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              UTUTO surgió en el año 2000 como la primera distribución GNU/Linux reconocida por el Proyecto GNU, gracias
              a su dedicación exclusiva al software libre. Creado por Diego Saravia en Argentina, se popularizó por su
              accesibilidad y la novedad del CD vivo. A lo largo de los años, UTUTO ha evolucionado con variantes como
              UTUTO-R y UTUTO XS, manteniendo siempre su espíritu original. Tras una pausa, la comunidad se ha
              organizado para revivir y actualizar UTUTO para los usuarios actuales. Conocé más sobre esta fascinante
              historia en la entrevista a Diego Saravia, alma y fundador de UTUTO
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={'/aboutus-image.png'}
              alt="about us image"
              width={1000}
              height={1000}
              className="w-auto drop-shadow-md"
            />
          </div>
        </div>
      </section>
      <section id="download" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
                Fondos de pantalla UTUTO!
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Personalizá tu escritorio con los fondos de pantalla de UTUTO. Descargá los diseños exclusivos de la
                comunidad para darle un toque único a tu sistema operativo.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant={'expandIcon'} Icon={ArrowRight} iconPlacement="right">
                Descargar wallpapers
              </Button>
            </div>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
              <Marquee pauseOnHover className="w-full [--duration:60s]" repeat={2}>
                {UtutoWallpapers.map(item => {
                  return (
                    <figure
                      key={item.title}
                      className={cn(
                        'relative aspect-video w-[500px] cursor-pointer overflow-hidden rounded-xl p-4 ring-ring transition-shadow duration-300 ease-out hover:ring-2'
                      )}
                      style={{
                        backgroundImage: `url(${item.url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <figcaption className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 ease-out hover:opacity-100">
                        {item.title} - {item.author}
                      </figcaption>
                    </figure>
                  );
                })}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
