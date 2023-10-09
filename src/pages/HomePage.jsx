export const HomePage = () => {

    return (
        <>
            <section className="welcome-page">
                <video autoPlay muted loop id="bg-video">
                    <source src="public/images/course-video.mp4" type="video/mp4"/>
                </video>

                <div className="video-overlay">
                    <div className="welcome-content">
                        <h6>Bienvenid@ a</h6>
                        <h1>IntegraFácil</h1>
                        <p>Tu puerta de entrada al aprendizaje</p>
                    </div>
                </div>
            </section>
        </>
    )
}