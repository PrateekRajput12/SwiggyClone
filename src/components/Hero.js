import useAPI from "../utils/useAPI"
import { API_URL } from "../utils/constants"


const Hero=()=>{

const list=useAPI(API_URL)
console.log(list);
    return(
        <div className="hero-container">
            {/* Card0 */}
            {/* Card1 */}
        </div>
    )
}


export default Hero