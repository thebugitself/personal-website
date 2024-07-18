import { loadFull } from "tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import particleConfig from "@/lib/particleConfig";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return <Particles id="tsparticles" options={particleConfig} />;
  }

  return <></>;
};
