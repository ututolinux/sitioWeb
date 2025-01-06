'use client';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ModeToggle } from '../mode-toggle';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

const springVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

export const Header = () => {
  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={springVariants}
      viewport={{ once: true }}
      className="h-18 sticky top-0 z-10 border-b border-border/20 bg-background/20 px-4 py-2 backdrop-blur lg:px-6"
    >
      <div className="container flex flex-row items-center">
        <Image
          width={50}
          height={50}
          src={'/logo.png'}
          alt="logo"
          className="mr-2 h-8 w-auto object-scale-down dark:brightness-100"
        />
        <nav className="mx-2 hidden flex-1 gap-4 sm:gap-6 md:flex">
          <Link href="#hero" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
            Inicio
          </Link>
          <Link href="#features" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
            Ventajas
          </Link>
          <Link href="#about" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
            Nosotros
          </Link>
          <Link href="https://linktr.ee/ututolinux" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
            Comunidad
          </Link>
          <Link href="https://blogdeututo.vercel.app/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
            Blog
          </Link>
        </nav>
        <Button variant={'shine'} className="ml-2 mr-2 hidden items-center justify-center md:flex" asChild>
          <a href="https://descargas.ututo.ar/iso/" target="_blank">
            <Image src={'/ututo-11.png'} alt="ututo-11" width={24} height={24} className="mr-2 h-4 w-4" />
            Ututo 11
          </a>
        </Button>
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={'ghost'} size={'icon'} className="md:hidden">
              <HamburgerMenuIcon className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="flex flex-row items-center justify-start">
                <Image
                  width={50}
                  height={50}
                  src={'/logo.png'}
                  alt="logo"
                  className="mr-2 h-full w-auto object-scale-down"
                />
                <h2>Ututo Linux</h2>
              </SheetTitle>
              <SheetDescription>
                Ututo es una distribución de Linux basada en Gentoo, creada en Argentina por Diego Saravia en el año
                2000.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
                Inicio
              </Link>
              <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
                Ventajas
              </Link>
              <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
                Nosotros
              </Link>
              <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
                Comunidad
              </Link>
              <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
                Blog
              </Link>
              <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
                Ayuda
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};
