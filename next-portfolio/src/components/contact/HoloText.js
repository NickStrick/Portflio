import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
export default function Holo({ fillColor }) {
    console.log(fillColor)
    return (
        <div className="holo-body">
        <div className="holo-section">
            <div className="isolate">
                <div className="noise"><FontAwesomeIcon icon={faMapMarkerAlt} /> <br></br>Chicago IL</div>
                <div className="overlay"></div>
            </div>
        </div>
        </div>

    );
  }