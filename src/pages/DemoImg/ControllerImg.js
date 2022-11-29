import './DemoImg.css'
import OneImg from '../../component/ZoomImg/OneImg';

function ControllerImg({click}) {
    return ( 
    <div onClick={() => click()} className="overlay">
        <OneImg></OneImg>
    </div>
     );
}

export default ControllerImg;