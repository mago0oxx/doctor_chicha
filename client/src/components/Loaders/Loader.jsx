import pikachuLoader from "../assets/7TwN.gif"
import Style from '../Loaders/Loader.module.css'

function Loader() {
    return (
        <div className={Style.spinner}>
            <img 
				src={pikachuLoader}
				alt='Pikachu loader'
                width="300"
                height="250"
			/>
            <span className={Style.loading}>Loading...</span>
        </div> 
    )
}

export default Loader;