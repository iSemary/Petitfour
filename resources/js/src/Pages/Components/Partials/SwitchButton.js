import React, { useRef, useState } from "react";
import StarPattern from "../../Patterns/StarPattern";
import AxiosConfig from "../../../config/AxiosConfig";
import TransitionSound from "../../../assets/sounds/moon-night-transition-sound-effect.mp3";
import soundtrackSound from "../../../assets/sounds/hesham-nazih-moon-knight.mp3";
import { TbArrowBackUp } from "react-icons/tb";

export default function SwitchButton() {
    const theme = localStorage.getItem("theme") === "true";
    const [isPlayingTransition, setIsPlayingTransition] = useState(false);
    const [isPlayingSoundtrack, setIsPlayingSoundtrack] = useState(false);

    const transitionRef = useRef(null);
    const soundtrackRef = useRef(null);

    const handleTransitionEnded = (e) => {
        setIsPlayingTransition(false);
        setIsPlayingSoundtrack(theme === true);
    };

    const handleSoundtrackEnded = (e) => {
        setIsPlayingSoundtrack(false);
    };

    const countUserThemeRequest = (e) => {
        const requestDetails = {
            theme_type: localStorage.getItem("theme"),
            device_type: navigator.platform,
            device_details: navigator.userAgent,
            view_type: document
                .querySelector('meta[name="view-type"]')
                .getAttribute("content"),
        };

        AxiosConfig.post(`/count-theme`, requestDetails).catch((error) => {
            console.log(error);
        });
    };

    var codeFlashingInterval;

    // 3s sound
    const startCodeFlashing = (e) => {
        setTimeout(function () {
            document.getElementById("themeTransitionContainer").style.display =
                "block";
        }, 500);

        var glitchDiv = document.getElementById("glitchedText");
        var pharaohDiv = document.getElementById("pharaohContainer");

        clearInterval(codeFlashingInterval);
        var counter = 0;

        codeFlashingInterval = setInterval(function () {
            if (counter === 0) {
                document.body.style.filter = "blur(0)";
            }
            glitchDiv.style.display =
                glitchDiv.style.display === "none" ? "block" : "none";
            pharaohDiv.style.display =
                glitchDiv.style.display === "none" ? "block" : "none";
            counter++;
            if (counter === 8) {
                stopCodeFlashing();
            }
        }, 350);
    };

    const stopCodeFlashing = () => {
        clearInterval(codeFlashingInterval);
        document.getElementById("themeTransitionContainer").style.display =
            "none";
    };

    const blurPage = () => {
        document.body.style.filter = "blur(10px)";
    };

    const switchTheme = (e) => {
        localStorage.setItem("theme", String(!theme));
        // Count user theme request for analytics uses
        countUserThemeRequest();

        

        setIsPlayingTransition(true);

        blurPage();
        setTimeout(function () {
            startCodeFlashing();
        }, 500);
    };

    return (
        <>
            <div
                data-aos="zoom-in"
                className="switch-button-content"
                onClick={(e) => switchTheme()}
            >
                {/* Switch button */}
                {/* theme equals false, then show the switch to theme button */}
                {!theme && (
                    <div className="switch-button">
                        <div className="stars-svg-container">
                            <StarPattern
                                fill="#ffc10787"
                                top="-2px"
                                right="1%"
                            />
                            <StarPattern
                                fill="#ffc10787"
                                top="22px"
                                right="18%"
                                rotate="90"
                            />
                            <StarPattern
                                fill="#ffc10787"
                                top="-16px"
                                right="56%"
                            />
                            <StarPattern
                                fill="#ffc10787"
                                top="-5px"
                                right="83%"
                            />
                            <StarPattern
                                fill="#ffc10787"
                                top="24px"
                                right="62%"
                                rotate="70"
                            />
                            <StarPattern
                                fill="#ffc10787"
                                top="10px"
                                right="12%"
                            />
                            <StarPattern
                                fill="#ffc10787"
                                top="18px"
                                right="90%"
                            />

                            <StarPattern
                                fill="#fff"
                                top="10px"
                                right="90%"
                                width="10px"
                            />
                            <StarPattern
                                fill="#fff"
                                top="20"
                                right="1%"
                                width="10px"
                            />
                            <StarPattern
                                fill="#fff"
                                top="35px"
                                right="42%"
                                width="10px"
                            />
                            <StarPattern
                                fill="#fff"
                                top="0px"
                                right="10%"
                                width="10px"
                            />
                        </div>
                        <span>Moon Knight</span>
                    </div>
                )}
                {/* theme equals true, then show the return back button */}
                {theme && (
                    <div className="switch-button default">
                        <TbArrowBackUp size={30} />
                        <span>Return Back</span>
                    </div>
                )}
            </div>
            {/* Transition Sound */}
            {isPlayingTransition && (
                <audio
                    autoPlay
                    ref={transitionRef}
                    src={TransitionSound}
                    type="audio/mp3"
                    onEnded={handleTransitionEnded}
                ></audio>
            )}
            {/* Soundtrack */}
            {isPlayingSoundtrack && (
                <audio
                    autoPlay
                    ref={soundtrackRef}
                    src={soundtrackSound}
                    type="audio/mp3"
                    onEnded={handleSoundtrackEnded}
                ></audio>
            )}
        </>
    );
}
