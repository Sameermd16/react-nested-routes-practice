import { useParams } from 'react-router-dom'  //grabs whatever is present after : in url

export default function GoalDetails() {

    const {id} = useParams()
    console.log(id)
    return (
            <h2>here are the details of goal {id}</h2>
    )
}