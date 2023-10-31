import React from 'react';
import './Footer.css'
import '../../../node_modules/boxicons/css/boxicons.min.css'
export default function Footer() {
    return (
        <footer id="footer">
            <h1 class="text-center">Rotary Cutlery Bank</h1>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ab?</p>
            <div class="icons text-center">
            
                <i class="bx bxl-twitter"></i>
                <i class="bx bxl-facebook"></i>
                <i class="bx bxl-google"></i>
                <i class="bx bxl-skype"></i>
                <i class="bx bxl-instagram"></i>
            </div>
            <div class="copyright text-center">
                &copy; Copyright <strong><span>RSL Solution</span></strong>. All Rights Reserved
            </div>
            <div class="credite text-center">
                Designed By <a href="#">Developer</a>
            </div>
        </footer>
    );
}
