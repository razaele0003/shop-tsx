import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import '../styles/Reviews.css';

import verifiedIcon from '../assets/icons/icon-verified.svg';
import arrowPrevIcon from '../assets/icons/icon-arrow-prev.svg';
import arrowNextIcon from '../assets/icons/icon-arrow-next.svg';

interface ReviewData {
  id: string;
  name: string;
  text: string;
  rating: number;
}

const REVIEWS: ReviewData[] = [
  {
    id: '1',
    name: 'Sarah M.',
    text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
    rating: 5,
  },
  {
    id: '2',
    name: 'Alex K.',
    text: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."`,
    rating: 5,
  },
  {
    id: '3',
    name: 'James L.',
    text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."`,
    rating: 5,
  },
  {
    id: '4',
    name: 'Mooen',
    text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."`,
    rating: 5,
  },
  {
    id: '5',
    name: 'Emily R.',
    text: `"I'm so impressed with the quality and fit of the clothes from Shop.co. Every piece feels stylish, comfortable, and worth the price."`,
    rating: 5,
  },
  {
    id: '6',
    name: 'Daniel P.',
    text: `"Shop.co has become my go-to store for everyday outfits. The designs are modern, the fabric feels great, and delivery was quick."`,
    rating: 5,
  },
  {
    id: '7',
    name: 'Sophia L.',
    text: `"I love how easy it is to find pieces that match my style. Everything I ordered looked even better in person."`,
    rating: 5,
  },
  {
    id: '8',
    name: 'Michael B.',
    text: `"The clothes are trendy, affordable, and surprisingly high quality. I'll definitely be shopping here again."`,
    rating: 5,
  },
];

const N = REVIEWS.length;
const LOOPED_REVIEWS = [...REVIEWS, ...REVIEWS, ...REVIEWS];
const LOOP_START_INDEX = N;

/** Wraps any index into the valid [0, N) range */
const mod = (n: number, m: number) => ((n % m) + m) % m;

interface CarouselLayout {
  viewportWidth: number;
  cardWidth: number;
  gap: number;
  visibleCount: number;
}

const getVisibleCount = (windowWidth: number) => {
  if (windowWidth <= 640) return 1;
  if (windowWidth <= 900) return 2;
  return 3;
};

const getGap = (windowWidth: number) => {
  if (windowWidth <= 640) return 16;
  return 20;
};

const getPreview = (windowWidth: number, visibleCount: number) => {
  if (visibleCount === 1) return 0;
  if (visibleCount === 2) return 44;
  if (windowWidth <= 1080) return 24;
  return 80;
};

const getCarouselLayout = (viewportWidth: number, windowWidth: number): CarouselLayout => {
  const visibleCount = getVisibleCount(windowWidth);
  const gap = getGap(windowWidth);
  const preview = getPreview(windowWidth, visibleCount);

  if (visibleCount === 1) {
    return {
      viewportWidth,
      cardWidth: viewportWidth,
      gap,
      visibleCount,
    };
  }

  const activeGaps = Math.max(0, visibleCount - 1) * gap;
  let cardWidth =
    (viewportWidth - activeGaps - 2 * (preview + gap)) / visibleCount;

  cardWidth = Math.min(400, cardWidth);

  if (cardWidth < 300) {
    cardWidth = (viewportWidth - activeGaps - 2 * gap) / visibleCount;
  }

  return {
    viewportWidth,
    cardWidth: Math.max(0, cardWidth),
    gap,
    visibleCount,
  };
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="review-stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="23" height="23" viewBox="0 0 23 23" fill="none">
        <path
          d="M11.5 0L14.5966 6.27373L21.5 7.27622L16.5 12.1481L17.6805 19.0305L11.5 15.782L5.31948 19.0305L6.5 12.1481L1.5 7.27622L8.40336 6.27373L11.5 0Z"
          fill={i < rating ? '#FFC633' : '#E0E0E0'}
        />
      </svg>
    ))}
  </div>
);

const ReviewCard: React.FC<{ review: ReviewData; className: string }> = ({
  review,
  className,
}) => (
  <div className={`review-card ${className}`}>
    <StarRating rating={review.rating} />
    <div className="review-author">
      <span className="author-name">{review.name}</span>
      <img src={verifiedIcon} alt="Verified" className="verified-icon" />
    </div>
    <p className="review-text">{review.text}</p>
  </div>
);

export const Reviews: React.FC = () => {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const resetFrameRef = useRef<number | null>(null);
  const [trackIndex, setTrackIndex] = useState(LOOP_START_INDEX);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [layout, setLayout] = useState<CarouselLayout>({
    viewportWidth: 0,
    cardWidth: 0,
    gap: 24,
    visibleCount: 3,
  });

  const normalizeToMiddleLoop = useCallback(
    (index: number) => LOOP_START_INDEX + mod(index, N),
    [],
  );

  const enableTransitionNextFrame = useCallback(() => {
    if (resetFrameRef.current !== null) {
      window.cancelAnimationFrame(resetFrameRef.current);
    }

    resetFrameRef.current = window.requestAnimationFrame(() => {
      resetFrameRef.current = window.requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
        resetFrameRef.current = null;
      });
    });
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const updateLayout = () => {
      setLayout(getCarouselLayout(viewport.clientWidth, window.innerWidth));
    };

    updateLayout();

    const resizeObserver = new ResizeObserver(updateLayout);
    resizeObserver.observe(viewport);
    window.addEventListener('resize', updateLayout);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateLayout);

      if (resetFrameRef.current !== null) {
        window.cancelAnimationFrame(resetFrameRef.current);
      }
    };
  }, []);

  const handlePrev = useCallback(() => {
    setTrackIndex((prev) => prev - 1);
  }, []);

  const handleNext = useCallback(() => {
    setTrackIndex((prev) => prev + 1);
  }, []);

  const handleTransitionEnd = useCallback(
    (event: React.TransitionEvent<HTMLDivElement>) => {
      if (event.propertyName !== 'transform') return;

      const normalizedIndex = normalizeToMiddleLoop(trackIndex);

      if (normalizedIndex !== trackIndex) {
        setIsTransitionEnabled(false);
        setTrackIndex(normalizedIndex);
        enableTransitionNextFrame();
      }
    },
    [enableTransitionNextFrame, normalizeToMiddleLoop, trackIndex],
  );

  const trackStyle = useMemo(() => {
    if (layout.cardWidth <= 0) return undefined;

    const step = layout.cardWidth + layout.gap;
    const activeGroupWidth =
      layout.visibleCount * layout.cardWidth +
      Math.max(0, layout.visibleCount - 1) * layout.gap;
    const activeGroupStart =
      layout.visibleCount === 1 ? 0 : (layout.viewportWidth - activeGroupWidth) / 2;
    const translateX = activeGroupStart - trackIndex * step;

    return {
      '--review-card-width': `${layout.cardWidth}px`,
      '--review-card-gap': `${layout.gap}px`,
      transform: `translate3d(${translateX}px, 0, 0)`,
      transition: isTransitionEnabled ? undefined : 'none',
    } as React.CSSProperties;
  }, [isTransitionEnabled, layout, trackIndex]);

  const getCardClassName = useCallback(
    (index: number) => {
      const slotOffset = index - trackIndex;

      if (layout.visibleCount === 1) {
        return slotOffset === 0 ? 'is-active' : '';
      }

      if (slotOffset >= 0 && slotOffset < layout.visibleCount) {
        return 'is-active';
      }

      if (slotOffset === -1 || slotOffset === layout.visibleCount) {
        return 'is-side';
      }

      return '';
    },
    [layout.visibleCount, trackIndex],
  );

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="reviews-title">OUR HAPPY CUSTOMERS</h2>
          <div className="reviews-navigation">
            <button
              type="button"
              className="nav-arrow"
              aria-label="Previous review"
              onClick={handlePrev}
            >
              <img src={arrowPrevIcon} alt="Previous" className="arrow-prev-icon" />
            </button>
            <button
              type="button"
              className="nav-arrow"
              aria-label="Next review"
              onClick={handleNext}
            >
              <img src={arrowNextIcon} alt="Next" className="arrow-next-icon" />
            </button>
          </div>
        </div>

      </div>

      <div className="reviews-carousel-shell">
        <div className="reviews-viewport" ref={viewportRef}>
          <div
            className="reviews-track"
            style={trackStyle}
            onTransitionEnd={handleTransitionEnd}
          >
            {LOOPED_REVIEWS.map((review, index) => (
              <ReviewCard
                key={`${index}-${review.id}`}
                review={review}
                className={getCardClassName(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
