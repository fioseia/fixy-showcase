import {SectionWrapper} from './components'
import headermockup from './assets/headermockup.png'

function App() {
  return (
    <>
      <SectionWrapper
      title="Ofrece y busca servicios para el mantenimiento del hogar de manera rapida, facil y confiable"
      description="Seas Cliente o Profesional proba nuestra aplicacion y olvidate tener que pedir recomendaciones a todos tu conocidos"
      showBtn
      mockupImg={headermockup}
      banner="banner"
      />
    </>
  );
}

export default App;
