

function Home() {
  return (
    <div className=" py-5 px-4">
      <h1 className="text-3xl text-center text-teal-700 mt-4 mb-5 font-serif font-bold animate-fadeInLeft">Welcome To My Portfolio!</h1>

      <p className="text-xl text-center text-gray-800 max-w-3xl mx-auto p-5 bg-white rounded-lg shadow-md leading-relaxed animate-fadeInRight">
       "I'm  Muhammad Abdullah , a passionate front-end developer who thrives on turning ideas into functional, visually stunning websites. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, I specialize in creating dynamic, responsive web applications that offer seamless user experiences across devices. I enjoy the challenge of blending creativity with technical problem-solving, ensuring both aesthetics and performance are at the forefront of my work. Whether it's optimizing a design for speed, building intuitive user interfaces, or implementing complex features, I focus on delivering high-quality results that align with both client and user needs. I'm committed to continuous learning, always exploring new technologies and refining my skills to stay on top of industry trends. My goal is to not only build functional websites but also craft digital experiences that leave a lasting impression.
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
