export default function HomeHero() {
  return (
    <section id="hero" className="w-full h-screen bg-customBlue">
      <div className="max-w-[1600px] m-auto h-full w-full flex flex-col justify-center px-[20px] md:px-[50px] lg:px-[150px]">
        <h1 className=" text-secondaryColor font-bold mb-[30px] ml-[4px] fade-up-enter">
          Hi, my name is
        </h1>
        <h2 className=" font-bold text-fontWhite heading-1 mb-[10px] fade-up-enter">
          Chris Zhen.
        </h2>
        <h3 className=" font-bold text-fontDarkerWhite heading-1 mb-[20px] fade-up-enter">
          I am a Web Developer.
        </h3>
        <p className=" text-fontDarkerWhite md:max-w-[540px] mb-[30px] fade-up-enter">
          Quality-driven and passionate web developer committed to crafting
          exceptional user experiences by creating attractive and accessible
          websites.
        </p>
        <div className="fade-up-enter">
          <a
            href="mailto:chris.zhendev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-bold px-[20px] py-[10px] border-2 border-secondaryColor text-secondaryColor rounded-md hover:bg-secondaryColor hover:text-black">
              Reach out for a chat!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
