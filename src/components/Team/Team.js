import Team1 from '../../assets/images/img-1.png'
import Team2 from '../../assets/images/img-2.png'
import Team3 from '../../assets/images/img-3.png'

export const Team = () => {


    return (
        <>
            <section id="team" class="background d-flex align-items-center flex-column justify-content-center" style={{minHeight:"100vh"}} >
                <img src="assets/images/bg-8.webp" class="bg-1" loading="lazy"/>

                    <div class="center-heading mb-5 ">OUR TEAM</div>
                    <div class="row mx-0 justify-content-center">
                    </div>
                    <div class="container mt-lg-5 ">
                        <div class="row  mx-0">
                            <div class="col-lg-4 p-lg-4 pt-5 mt-5 p-3 col-12">
                                <div class="card-1 d-flex flex-column align-items-center justify-content-end ">
                                    <img  style={{borderRadius:"50%",Height:"180px"}} src={Team1} class="card-image" loading="lazy"/>
                                        <span class="fw-600 fs-5 text-center">Tomato Cultivator @tomatocultivato</span>
                                        <span class="fw-300 text-center p-4 pt-2 fs-7 pb-3"> PLATFORM DEVELOPMENT &amp; MANAGEMENT</span>
                                </div>
                            </div>
                            <div class="col-lg-4 p-lg-4 pt-5 mt-5 p-3 col-12">
                                <div class="card-1 d-flex flex-column align-items-center justify-content-end ">
                                    <img  style={{borderRadius:"50%",Height:"180px"}} src={Team2} class="card-image" loading="lazy"/>
                                        <span class="fw-600 fs-5 text-center">Tomato Cultivator @tomatocultivato</span>
                                        <span class="fw-300 text-center p-4 pt-2 fs-7 pb-3"> PLATFORM DEVELOPMENT &amp; MANAGEMENT</span>
                                </div>
                            </div>
                            <div class="col-lg-4 p-lg-4 pt-5 mt-5 p-3 col-12">
                                <div class="card-1 d-flex flex-column align-items-center justify-content-end ">
                                    <img  style={{borderRadius:"50%",Height:"180px"}} src={Team3} class="card-image" loading="lazy"/>
                                        <span class="fw-600 fs-5 text-center">Tomato Cultivator @tomatocultivato</span>
                                        <span class="fw-300 text-center p-4 pt-2 fs-7 pb-3"> PLATFORM DEVELOPMENT &amp; MANAGEMENT</span>
                                </div>
                            </div>
                        </div>
                    </div>

            </section>
        </>
    )
}
