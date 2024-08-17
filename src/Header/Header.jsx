import styles from './Header.module.css';

function Header() {
    return (
        <header style={styles}>
            <h1>[ Evan Runyon ]</h1>
            <nav>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;