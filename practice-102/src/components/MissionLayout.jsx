import { Link, Outlet } from 'react-router-dom'

export default function MissionLayout() {
    return (
        <>
        <div>
            <ul className='mission-header'>
                <li>
                    <Link to='.'>dashboard</Link>
                </li>
                <li>
                    <Link to='goal'>Goal</Link>
                </li>
                <li>
                    <Link to='contribution'>Contribution</Link>
                </li>
            </ul>
        </div>
        <Outlet />
        </>
    )
}