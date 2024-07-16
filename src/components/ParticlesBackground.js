import { loadFull } from "tsparticles";
import Particles from "@tsparticles/react";
import particlesConfig from "../components/config/particles-config";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />;
};

export default ParticlesBackground;