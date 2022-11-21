const HeroBanner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/ZHw3ZjK/pexels-fauxels-3184454-1.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hey Developer!</h1>
          <p className="mb-5">
            Test your understanding of Software development concepts with Tech
            Quiz quick multiple choice quizzes. Missed a question here and
            there?
          </p>
          <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0 font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
