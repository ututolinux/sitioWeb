import { DiscordLogo, GithubLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 px-4 py-6 md:px-6">
      <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-6">
        <div className="col-span-2 flex flex-col gap-2">
          <h4 className="text-lg font-semibold">Ututo Linux</h4>
          <p className="text-sm">Ututo es una distribución de Linux Argentina, hecha por la comunidad.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-semibold">Sobre Nosotros</h6>
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="https://es.wikipedia.org/wiki/Ututo"
                referrerPolicy="no-referrer"
                className="text-sm hover:underline"
              >
                Wikipedia
              </a>
            </li>
            <li>
              <a href="https://ututo.org/" referrerPolicy="no-referrer" className="text-sm hover:underline">
                Legacy
              </a>
            </li>
            <li>
              <a href="https://ututo.ar/" referrerPolicy="no-referrer" className="text-sm hover:underline">
                Ututo 11
              </a>
            </li>
            <li>
              <a
                href="https://jpromanonet.notion.site/Roadmap-d57a3af2154347d7b11016f74881a68d"
                referrerPolicy="no-referrer"
                className="text-sm hover:underline"
              >
                Roadmap Ututo 11
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-semibold">Ututo 11</h6>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="/" className="text-sm hover:underline">
                Tienda
              </a>
            </li>
            <li>
              <a href="https://comunidad.ututo.ar" className="text-sm hover:underline">
                Discord
              </a>
            </li>
            <li>
              <a href="https://linktr.ee/ututolinux" className="text-sm hover:underline">
                Linktree
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@ututolinux" className="text-sm hover:underline">
                Youtube
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/show/6E6Vk5F5XN3DsT4EWLux6I" className="text-sm hover:underline">
                Spotify
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-semibold">Ayuda</h6>
          <ul className="flex flex-col gap-1">
            <li>
              <Link href="/faq" className="text-sm hover:underline">
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link href="/guides" className="text-sm hover:underline">
                Guía de uso
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-semibold">Contacto</h6>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="mailto:contacto@ututo.ar" className="text-sm hover:underline">
                contacto@ututo.ar
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 flex w-full flex-col items-center justify-between gap-4 border-t border-border p-2 md:flex-row">
        <div className="flex flex-col items-start space-x-2 md:items-start md:space-x-0">
          <p className="text-sm font-bold leading-6 text-muted-foreground">{new Date().getFullYear()} Ututo Linux</p>
          <p className="text-sm leading-6 text-muted-foreground">
            Los contenidos de este sitio estan licenciados bajo The GNU Free Documentation License
          </p>
        </div>
        <div className="flex flex-row items-center gap-2 md:items-end">
          <a href="https://github.com/ututolinux" target="_blank" referrerPolicy="no-referrer" aria-label="github">
            <GithubLogo className="h-5 w-5" />
            <span className="sr-only">Github</span>
          </a>
          <a href="https://x.com/ututolinux" target="_blank" referrerPolicy="no-referrer" aria-label="x">
            <XLogo className="h-5 w-5" />
            <span className="sr-only">X</span>
          </a>
          <a href="https://www.linkedin.com/company/ututo/" target="_blank" referrerPolicy="no-referrer">
            <LinkedinLogo className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://comunidad.ututo.ar" target="_blank" referrerPolicy="no-referrer">
            <DiscordLogo className="h-5 w-5" />
            <span className="sr-only">Discord</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
