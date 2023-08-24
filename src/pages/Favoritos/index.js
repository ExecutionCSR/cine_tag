import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useEffect, useState } from "react";

function Favoritos() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/ExecutionCSR/cine_tag/filmes?favorit=1").then(resposta => resposta.json()).then(dados => {
            setVideos(dados);
        });
    });

    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )

};

export default Favoritos;