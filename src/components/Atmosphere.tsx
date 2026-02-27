const Atmosphere = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0f0f] to-black" />

      {/* Neon Orb 1 */}
      <div className="absolute w-[700px] h-[700px] bg-[#39FF14]/10 rounded-full blur-3xl top-[-200px] left-[-200px]" />

      {/* Neon Orb 2 */}
      <div className="absolute w-[600px] h-[600px] bg-[#00ffcc]/10 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default Atmosphere;