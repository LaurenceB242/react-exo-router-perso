import { useParams } from "react-router";

const Famille = () => {

    let {type} = useParams()

    return ( 
        <>
            <h1>Famille {type}</h1>
        </>
    );
}
 
export default Famille;