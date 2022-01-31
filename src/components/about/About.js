import about1 from '../../assets/images/img-1.png'

export const About = () => {

  return (
    <>
      <section class="container mt-5 pt-lg-5" id="about" style={{minHeight:"100vh"}} >
        <div class="row align-items-center mx-0">
          <div class="col-lg-7 col-12 order-lg-1 order-2" style={{zIndex:"-1"}} >
            <div class=" p-4">
              <div class="p-3">
                <span>About Us</span>
                <h1 class=" fw-600 ">Lorem ipsum dolor sit amet.</h1>
                <p class="text-faded fs-7">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                  et
                  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                  Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-12 order-lg-2 order-1">
            <img src={about1} class="w-100 img-1 mb-lg-0 mb-4 rounded-3" style={{transform:"translate(-80px,-120px);"}}  alt=""/>
          </div>
        </div>
      </section>
    </>
  );
};
