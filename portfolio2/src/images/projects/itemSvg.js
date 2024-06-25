
export default function Split({ fillColor, index }) {
    return (
        <svg width="100%" height="100%" id={"projwave-svg"+index} viewBox="0 0 1440 890" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
            <defs>
            <linearGradient id={"projwave-gradient"+index} x1="52%" y1="0%" x2="48%" y2="100%">
            <stop offset="5%" stop-color="rgba(0,0,0,0.2)">
            </stop>
        <stop offset="95%" stop-color="transparent">
            </stop>
        </linearGradient>
        </defs>
        <path d="M 0,600 L 0,225 C 132.8,194.60000000000002 265.6,164.20000000000002 418,191 C 570.4,217.79999999999998 742.4000000000001,301.8 916,342 C 1089.6,382.2 1264.8,378.6 1440,375 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill={"url(#projwave-gradient"+index+")"} fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0">
            </path>
        </svg>
    );
  }