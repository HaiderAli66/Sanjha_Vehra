import React from 'react'
import "./Home.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import img_one from "../assets/pic_1.jpg"
import img_tow from "../assets/about_krtar.jpg"
import img_three from "../assets/pic_3.jpg"
import img_four from "../assets/cheter.jpg"
import img_five from "../assets/pic_2.jpg"
import mission_logo from "../assets/mission.png"
import vission_logo from "../assets/vission.png"
import All_heading from '../All_heading/All_heading';
import Latest_event from '../Latest_event/Latest_event';
// import sanjha_point from '../assets/#Mela_Baba_Bulleh_Shah.mp4'
// import sanjha_poster from '../assets/pic_1.jpg'

function Home(props) {
    return (
        <div className='container-fluid '>
            <div className="row justify-content-center">
                <div className="col-lg-12 col-sm-12 p-0">
                    <div className="slide_outer_layer">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            breakpoints={{
                                300: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 1,
                                    spaceBetween: 70,
                                },
                            }}
                            modules={[Autoplay, Navigation]}
                            loop={true}
                            // autoplay={true}
                            navigation={true}
                            className="mySwiper"
                        >
                            <SwiperSlide className='silde_upr'>
                                <img src={img_four} alt="" className=' pic_styl' />
                            </SwiperSlide>
                            <SwiperSlide className='silde_upr'>
                                <img src={img_tow} alt="" className=' pic_styl' />
                            </SwiperSlide>
                            <SwiperSlide className='silde_upr'>
                                <img src={img_one} alt="" className=' pic_styl' />
                            </SwiperSlide>
                            <SwiperSlide className='silde_upr'>
                                <img src={img_four} alt="" className=' pic_styl' />
                            </SwiperSlide>
                            <SwiperSlide className='silde_upr'>
                                <img src={img_five} alt="" className=' pic_styl' />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="mission_outer_layer row py-5">
                <All_heading head="Our Mission & Vision" />
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-6 p-0">
                    <div className='mission_back_tone py-5' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
                        <img src={mission_logo} alt="" className='msion_img_sty' />
                        <h3 className='aim'>MISSION</h3>
                        <p className='pera_styl text-center'>Sanjha vehra mission is to work for a democratic and egalitarian society through arts-based initiatives. It is working to create young trained theatre activists, writers, media professionals and social activists, who can strengthen the forces of social change and progress. It is ready to fight gender and minority discrimination, environmental degradation, promotes cultural awareness and heritage preservation. It works in collaboration with like-minded cultural and human rights organizations for the cause of freedom of artistic and cultural expression.</p>
                    </div>
                </div>

                <div className="col-lg-6 p-0">
                    <div className='vision_back_tone' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                        <img src={vission_logo} alt="" className='vision_img_sty' />
                        <h3 className='aim'>VISION</h3>
                        <p className='pera_styl text-center'>Sanjha vehra envisions a society and world based on universal values of justice, human dignity and human rights. It hopes that Pakistan will be at peace with its neighbours and with its own disadvantaged and disenfranchised groups. It is free of violence, bigotry, class and gender discrimination.</p>
                    </div>
                </div>
            </div>

            <div className='my-5 '>
                <iframe className='intro_bx_layer' src="https://www.youtube.com/embed/n7enZ4Vx5cY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className='row'>
                <Latest_event />
            </div>

        </div>
    )
}

export default Home
