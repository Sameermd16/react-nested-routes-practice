import { NavLink } from 'react-router-dom'

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: 'underline',
    }
    return (
        <>
            <header>
                <h1>#LOGO</h1>
                <nav>
                    <NavLink to='.' style={({isActive}) => isActive ? activeStyles : null} >Home</NavLink>
                    <NavLink to='about' style={({isActive}) => isActive ? activeStyles : null}>About</NavLink>
                    <NavLink to='mission' style={({isActive}) => isActive ? activeStyles : null}>Mission</NavLink>
                    <NavLink to='contact' style={({isActive}) => isActive ? activeStyles : null}>Contact</NavLink>
                </nav>
            </header>
        </>
    )
}