

function Home() {
  return (
    <div className=" py-5 px-4">
      <h1 className="text-3xl text-center text-teal-700 mt-4 mb-5 font-serif font-bold animate-fadeInLeft">Welcome To My Portfolio!</h1>

      <p className="text-xl text-center text-gray-800 max-w-3xl mx-auto p-5 bg-white rounded-lg shadow-md leading-relaxed animate-fadeInRight">
        I am a passionate developer specializing in creating innovative and user-friendly web applications. This platform showcases my diverse range of projects, including applications built with Java, TypeScript, HTML, and CSS. Each project reflects my dedication to delivering high-quality code and exceptional user experiences. Explore my work to see how I blend creativity and technical expertise to solve real-world problems, and feel free to reach out if you're interested in collaborating or have any inquiries. Thank you for visiting!
      </p>

      <div className="flex justify-center mt-5">
      <img 
  src="/picture.jpeg" 
  alt="Portfolio Image" 
  className="h-[400px] w-[360px] rounded-[23%] shadow-md mb-8 mx-auto animate-fadeIn" 
/>

      </div>
    </div>
  );
}

export default Home;
