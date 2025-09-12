export default function Logo({ fillColor }) {
    return (
        <svg class="dot-svg" height="5" viewBox="0 0 200 5" width="200" fill={fillColor} stroke={fillColor}>
  <line x1="2.44336" x2="3.44336" y1="1.5" y2="1.5" strokeWidth={3} />
  <line x1="8.44336" x2="11.4434" y1="1.5" y2="1.5" strokeWidth={3}/>
  <line x1="17.4434" x2="24.4434" y1="1.5" y2="1.5" strokeWidth={3}/>
  <line x1="30.4434" x2="45.4434" y1="1.5" y2="1.5" strokeWidth={3}/>
  <line x1="51.4434" x2="1000" y1="1.5" y2="1.5" strokeWidth={3} />
</svg>
    );
  }