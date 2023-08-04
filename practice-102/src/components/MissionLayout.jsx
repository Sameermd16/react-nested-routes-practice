import { NavLink, Outlet } from 'react-router-dom'

export default function MissionLayout() {

    const activeStyles = {
        textDecoration: 'underline',
        fontWeight: 'bold'
    }

    return (
        <>
        <div>
            <ul className='mission-header'>
                <li>
                    <NavLink to='.' style={({isActive}) => isActive ? activeStyles : null} end >dashboard</NavLink>
                </li>
                <li>
                    <NavLink to='goal' style={({isActive}) => isActive ? activeStyles : null} >Goal</NavLink>
                </li>
                <li>
                    <NavLink to='contribution' style={({isActive}) => isActive ? activeStyles : null} >Contribution</NavLink>
                </li>
            </ul>
        </div>
        <Outlet />
        </>
    )
}