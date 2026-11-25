import { useParams } from 'react-router'

const Perso = () => {

    //let params = useParams()
    //params.name
    let {type} = useParams()

    return ( 
        <>
            <h1>Nom du personnage {type}</h1>
        </>
     );
}
 
export default Perso;