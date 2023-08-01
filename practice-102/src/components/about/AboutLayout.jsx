import { Link, Outlet } from 'react-router-dom'

export default function AboutLayout() {
    return (
        // layout route contains links and outlet => need to import from react-router-dom
        <>
            <div className='about-links'>
                {/* page we need to show when user clicks on about from main menu */}
                <Link to='.'>Web</Link>  
                <Link to='android'>Andriod</Link>  
                <Link to='Games'>Games</Link>  
                <Link to='Iphone'>Iphone</Link>  
            </div>
            <Outlet />
        </>
    )
}