import { useEffect, useState } from 'react';

interface YoutubePlayCoverProps {
  videoId: string;
}

export function YoutubePlayCover({ videoId }: YoutubePlayCoverProps) {
  const maxResUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const hqUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const [src, setSrc] = useState(maxResUrl);

  useEffect(() => {
    setSrc(maxResUrl);
  }, [maxResUrl]);

  return (
    <>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => {
          if (src !== hqUrl) {
            setSrc(hqUrl);
          }
        }}
      />
      <div className="absolute inset-0 bg-black/20" />
    </>
  );
}
