import ReactPic from '../img/ReactJs.png';
import '../style/style.css';
 
function Dialog({ display, onClick }) {
  return (
    <div className='dialogBox' style={{display}}>
        <img src={ReactPic} alt='React Logo' />
        <span >
            <button className="dialogClose" onClick={onClick}>
                Click to close
            </button>
        </span>
    </div>
  )
}

export default Dialog;