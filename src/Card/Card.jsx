import profilePicture from '../assets/thumbnail-me.png';
import styles from './Card.module.css';

function Card(){

    return (
        <div className={styles.card}>
            <img src={profilePicture} alt='Profile Picture'></img>
            <h3 className="card-title">Web Developer</h3>
            <hr/>
            <p className="card-description">Hello! I'm Evan </p>
        </div>
    )
}

export default Card;