import isotipoSrc from '@/assets/brand/isotipo.svg';

interface BrandIsotipoProps {
  className?: string;
  alt?: string;
}

export default function BrandIsotipo({
  className = '',
  alt = 'Isotipo de Trader Fit',
}: BrandIsotipoProps) {
  return <img src={isotipoSrc} alt={alt} className={['object-contain', className].filter(Boolean).join(' ')} />;
}
