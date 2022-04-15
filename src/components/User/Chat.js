import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import chat from '../images/chat1.png'
import Navbar from './NavbarUser'
import cssModules from '../../css/chat.module.css';

function Chat() {
    return (
        <div class="container-fluid text-light">
            <Navbar />
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div class={`col-3 kiri ${cssModules.kiri}`}>
                            <div class={`gambar1 d-flex flex-column ${cssModules.gambar1}`}>
                                <div class="baris1 d-flex">
                                    <img src={chat} class="img-fluid" alt="" />
                                    <div class={`chat d-flex flex-column ${cssModules.chat}`}>
                                        <h4>Farhan</h4>
                                        <p>Halo, can you help me?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class={`col-9 kanan d-flex align-items-center flex-column-reverse ${cssModules.kanan}`}>
                            <form style={{ width: '800px' }}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label"></label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Send Message" />
                                </div>
                            </form>
                            <div class="chat2 align-self-start">
                                <div class={`gambar1 d-flex flex-column-reverse ${cssModules.gambar1}`}>
                                    <div class="baris1 d-flex">
                                        <img src={chat} class="img-fluid" alt="" />
                                        <div class={`chat d-flex flex-column ${cssModules.chat}`}>
                                            <h4>Farhan</h4>
                                            <p>Halo, can you help me?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="chat3 align-self-end me-5">
                                <div class={`gambar1 d-flex flex-column-reverse ${cssModules.gambar1}`}>
                                    <div class="baris1 d-flex mt-3">
                                        <img src={chat} class="img-fluid" alt="" />
                                        <div class={`chat d-flex flex-column ${cssModules.chat}`}>
                                            <h4>Farhan</h4>
                                            <p>Halo, can you help me?</p>
                                        </div>
                                    </div>
                                    <div class="baris1 d-flex">
                                        <img src={chat} class="img-fluid" alt="" />
                                        <div class={`chat d-flex flex-column ${cssModules.chat}`}>
                                            <h4>Farhan</h4>
                                            <p>Halo, can i help you?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
