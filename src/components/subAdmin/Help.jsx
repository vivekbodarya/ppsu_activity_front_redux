import help2 from '../assets/img/help2.png'
import vb from '../assets/img/about/VB.png'
const Help = () => {
    return (
        <>
            <div className="help_bgImg help_section pb-5 pb-5">
                <div className="container main_container mt-5 ">

                    <section id="hero" class="d-flex align-items-center">
                        <div class="container-fluid" data-aos="fade-up">
                            <div class="row justify-content-center">
                                <div class="col-xl-6 col-lg-6 pt-3 pt-lg-0 d-flex flex-column justify-content-center">
                                    <h4 className="mt-5 help_center">Hey👋,</h4>
                                    <h4 className=" help_center">Welcome to the Help center</h4>
                                    <h1>Bettter Digital Experience With PPSU</h1>
                                    <h2>We are providing help for you.</h2>
                                    <div><a href="#about" class="btn-get-started scrollto">How to use?</a></div>
                                </div>
                                <div class="col-xl-5 col-lg-6 hero-img mt-5" data-aos="zoom-in" data-aos-delay="150">
                                    <img src={help2} class="img-fluid animated" alt="ppsu" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="help_card mb-5" id='about'>
                        <div className="row mb-5 pb-4 pt-4 justify-content-center">
                            <div className="nav flex-column nav-pills flex-column flex-sm-row" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link active left_panel" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                                <a className="nav-link left_panel" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Activity</a>
                                <a className="nav-link left_panel" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">System</a>
                                <a className="nav-link left_panel" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                            </div>
                        </div>
                        {/* <div className="row"> */}
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                                <section id="team" className="team section-bg">
                                    <div className="container mb-5">

                                        <div className='row mb-5 text-center justify-content-center'>
                                            <div className="section-title" data-aos="fade-up">
                                                <h2>Team</h2>
                                                <p>Web Design & Development</p>
                                            </div>
                                        </div>

                                        <div className="row text-center justify-content-center">


                                            <div className="col-lg-3 col-md-6 profile text-center">
                                                <div className='img-box'>
                                                    <img src={vb} className="img-fluid" alt="" width={200} />
                                                    <ul>
                                                        <a href=""><li><i className="bi bi-twitter"></i></li></a>
                                                        <a href=""><li><i className="bi bi-twitter"></i></li></a>
                                                        <a href=""><li><i className="bi bi-twitter"></i></li></a>
                                                    </ul>
                                                </div>
                                                <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                                    <div className="member-info">
                                                        <h4>Vivek Bodarya</h4>
                                                        <span>Web Designer and Developer</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 profile text-center">
                                                <div className='img-box'>
                                                    <img src={vb} className="img-fluid" alt="" width={200} />
                                                    <ul>
                                                        <a href=""><li><i className="bi bi-twitter"></i></li></a>
                                                        <a href=""><li><i className="bi bi-twitter"></i></li></a>
                                                        <a href=""><li><i className="bi bi-twitter"></i></li></a>
                                                    </ul>
                                                </div>

                                                <div className="member mt-4 ml-0 mr-0" data-aos="fade-up" data-aos-delay="100">
                                                    <div className="member-info" style={{ borderRadius: '30px' }}>
                                                        <h4>Garvit Dhameliya</h4>
                                                        <span>Web Developer</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 profile text-center">
                                                <div className='img-box'>
                                                    <img src={vb} className="img-fluid" alt="" width={200} />
                                                    <ul>
                                                        <a href=""><li><i className="bi bi-twitter"></i></li></a>
                                                        <a href=""><li><i className="bi bi-twitter"></i></li></a>
                                                        <a href=""><li><i className="bi bi-twitter"></i></li></a>
                                                    </ul>
                                                </div>
                                                <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                                    <div className="member-info" style={{ borderRadius: '30px' }}>
                                                        <h4>Nirav Moradiya</h4>
                                                        <span>Web Developer</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 profile text-center">
                                                <div className='img-box'>
                                                    <img src={vb} className="img-fluid" alt="" width={200} />
                                                    <ul>
                                                        <a href=""><li><i className="bi bi-twitter"></i></li></a>
                                                        <a href=""><li><i className="bi bi-twitter"></i></li></a>
                                                        <a href=""><li><i className="bi bi-twitter"></i></li></a>
                                                    </ul>
                                                </div>
                                                <div className="member mt-4 ml-1  mr-1 " data-aos="fade-up" data-aos-delay="100">
                                                    <div className="member-info" style={{ borderRadius: '30px' }}>
                                                        <h4>Krish Moradiya</h4>
                                                        <span>Nothing..</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                                    <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                        <div className="member-img">
                                                            <img src="https://d2sxpk1n4exfl4.cloudfront.net/plans/1d6eb59c-c41a-4487-b899-046addabdfb6.jpg" className="img-fluid" alt="" />
                                                            <div className="social">
                                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                                <a href=""><i className="bi bi-linkedin"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="member-info">
                                                            <h4>William Anderson</h4>
                                                            <span>CTO</span>
                                                        </div>
                                                    </div>
                                                </div> */}

                                            {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                                    <div className="member" data-aos="fade-up" data-aos-delay="400">
                                                        <div className="member-img">
                                                            <img src="https://d2sxpk1n4exfl4.cloudfront.net/plans/1d6eb59c-c41a-4487-b899-046addabdfb6.jpg" className="img-fluid" alt="" />
                                                            <div className="social">
                                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                                <a href=""><i className="bi bi-linkedin"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="member-info">
                                                            <h4>Amanda Jepson</h4>
                                                            <span>Accountant</span>
                                                        </div>
                                                    </div>
                                                </div> */}

                                        </div>

                                    </div>
                                </section>
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...2</div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">..3.</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">..4.</div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Help