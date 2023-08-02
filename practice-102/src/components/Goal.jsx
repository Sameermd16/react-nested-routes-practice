import { Link } from 'react-router-dom'

export default function Goal() {
    
    return (
        <>
            <h2>this is goal 1</h2>
            <button><Link to='1' >click here for goal 1</Link></button><br />
            <button><Link to='2' >click here for goal 2</Link></button><br />
            <button><Link to='3' >click here for goal 3</Link></button>
            <h2>this is goal 2</h2>
            <h2>this is goal 3</h2>
        </>
    )
}