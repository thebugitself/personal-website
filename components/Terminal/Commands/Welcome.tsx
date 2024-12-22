const Welcome: React.FC = () => {
  return (
    <div>
      <div className="mb-2 text-accent">
        <pre>
          {`
    __  .__          ___.                .__  __                .__   _____
  _/  |_|  |__   ____\\_ |__  __ __  ____ |__|/  |_  ______ ____ |  |_/ ____\\
  \\   __\\  |  \\_/ __ \\| __ \\|  |  \\/ ___\\|  \\   __\\/  ___// __ \\|  |\\   __\\
   |  | |   Y  \\  ___/| \\_\\ \\  |  / /_/  >  ||  |  \\___ \\\\  ___/|  |_|  |
   |__| |___|  /\\___  >___  /____/\\___  /|__||__| /____  >\\___  >____/__|
             \\/     \\/    \\/     /_____/               \\/     \\/
            `}
        </pre>
      </div>
      <div>
        Type <span className="text-green-400">help</span> to see available
        commands.
      </div>
    </div>
  );
};

export default Welcome;
