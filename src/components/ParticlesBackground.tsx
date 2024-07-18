import { loadFull } from "tsparticles"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { useEffect, useMemo, useState } from "react"
import { particlesOptions } from "./config/particles-config"

export const ParticlesBackground = () => {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    if (init) {
        return <Particles id="tsparticles" options={particlesOptions} />
    }

    return <></>
}
