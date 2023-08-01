import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header>
                <h1>#LOGO</h1>
                <nav>
                    <Link to='.'>Home</Link>
                    <Link to='about'>About</Link>
                    <Link to='mission'>Mission</Link>
                    <Link to='contact'>Contact</Link>
                </nav>
            </header>
        </>
    )
}