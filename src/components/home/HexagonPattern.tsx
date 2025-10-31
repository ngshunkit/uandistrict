export const HexagonPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
            <polygon
              points="50,0 100,25 100,75 50,100 0,75 0,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary-foreground"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};

export const FloatingHexagon = ({ delay = 0 }: { delay?: number }) => {
  return (
    <div
      className="absolute opacity-20 pointer-events-none"
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <svg width="80" height="92" viewBox="0 0 80 92" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40 0L77.3205 23V69L40 92L2.67949 69V23L40 0Z"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent"
          fill="none"
        />
      </svg>
    </div>
  );
};
