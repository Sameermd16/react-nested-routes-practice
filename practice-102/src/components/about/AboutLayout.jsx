import { NavLink, Outlet } from 'react-router-dom'

export default function AboutLayout() {
    const activeStyles ={
        textDecoration: 'underline',
        fontWeight: 'bold'
    }

    return (
        // layout route contains links and outlet => need to import from react-router-dom
        <>
            <div className='about-links mb-2'>
                {/* page we need to show when user clicks on about from main menu */}
                <NavLink to='.' style={({isActive}) => isActive ? activeStyles : null} end >Web</NavLink>  
                <NavLink to='android' style={({isActive}) => isActive ? activeStyles : null} >Andriod</NavLink>  
                <NavLink to='Games' style={({isActive}) => isActive ? activeStyles : null} >Games</NavLink>  
                <NavLink to='Iphone' style={({isActive}) => isActive ? activeStyles : null} >Iphone</NavLink>  
            </div>
            <Outlet />
        </>
    )
}