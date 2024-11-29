const Welcome: React.FC = () => {
  return (
    <div>
      <div className="mb-2">
        Welcome to my terminal portfolio! <br />
        This is version <span className="text-green-400">1.0.0</span>.
      </div>
      <div>
        Type <span className="text-green-400">help</span> to see available
        commands.
      </div>
    </div>
  );
};

export default Welcome;
