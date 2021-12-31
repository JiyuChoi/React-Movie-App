import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (<h1>Detail</h1>);
}
export default Detail;