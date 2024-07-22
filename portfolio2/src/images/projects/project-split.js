
export default function Split({index}) {
    // #373737 rgb(35,40,40)
    return (
        <svg id={`wave${index}`} class={`split-svg project-detail-split-${index}`}  viewBox="0 0 1440 260" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
        <linearGradient id={`sw-gradient-${index}`} x1="0" x2="0" y1="1" y2="0">
        <stop stop-color="rgb(60,62,70)" offset="0%">
        </stop>
        <stop stop-color="rgb(60,62,70)" offset="100%">
        </stop>
        </linearGradient>
        </defs>
        <path  fill={`url(#sw-gradient-${index})`} d="M0,0L60,30.3C120,61,240,121,360,125.7C480,130,600,78,720,73.7C840,69,960,113,1080,125.7C1200,139,1320,121,1440,121.3C1560,121,1680,139,1800,121.3C1920,104,2040,52,2160,26C2280,0,2400,0,2520,0C2640,0,2760,0,2880,13C3000,26,3120,52,3240,86.7C3360,121,3480,165,3600,169C3720,173,3840,139,3960,130C4080,121,4200,139,4320,121.3C4440,104,4560,52,4680,52C4800,52,4920,104,5040,104C5160,104,5280,52,5400,65C5520,78,5640,156,5760,173.3C5880,191,6000,147,6120,134.3C6240,121,6360,139,6480,156C6600,173,6720,191,6840,169C6960,147,7080,87,7200,73.7C7320,61,7440,95,7560,130C7680,165,7800,199,7920,208C8040,217,8160,199,8280,199.3C8400,199,8520,217,8580,225.3L8640,234L8640,260L8580,260C8520,260,8400,260,8280,260C8160,260,8040,260,7920,260C7800,260,7680,260,7560,260C7440,260,7320,260,7200,260C7080,260,6960,260,6840,260C6720,260,6600,260,6480,260C6360,260,6240,260,6120,260C6000,260,5880,260,5760,260C5640,260,5520,260,5400,260C5280,260,5160,260,5040,260C4920,260,4800,260,4680,260C4560,260,4440,260,4320,260C4200,260,4080,260,3960,260C3840,260,3720,260,3600,260C3480,260,3360,260,3240,260C3120,260,3000,260,2880,260C2760,260,2640,260,2520,260C2400,260,2280,260,2160,260C2040,260,1920,260,1800,260C1680,260,1560,260,1440,260C1320,260,1200,260,1080,260C960,260,840,260,720,260C600,260,480,260,360,260C240,260,120,260,60,260L0,260Z">
        </path>
        <defs>
        <linearGradient id={`sw-gradient-1-${index}`} x1="0" x2="0" y1="1" y2="0">
        <stop stop-color="rgb(60,62,70)" offset="0%">
        </stop>
        <stop stop-color="rgb(60,62,70)" offset="100%">
        </stop>
        </linearGradient>
        </defs>
        <path  fill={`url(sw-gradient-1-${index})`} d="M0,208L60,195C120,182,240,156,360,156C480,156,600,182,720,160.3C840,139,960,69,1080,43.3C1200,17,1320,35,1440,56.3C1560,78,1680,104,1800,134.3C1920,165,2040,199,2160,182C2280,165,2400,95,2520,60.7C2640,26,2760,26,2880,30.3C3000,35,3120,43,3240,69.3C3360,95,3480,139,3600,138.7C3720,139,3840,95,3960,104C4080,113,4200,173,4320,186.3C4440,199,4560,165,4680,156C4800,147,4920,165,5040,182C5160,199,5280,217,5400,225.3C5520,234,5640,234,5760,208C5880,182,6000,130,6120,108.3C6240,87,6360,95,6480,91C6600,87,6720,69,6840,65C6960,61,7080,69,7200,82.3C7320,95,7440,113,7560,121.3C7680,130,7800,130,7920,143C8040,156,8160,182,8280,186.3C8400,191,8520,173,8580,164.7L8640,156L8640,260L8580,260C8520,260,8400,260,8280,260C8160,260,8040,260,7920,260C7800,260,7680,260,7560,260C7440,260,7320,260,7200,260C7080,260,6960,260,6840,260C6720,260,6600,260,6480,260C6360,260,6240,260,6120,260C6000,260,5880,260,5760,260C5640,260,5520,260,5400,260C5280,260,5160,260,5040,260C4920,260,4800,260,4680,260C4560,260,4440,260,4320,260C4200,260,4080,260,3960,260C3840,260,3720,260,3600,260C3480,260,3360,260,3240,260C3120,260,3000,260,2880,260C2760,260,2640,260,2520,260C2400,260,2280,260,2160,260C2040,260,1920,260,1800,260C1680,260,1560,260,1440,260C1320,260,1200,260,1080,260C960,260,840,260,720,260C600,260,480,260,360,260C240,260,120,260,60,260L0,260Z">
        </path>
        </svg>

    );
    }