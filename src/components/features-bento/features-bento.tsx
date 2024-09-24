import { Fingerprint, Keyhole, LockOpen, Speedometer, TrendUp, UsersFour } from '@phosphor-icons/react/dist/ssr';

import { BentoCard, BentoGrid } from '../ui/bento-grid';
import { FeatureCommunity } from './features-community';
import { FeatureFreedom } from './features-freedom';
import { FeaturePerfomance } from './features-perfomance';
import { FeaturePrivacy } from './features-security';
import { FeatureUpgrade } from './features-upgrade';

const features = [
  {
    Icon: UsersFour,
    name: 'Comunidad',
    description:
      'Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.',
    href: '/',
    cta: 'Leer más',
    className: 'col-span-3 lg:col-span-1',
    background: <FeatureCommunity />,
  },
  {
    Icon: LockOpen,
    name: 'Libertad',
    description:
      'Tomá el control de tu experiencia digital con UTUTO. Libertad para elegir, libertad para compartir, libertad para colaborar.',
    href: '/',
    cta: 'Leer más',
    className: 'col-span-3 lg:col-span-2',
    background: <FeatureFreedom />,
  },
  {
    Icon: Fingerprint,
    name: 'Seguridad',
    description:
      'Protegé tu privacidad y tus datos con UTUTO. Nuestro compromiso con la seguridad digital es inquebrantable.',
    href: '/',
    cta: 'Leer más',
    className: 'col-span-3 lg:col-span-2',
    background: <FeaturePrivacy />,
  },
  {
    Icon: Speedometer,
    name: 'Rendimiento',
    description:
      'Experimentá la velocidad y el rendimiento de UTUTO. Nuestro sistema operativo está diseñado para funcionar en cualquier entorno.',
    className: 'col-span-3 lg:col-span-1',
    href: '/',
    cta: 'Leer más',
    background: <FeaturePerfomance />,
  },
  {
    Icon: Keyhole,
    name: 'Privacidad',
    description:
      'La privacidad es un derecho humano fundamental. Con UTUTO, podés estar seguro de que tus datos están protegidos y seguros.',
    className: 'col-span-3 lg:col-span-1',
    href: '/',
    cta: 'Leer más',
    background: <div></div>,
  },
  {
    Icon: TrendUp,
    name: 'Crecimiento',
    description:
      'Crecé con UTUTO. Nuestro sistema operativo está diseñado para adaptarse a tus necesidades y crecer con vos.',
    className: 'col-span-3 lg:col-span-2',
    href: '/',
    cta: 'Leer más',
    background: <FeatureUpgrade />,
  },
];

export function FeaturesBento() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
