import { NavLink, Outlet } from 'react-router-dom'

export default function AndroidLayout() {
    const activeStyles = {
        textDecoration: 'underline',
        color: 'orange'
    }
    return (
        <>
            <nav style={{display: "flex", gap: '20px', margin: '20px 0'}} className='android-phones-nav-div'>
                <h2><NavLink to='.' style={({isActive}) => isActive ? activeStyles : null} end >samsung</NavLink></h2>
                <h2><NavLink to='oppo'style={({isActive}) => isActive ? activeStyles : null} >oppo</NavLink></h2>
                <h2><NavLink to='mi' style={({isActive}) => isActive ? activeStyles : null}>MI</NavLink></h2>
                <h2><NavLink to='motorola' style={({isActive}) => isActive ? activeStyles : null}>Motorola</NavLink></h2>
                <h2><NavLink to='lava' style={({isActive}) => isActive ? activeStyles : null}>Lava</NavLink></h2>
            </nav>
            <Outlet />
        </>
    )
}