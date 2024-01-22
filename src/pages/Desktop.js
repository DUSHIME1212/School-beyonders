const Desktop = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start bg-[url('/public/desktop@3x.png')] bg-cover bg-no-repeat bg-[top] tracking-[normal]">
      <section className="self-stretch flex flex-row items-start h-screen justify-start relative max-w-full text-left text-base text-white font-manrope">
        <div className="w-[1450px] absolute my-0 mx-[!important] right-[-10px] bottom-[-670px] rounded-[50%] bg-gray-100 [filter:blur(300px)] h-[1341px]" />
        <div className="flex-1 flex flex-col items-center justify-center gap-[228px] max-w-full shrink-0 z-[1] mq450:gap-[57px] mq750:gap-[114px]">
          <header className="self-stretch flex flex-row items-center justify-between py-2.5 px-[100px] box-border min-w-[340px] gap-[20px] max-w-full text-left text-base text-white font-beyonders mq450:pl-5 mq450:pr-5 mq450:box-border mq750:hidden mq1050:pl-[50px] mq1050:pr-[50px] mq1050:box-border">
            <i className="h-8 w-[126px] relative inline-block">Profico.</i>
            <div className="w-[322px] flex flex-row items-start justify-start gap-[40px] max-w-full font-manrope mq450:gap-[20px]">
              <div className="h-[22px] relative capitalize inline-block">
                about
              </div>
              <div className="relative capitalize">courses</div>
              <div className="h-[22px] relative capitalize inline-block">
                process
              </div>
              <div className="h-[22px] relative capitalize inline-block">
                facs
              </div>
            </div>
            <button className="cursor-pointer py-2.5 px-[37px] bg-white rounded-21xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="relative text-base capitalize font-manrope text-black text-left">
                apply now
              </div>
            </button>
          </header>
          <div className="w-full flex flex-col items-center justify-between py-0 px-5 box-border min-w-[600px] max-w-[910px] mq1050:max-w-full">
            <div className="relative">DEV DESIGN INTERNSHLP</div>
            <h1 className="m-0 self-stretch h-64 relative text-45xl font-normal font-beyonders text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0),_#fff_70%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center inline-block min-w-[600px] mq450:text-19xl mq750:text-32xl">
              beyonders academy
            </h1>
            <button className="cursor-pointer py-2.5 px-[38px] bg-[transparent] rounded-[50px] flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="relative text-base capitalize font-manrope text-white text-left">
                apply now
              </div>
            </button>
          </div>
          <div className="w-[1172px] rounded-[24.42px] bg-gray-200 [backdrop-filter:blur(65.11px)] flex flex-row flex-wrap items-center justify-between gap-[0px] [row-gap:20px] max-w-full text-smi lg:w-[calc(100%_-_40px)]">
            <div className="w-[293px] flex flex-col items-start justify-start py-[24.416667938232422px] px-[32.55555725097656px] box-border gap-[16.28px]">
              <div className="relative capitalize">location</div>
              <div className="relative capitalize">kigali/rwanda</div>
            </div>
            <img
              className="h-11 w-0 relative object-contain"
              loading="eager"
              alt=""
              src="/line-1.svg"
            />
            <div className="w-[293px] flex flex-col items-start justify-start py-[24.416667938232422px] px-[32.55555725097656px] box-border gap-[16.28px]">
              <div className="relative capitalize">duration</div>
              <div className="relative capitalize">8 weeks</div>
            </div>
            <img
              className="h-11 w-0 relative object-contain"
              loading="eager"
              alt=""
              src="/line-2.svg"
            />
            <div className="w-[293px] flex flex-col items-start justify-start py-[24.416667938232422px] px-[32.55555725097656px] box-border gap-[16.28px]">
              <div className="relative capitalize">mentors</div>
              <div className="relative capitalize">5</div>
            </div>
            <img
              className="h-11 w-0 relative object-contain"
              loading="eager"
              alt=""
              src="/line-1.svg"
            />
            <div className="w-[293px] flex flex-col items-start justify-start py-[24.416667938232422px] px-[32.55555725097656px] box-border gap-[16.28px]">
              <div className="relative capitalize">courses</div>
              <div className="relative capitalize">2</div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden m-auto flex flex-col items-center justify-start py-[69px] px-[38px] box-border gap-[101px] max-w-full z-[1] text-center text-base text-white font-manrope lg:pt-[45px] lg:pb-[45px] lg:box-border mq450:gap-[25px] mq750:gap-[50px] mq750:pt-[29px] mq750:pb-[29px] mq750:box-border">
        <div className="w-[606px] flex flex-col items-center justify-start gap-[56px] min-w-[320px] max-w-full mq750:gap-[28px]">
          <img
            className="w-6 h-6 relative overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/star06.svg"
          />
          <div className="w-[201px] h-auto rounded-21xl bg-gray-300 flex flex-row items-center justify-between py-[5px] px-2.5 box-border gap-[7px] whitespace-nowrap text-left">
            <img
              className="h-[15px] w-[15px] relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/link01.svg"
            />
            <div className="h-auto relative capitalize font-semibold inline-block">
              learn more about us
            </div>
          </div>
          <h1 className="m-0 h-auto relative text-45xl capitalize font-semibold font-inherit inline-block mq450:text-19xl mq750:text-32xl">
            What's in it for you?
          </h1>
          <div className="self-stretch h-11 relative capitalize font-semibold inline-block">
            <p className="m-0">
              Gain all the skills you nood to kick-start your profossbnol
              path through m.ontorirg by industry professionals.
            </p>
          </div>
        </div>
        <div className="w-[1359px] h-auto shrink-0 flex flex-row flex-wrap items-start justify-center py-0 pr-[19px] pl-0 box-border gap-[20px] min-w-[340px] max-w-full text-xl">
          <div className="h-[468px] w-80 rounded-21xl bg-gray-400 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[43px] pr-20 pl-10 box-border relative gap-[191px]">
            <div className="h-[145px] flex flex-col items-start justify-start gap-[30px]">
              <b className="relative capitalize mq450:text-base">
                Hands-on learning
              </b>
              <div className="flex-1 relative text-base capitalize text-left">
                <p className="m-0">Each course take you</p>
                <p className="m-0">through tho process ot</p>
                <p className="m-0">completing and testing a</p>
                <p className="m-0">project</p>
              </div>
            </div>
            <div className="w-[35px] h-11 absolute my-0 mx-[!important] top-[379px] left-[240px] text-13xl capitalize font-semibold text-left inline-block mq450:text-lgi mq750:text-7xl">
              01
            </div>
          </div>
          <div className="h-[468px] w-80 rounded-21xl bg-gray-400 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[43px] pr-[30px] pl-10 box-border relative gap-[191px] text-left">
            <div className="self-stretch h-[150px] flex flex-col items-start justify-start gap-[30px]">
              <b className="w-[190px] h-[54px] relative capitalize inline-block mq450:text-base">
                <p className="m-0">Mentorship by our</p>
                <p className="m-0">experts</p>
              </b>
              <div className="self-stretch flex-1 relative text-base capitalize whitespace-pre-wrap">
                Take advantage of our mentorship exeprts and gain industry
                relevant feedback.
              </div>
            </div>
            <div className="h-11 absolute my-0 mx-[!important] top-[379px] left-[240px] text-13xl capitalize font-semibold inline-block mq450:text-lgi mq750:text-7xl">
              02
            </div>
          </div>
          <div className="h-[468px] w-80 rounded-21xl bg-gray-400 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[43px] pr-[45px] pl-10 box-border relative gap-[191px] text-left">
            <div className="self-stretch h-[172px] flex flex-col items-start justify-start gap-[30px]">
              <b className="w-[184px] h-[54px] relative capitalize inline-block mq450:text-base">
                <p className="m-0">Widely applicable</p>
                <p className="m-0">skills</p>
              </b>
              <div className="self-stretch flex-1 relative text-base capitalize">
                <p className="m-0">Acadomv designed to</p>
                <p className="m-0">qivo vou o solid toundot;on ond</p>
                <p className="m-0">boost your qto•Mh,</p>
              </div>
            </div>
            <div className="h-11 absolute my-0 mx-[!important] top-[379px] left-[240px] text-13xl capitalize font-semibold inline-block mq450:text-lgi mq750:text-7xl">
              03
            </div>
          </div>
          <div className="h-[468px] w-80 rounded-21xl bg-gray-400 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[43px] pr-[25px] pl-10 box-border relative gap-[191px]">
            <div className="self-stretch h-[145px] flex flex-col items-start justify-start gap-[30px]">
              <b className="h-[27px] relative capitalize inline-block mq450:text-base">
                Street cred
              </b>
              <div className="self-stretch flex-1 relative text-base capitalize text-left">
                <p className="m-0">Upon comptetion you will</p>
                <p className="m-0">
                  recieve a certificate verifying your new skills
                </p>
                <p className="m-0">new</p>
              </div>
            </div>
            <div className="h-11 absolute my-0 mx-[!important] top-[379px] left-[240px] text-13xl capitalize font-semibold text-left inline-block mq450:text-lgi mq750:text-7xl">
              04
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop;
