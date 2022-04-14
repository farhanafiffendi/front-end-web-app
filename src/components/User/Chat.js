import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import chat from '../images/chat1.png'
import Navbar from './NavbarUser'
import cssModules from '../../css/chat.module.css';

function Chat() {
    return (
        <div class="container-fluid">
            <Navbar />
            <div class="row">
                <div class="col-12">
                    <div class="row ">
                        <div class="col-lg-3">
                            <div class={cssModules.chatKiri}>
                                <div class={cssModules.pesan}>
                                    <img src={chat} class="img-fluid" alt="" />
                                    <h4>Admin</h4>
                                    <p>Yes, Is there anything I can help</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class={`chatKanan text-light d-flex justify-content-end flex-column align-items-start ${cssModules.chatKanan} `}>
                                <img src={chat} alt="" />
                                <h4>Admin</h4>
                                <p>Yes, Is there anything I can help</p>
                                <form style={{ width: '80%' }}>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label"></label>
                                        <input type="email" placeholder="Send Message" class="form-control"
                                            id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
