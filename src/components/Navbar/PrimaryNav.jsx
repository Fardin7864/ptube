import Logo from '../../../verson0.0.1/img/Logo.png'
const PrimaryNav = () => {
  return (
    <>
      <div className="w-full flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-center items-center lg:mt-4 md:mt-2 mt-2 px-16 ">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex lg:w-1/2 md:w-1/2 w-full justify-between mt-6 lg:mt-0 md:mt-0">
          <div>
            <button id="sort-btn" className="btn text-[#252525]">
              Sort by view
            </button>
          </div>
          <div>
            <button className="btn bg-[#FF1F3D] hover:bg-[#FF5F3D] text-white">
              <a href="blog.html">Blog</a>
            </button>
          </div>
        </div>
      </div>
      <div className="border-b border-b-[#17171733] w-11/12 mx-auto mt-6"></div>
    </>
  );
};

export default PrimaryNav;
