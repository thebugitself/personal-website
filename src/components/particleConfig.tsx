import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
    },
    size: {
      value: {
        min: 1,
        max: 2,
      },
    },
    links: {
      enable: true,
      distance: 125,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      warp: true,
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
    },
  },
};
export default options;
