export default function Split({ fillColor, index }) {
    return (
        <svg fill={fillColor} class="proj-svg" id={"proj-svg-"+index} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs> 
                        <linearGradient id={"proj-gradient-"+index} x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stop-color="rgb(35,40,40)" offset="0%"></stop>
                            <stop id="stop2" stop-color="rgb(35,40,40)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                <path stroke="transparent"  d="M21.7,-35.5C28.2,-33.8,33.5,-28.1,35.5,-21.5C37.5,-15,36,-7.5,35.3,-0.4C34.5,6.6,34.4,13.2,32.1,19.2C29.8,25.2,25.2,30.5,19.5,33.2C13.8,35.9,6.9,35.9,0.6,34.9C-5.6,33.8,-11.3,31.6,-17.2,29C-23.1,26.4,-29.3,23.5,-32.9,18.6C-36.5,13.7,-37.5,6.8,-37,0.3C-36.5,-6.3,-34.5,-12.5,-31.7,-18.8C-28.9,-25,-25.2,-31.1,-19.8,-33.4C-14.3,-35.6,-7.2,-34,0.2,-34.4C7.6,-34.8,15.2,-37.1,21.7,-35.5Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" ></path>
              </svg>
    );
  }