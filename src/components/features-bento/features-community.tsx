'use client';

import { GitBranch, GitCommit } from '@phosphor-icons/react';

import { cn } from '@/lib/utils';
import { AnimatedList } from '../ui/animated-list';

interface Item {
  name: string;
  description: string;
  icon: React.ReactNode;
  time: string;
}

let notifications = [
  {
    name: 'Nuevo Commit',
    description: 'Se ha actualizado el repositorio de Ututo ',
    time: '15m ago',

    icon: <GitCommit className="h-4 w-4" />,
  },
  {
    name: 'Nueva Rama',
    description: 'Se ha creado la rama feature/ia-optimization',
    time: '10m ago',
    icon: <GitBranch className="h-4 w-4" />,
  },
  {
    name: 'Nueva Rama',
    description: 'Se ha creado la rama feature/snapgrid-window',
    time: '10m ago',
    icon: <GitBranch className="h-4 w-4" />,
  },
  {
    name: 'Nuevo Commit',
    description: 'Se han actualizado los paquetes de la rama feature/ia-optimization',
    time: '10m ago',
    icon: <GitBranch className="h-4 w-4" />,
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, time }: Item) => {
  return (
    <figure
      className={cn(
        'relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        // light styles
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        // dark styles
        'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex items-center justify-center rounded-md bg-primary p-2 text-primary-foreground">{icon}</div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function FeatureCommunity() {
  return (
    <div className="absolute flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg p-6 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
      <AnimatedList delay={2000}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
