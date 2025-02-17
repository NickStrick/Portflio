import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faHammer, faHandshakeSimple, faPaperPlane, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
export default function Holo({ fillColor }) {
    return (
        <div className="holo-body">
        <div className="holo-section">
            <div class="isolate">
                <div class="noise"><FontAwesomeIcon icon={faMapMarkerAlt} />Greater Chicago Area, IL</div>
                <div class="overlay"></div>
            </div>
        </div>
        </div>

    );
  }