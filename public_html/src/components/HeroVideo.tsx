import { KurukinPlayer } from '@/components/video-player';

interface HeroVideoProps {
  className?: string;
}

const HERO_VIDEO_ID = 'aQhTmuZiKOY';

export default function HeroVideo({ className = '' }: HeroVideoProps) {
  return (
    <div
      className={[
        'relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-[0_28px_90px_rgba(2,6,23,0.78)] sm:rounded-[2rem]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <KurukinPlayer
        provider="youtube"
        videoId={HERO_VIDEO_ID}
        mutedPreview={{ enabled: true, overlayPosition: 'center' }}
        hideYoutubeUi
      />
    </div>
  );
}
