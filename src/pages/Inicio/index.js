import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useState, useEffect } from "react";
import styles from './Inicio.module.css'


function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/ExecutionCSR/cine_tag/filmes").then(resposta => resposta.json()).then(dados => {
            setVideos(dados);
        });
    }, []);

    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um Lugar para Guardar  seus VIdeos e Filmes</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Inicio;