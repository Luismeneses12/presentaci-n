import "./card-module.scss"

const Card = ()=>{
 return(
    <div className="card-module">
        <h1 className="nombre-tutular">Luis Alfredo Meneses Gallo</h1>
        <div className="FotoDePresentacion">
            <img src="./src/picture/tofo.png" alt="foto de presentación" className="foto" />
        </div>
        <div>
            <p className="descripcion">Hola, 
                soy Luis Alfredo Meneses Gallo, un desarrollador web apasionado por crear 
                experiencias digitales innovadoras y funcionales. Con habilidades en HTML, 
                CSS, JavaScript y frameworks modernos, me esfuerzo por transformar ideas en realidad a través de un código limpio y eficiente. Siempre estoy en busca de nuevos desafíos 
                y oportunidades para aprender y crecer en el mundo del desarrollo web.
            </p>
        </div>
        <section className="Que-me-apasiona">
            <div>
                <h2>¿Qué me apasiona?</h2>
                <div>
                    <p>
                        Me apasiona la tecnología y el desarrollo de software, 
                        disfruto aprender nuevas tecnologías y mejorar mis habilidades,
                        me gusta el lenguaje como Python y sus ramas, soy lector constante de documentación y aprendiz.
                        Me gusta mucho ver cursos en YouTube y plataformas de estudio.
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div>
                <h2>Mis estudios</h2>
            </div>
            <div>
                <ul>
                    <li>Bachiller</li>
                    <li>Técnico en cocina</li>
                    <li>Actualmente curso una técnica de desarrollador de software</li>
                </ul>
            </div>
        </section>
        <section>
            <div>
                <h2>¿Qué busco con la programación?</h2>
            </div>
            <div>
                <p>
                    Busco ser un miembro activo de esta gran comunidad que pueda aportar
                    conocimiento y experiencia en un futuro cercano. Busco hacer proyectos donde
                    se pueda combinar el web scraping con el análisis de datos para sacar mayor provecho
                    de la información que se encuentra en la web.
                </p>
            </div>
        </section>
        <footer>
            <div>
                <ul>
                    <li><a href="https://www.facebook.com/luis.meneses.733"><img src="./src/picture/facebook.png" alt=""  className="icono"/></a></li>
                    <li><a href="https://www.instagram.com/luismeneses498/"><img src="./src/picture/instagram.png" alt=""  className="icono"/></a></li>
                    <li><a href="https://github.com/Luismeneses12"><img src="./src/picture/github.png" alt=""  className="icono"/></a></li>
                </ul>
            </div>
            <div>
                <div>
                    <p>Informacion Personal</p>
                </div>
                <ul>
                    <li>luis.0495@hotmail.com</li>
                    <li>lmeneses@cesde.net</li>
                    <li>319283171</li>
                </ul>
            </div>
        </footer>
    </div>
 )
}
export default Card ;