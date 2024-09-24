'use client';

import { cn } from '@/lib/utils';
import Marquee from '../ui/marquee';

export function FeatureUpgrade() {
  return (
    <div className="absolute flex max-h-[400px] min-h-[400px] w-full flex-col overflow-hidden rounded-lg p-6 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee className="w-full [--duration:60s]" repeat={2}>
          {[
            {
              url: 'https://github.com/ututolinux/wallpapers/blob/main/wallpaper%20colores%20centrado.png?raw=true',
              title: 'Colores centrado',
            },
            {
              url: 'https://github.com/ututolinux/wallpapers/blob/main/wallpaper%20colores%20simple.png?raw=true',
              title: 'Colores simple',
            },
            {
              url: 'https://github.com/ututolinux/wallpapers/blob/main/wallpaper%20colores%20textura.png?raw=true',
              title: 'Colores textura',
            },
            {
              url: 'https://github.com/ututolinux/wallpapers/blob/main/wallpaper%20violetas.png?raw=true',
              title: 'Violetas',
            },
            {
              url: 'https://i.imgur.com/AisXUeV.png',
              title: 'Spacing green',
            },
            {
              url: 'https://i.imgur.com/2A8zYL1.jpeg',
              title: 'spacing violet',
            },
          ].map(item => {
            return (
              <figure
                key={item.title}
                className={cn(
                  'relative aspect-video w-[100px] cursor-pointer overflow-hidden rounded-xl p-4 ring-ring transition-shadow duration-300 ease-out hover:ring-2'
                )}
                style={{
                  backgroundImage: `url(${item.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></figure>
            );
          })}
        </Marquee>
        <Marquee className="w-full [--duration:60s]" repeat={2} reverse>
          {[
            {
              url: 'https://github.com/ututolinux/wallpapers/blob/main/wallpaper%20colores%20centrado.png?raw=true',
              title: 'Colores centrado',
            },
            {
              url: 'https://github.com/ututolinux/wallpapers/blob/main/wallpaper%20colores%20simple.png?raw=true',
              title: 'Colores simple',
            },
            {
              url: 'https://github.com/ututolinux/wallpapers/blob/main/wallpaper%20colores%20textura.png?raw=true',
              title: 'Colores textura',
            },
            {
              url: 'https://github.com/ututolinux/wallpapers/blob/main/wallpaper%20violetas.png?raw=true',
              title: 'Violetas',
            },
            {
              url: 'https://i.imgur.com/AisXUeV.png',
              title: 'Spacing green',
            },
            {
              url: 'https://i.imgur.com/2A8zYL1.jpeg',
              title: 'spacing violet',
            },
          ].map(item => {
            return (
              <figure
                key={item.title}
                className={cn(
                  'relative aspect-video w-[200px] cursor-pointer overflow-hidden rounded-xl p-4 ring-ring transition-shadow duration-300 ease-out hover:ring-2'
                )}
                style={{
                  backgroundImage: `url(${item.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></figure>
            );
          })}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/6 bg-gradient-to-r from-card"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-card"></div>
      </div>
    </div>
  );
}
