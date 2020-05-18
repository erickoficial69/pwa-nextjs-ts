import { useEffect, useState } from 'react'
import {Navbar} from '../components/navbar'
import {Footer} from '../components/footer'
import Head from 'next/head'
import {
  AndroidTwoTone,
  Apple
} from '@material-ui/icons'

import {devTools} from '../components/graphql-querys/index'


function MovilApp() {
  const title = 'aplicaciones moviles'
  const [tools, setTools] = useState([])
  const [tools2, setTools2] = useState([])
  const [tools3, setTools3] = useState([])

  const query = `{tools(nombre:"mobile apps"){
    nombre
  }} 
  `
  
  useEffect(() => {
    devTools(query,setTools,setTools2,setTools3)
  },[])

 
  return <>
          <Head>
            <title>{title} - Diaz web App</title>
            <link rel='stylesheet' href='css/effectos.css' />
            <meta name="description" content="Desarrollo de aplicaciones móviles para particulares, empresas y comercios con tecnología de punta y el mejor rendimiento del mercado." />
          </Head>
          <Navbar navStatus={title} />
  <main >

      <div className='movilstyle intro1' itemScope itemType="http://schema.org/Service">
        <article>
            <div style={{textAlign:"center"}}><AndroidTwoTone style={{color:"green", width:"100px"}} className='androidIcon' /></div>
            
            <h2 itemProp="name">Android Apps</h2>
            <p itemProp="description">
                Desarrollamos aplicaciones nativas para Android, plataforma líder a nivel mundial con la mejor cuota de mercado absoluta. Tenemos basta experiencia en el desarrollo para Android. Descubre todas las funcionalidades que Android ofrece con Diaz Web App.
            </p>
        </article> 
        <article>
            <div style={{textAlign:"center"}} ><Apple className='appelIcon' /></div>
            
            <h2 itemProp="name">IOS Apps</h2>
            <p itemProp="description">
                Desarrollo de aplicaciones nativas para iPhone, uno de los dispositivos móviles más utilizados, Diaz Web App desarrolla aplicaciones desde la primera versión iOS hasta la actual y tenemos un experto conocimiento de App Store.
            </p>
        </article>
      </div>

      <section>
        <article>
          <h2 itemProp="name">Promoción de apps</h2>
          <p itemProp="description">
          Nuestro equipo especializado ayudará en el proceso promoción optimizando tu app móvil para conseguir aparecer en los primeros resultados de búsqueda en los Market Places y lograr descargas.
          </p>
      </article>
    </section>
    
      <section>
        {
          tools.length > 0?
            <h2>Tecnologías De desarrollo</h2>:
            null
        }
      </section>
      <section>
          <ul className='tecnologies'>
              {
                 tools.map((t,i)=><li key={i}>
                 <p>
                  <img src={"/svg/"+t.nombre+".svg"} />
                  {t.nombre}
                 </p>
               </li>)
               }
               {
                 tools2.map((t,i)=><li key={i}>
                   <p>
                    <img src={"/svg/"+t.nombre+".svg"} />
                    {t.nombre}
                   </p>
                 </li>)
               }
               {
                 tools3.map((t,i)=><li key={i}>
                   <p>
                    <img src={"/svg/"+t.nombre+".svg"} />
                    {t.nombre}
                   </p>
                 </li>)
               }
          </ul>
      </section>
      <Footer/>
      
    </main>
    <style>
        {
           ` 
           section{
              grid-column: 2 / span 14;
              margin: 2vmin auto;
            }
            section article{
              margin:2vmin auto;
            }
          section article h2{
              text-align:center;
            }
            .movilstyle{
              display:grid;
              grid-column: 1 / span 16 !important;
              background-color:#222;
              background-image:url(/img/codes.gif);
              background-size: cover;
              background-repeat:no-repeat;
              background-attachment:fixed;
              background-position: center center;
              background-blend-mode:multiply;
              padding:5vmin 8vmin;
              grid-template-columns:repeat(2,1fr);
              grid-gap:5vmin;
            }
            .movilstyle h1{
              grid-column:1 / span 2;
              text-align:center;
              color:white;
            }
            .movilstyle article{
              grid-column: 1 / span 2;
            }
            .movilstyle p{
              color:white;
            }
            .movilstyle article svg{
              font-size:111px;
            }
            .movilstyle article svg path{
              color:lightgreen;
            }
            .movilstyle article:last-child svg path{
              color:grey !important;
            }
            .movilstyle h2{
              color:white;
              text-align:center;
            }
            @media (min-width:512px){
              .movilstyle article{
                grid-column: auto / span 1;
              }
            }
            `}
      </style>
  </>
}

export default MovilApp