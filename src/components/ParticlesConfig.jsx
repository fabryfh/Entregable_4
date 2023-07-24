import { useCallback } from "react"
import { loadFull } from "tsparticles"
import Particles from "react-tsparticles"
import particlesConfig from "./config/particlesConfig.js"


const ParticlesConfig = () => {

    const particlesInit = useCallback((engine) => {
        loadFull(engine)
    }, [])

  return (
    <Particles
    id="tsparticles"
    options={particlesConfig}
    init={particlesInit}
  />
  )
}

export default ParticlesConfig