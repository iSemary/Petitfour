import React, { useEffect, useRef, useState } from "react";
import StarPattern from "../../Patterns/StarPattern";
import AxiosConfig from "../../../config/AxiosConfig";
import TransitionSound from "../../../assets/sounds/moon-night-transition-sound-effect.mp3";
import soundtrackSound from "../../../assets/sounds/hesham-nazih-moon-knight.mp3";
import { TbArrowBackUp } from "react-icons/tb";
export default function SwitchButton() {
    const theme = localStorage.getItem("theme") === "true";
    const [isPlayingTransition, setIsPlayingTransition] = useState(false);
    const [isPlayingSoundtrack, setIsPlayingSoundtrack] = useState(false);
    const [isSoundTrackEnd, setIsSoundTrackEnd] = useState(false);
    const [scrollingDown, setScrollingDown] = useState(false);

    const transitionRef = useRef(null);
    const soundtrackRef = useRef(null);

    const handleTransitionEnded = (e) => {
        setIsPlayingTransition(false);
        setIsPlayingSoundtrack(theme === true);
        setScrollingDown(theme === true);

        if (theme === true) scrollToDown();
    };

    const handleSoundtrackEnded = (e) => {
        setIsPlayingSoundtrack(false);
        setIsSoundTrackEnd(true);
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
        setTimeout(function () {
            if (theme === true) {
                returnOriginalStyles();
            }
        }, 500);
    };

    const stopCodeFlashing = () => {
        clearInterval(codeFlashingInterval);
        document.getElementById("themeTransitionContainer").style.display =
            "none";
    };

    const blurPage = () => {
        document.body.style.filter = "blur(10px)";
    };

    const returnOriginalStyles = () => {
        document.body.classList.remove("pharaoh-mode");
    };

    const scrollToDown = () => {
        let speed = 5; // 1 - Fast | 2 - Medium | 3 - Slow
        let interval = speed * 5;

        function startScroll() {
            let id = setInterval(function () {
                window.scrollBy(0, 2);
                if (
                    window.innerHeight + window.scrollY >=
                    document.body.offsetHeight
                ) {
                    // Reached end of page
                    stopScroll(id);
                }
            }, interval);
            return id;
        }

        function stopScroll(id) {
            clearInterval(id);
        }

        startScroll();
    };

    const switchTheme = (e) => {
        localStorage.setItem("theme", String(!theme));
        window.scrollTo(0, 0);
        // Count user theme request for analytics uses
        countUserThemeRequest();

        setIsPlayingTransition(true);

        blurPage();
        setTimeout(function () {
            startCodeFlashing();
        }, 500);
    };
    /**
     *
     * Scrolling
     *
     */

    if (isPlayingSoundtrack) {
        window.addEventListener("scroll", function (e) {
            if (window.scrollY < 340) {
                maskImage(document.getElementById("siteLogo"), 2000, 10, false);
                setTimeout(() => {
                    document.getElementById("siteLogo").src = document
                        .getElementById("siteLogo")
                        .getAttribute("data-theme-logo");
                    maskImage(
                        document.getElementById("siteLogo"),
                        2000,
                        10,
                        true
                    );
                }, 2000);
            }
            if (window.scrollY >= 340 && window.scrollY <= 760) {
            }
        });
    }

    // This function uses -webkit-mask-image to make a smooth fade out animation from left to right
    function maskImage(element, time, interval, reverse) {
        if (
            (element.classList.contains("animation-in-progress") ||
                element.classList.contains("animation-ended")) &&
            reverse === false
        ) {
            return false;
        }
        if (element.classList.contains("animation-reverse-ended")) {
            return false;
        }

        element.classList.add("animation-in-progress");
        element.style.webkitMaskImage = `linear-gradient(270deg, black 120%, transparent 120%)`;

        var timeExecuted = 0;
        var timeInterval = interval;

        var maxFrom, maxTo, currentFrom, currentTo;

        if (reverse) {
            maxFrom = 120;
            maxTo = 120;
            currentFrom = -80;
            currentTo = 0;
        } else {
            maxFrom = -80;
            maxTo = 0;
            currentFrom = 120;
            currentTo = 120;
        }

        let maskInterval = setInterval(() => {
            timeExecuted = timeExecuted + timeInterval;

            if (timeExecuted >= time) {
                element.classList.remove("animation-in-progress");
                element.classList.add("animation-ended");
                if (reverse) {
                    element.classList.add("animation-reverse-ended");
                }
                clearInterval(maskInterval);
                return false;
            }
            if (currentFrom !== maxFrom) {
                currentFrom = reverse ? currentFrom + 2 : currentFrom - 2;
            }

            if (currentTo !== maxTo) {
                reverse ? currentTo++ : currentTo--;
            }

            element.style.webkitMaskImage = `linear-gradient(270deg, black ${currentFrom}%, transparent ${currentTo}%)`;
        }, timeInterval);
    }

    useEffect(() => {
        if (isSoundTrackEnd) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            document.body.classList.add("pharaoh-mode");
        }
    }, [isSoundTrackEnd]);

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
            {/* Scrolling Down
            {scrollingDown && <ScrollToDown />} */}
        </>
    );
}
