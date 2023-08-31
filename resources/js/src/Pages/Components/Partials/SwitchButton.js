import React, { useEffect, useRef, useState } from "react";
import StarPattern from "../../Patterns/StarPattern";
import AxiosConfig from "../../../config/AxiosConfig";
import TransitionSound from "../../../assets/sounds/moon-night-transition-sound-effect.mp3";
import soundtrackSound from "../../../assets/sounds/hesham-nazih-moon-knight.mp3";
import { TbArrowBackUp } from "react-icons/tb";
import styleVariables from "../../../assets/styles/variables/variables.module.scss";

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
        if (theme === true) {
            switchTopContent();
            setTimeout(() => {
                scrollToDown();
            }, 3000);
        }
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

        setTimeout(function () {
            if (theme === true) {
                changeVideosSource(theme);
                document.getElementById("siteLogo").src = document
                    .getElementById("siteLogo")
                    .getAttribute("data-logo");
            }
        }, 1000);
    };

    /**
     * The function checks if an element is currently visible within the viewport.
     * @param element - The `el` parameter represents the element that you want to check if it is in the
     * viewport.
     * @returns a boolean value indicating whether or not the specified element is currently within the
     * viewport.
     */
    function isElementInViewport(element) {
        const position = element.getBoundingClientRect();
        // checking whether fully visible OR partial visibility
        return (
            (position.top >= 0 && position.bottom <= window.innerHeight) ||
            (position.top < window.innerHeight && position.bottom >= 0)
        );
    }

    function changeVideosSource(theme) {
        const videoContainer = document.querySelector(".videos-container");
        const videos = videoContainer.querySelectorAll("video");

        // Get the new video sources from data attributes
        const firstDefaultSource =
            videoContainer.getAttribute("data-first-default");
        const secondDefaultSource = videoContainer.getAttribute(
            "data-second-default"
        );
        const firstThemeSource =
            videoContainer.getAttribute("data-first-theme");
        const secondThemeSource =
            videoContainer.getAttribute("data-second-theme");

        // Update the source for the first video
        videos[0].querySelector("source").src = theme
            ? firstDefaultSource
            : firstThemeSource;
        videos[0].load(); // Load the new source

        // Update the source for the second video
        videos[1].querySelector("source").src = theme
            ? secondDefaultSource
            : secondThemeSource;
        videos[1].load(); // Load the new source

        videos[0].style.display = "block";
        videos[1].style.display = "none";
    }

    /**
     *
     * Scrolling Scripts
     *
     */

    function switchTopContent() {
        // Logo Fade out
        maskImage(document.getElementById("siteLogo"), 2000, 10, false);
        // Top Videos Fade out
        maskImage(document.querySelector(".top-home-videos"), 2000, 10, false);
        // Gradient Text Fade Out
        maskImage(document.querySelector(".gradient-text"), 2000, 10, false);
        // Header links
        document.querySelector(
            ".main-nav .nav-links .links div a.active"
        ).style.color = styleVariables.themePrimaryColor;

        document
            .querySelector(".top-paragraph-word")
            .classList.add("pharaoh-span-color");

        setTimeout(() => {
            document.querySelector("body").style.backgroundColor =
                styleVariables.themePrimaryDark;
            document.querySelector(
                ".main-background-cover"
            ).style.backgroundColor = styleVariables.themePrimaryDark;
            // Change logo to fade in
            document.getElementById("siteLogo").src = document
                .getElementById("siteLogo")
                .getAttribute("data-theme-logo");

            maskImage(document.getElementById("siteLogo"), 2000, 5, true);
            // Change videos source
            changeVideosSource(false);
            // Change videos to fade in
            maskImage(
                document.querySelector(".top-home-videos"),
                2000,
                10,
                true
            );
            // Change Gradient Text to fade in
            document
                .querySelector(".gradient-text")
                .classList.add("pharaoh-gradient-text");
            maskImage(document.querySelector(".gradient-text"), 2000, 10, true);
        }, 2000);
    }

    function switchFeaturesSection() {
        let allFeatures = document.querySelectorAll(
            ".features-section .feature-item"
        );
        allFeatures.forEach((feature, i) => {
            setTimeout(() => {
                maskImage(feature, 2000, 10, false);
            }, 200 * (10 * i));
        });
        console.log("switchFeaturesSection");
    }
    function switchHighlightedSkillsSection() {
        console.log("switchHighlightedSkillsSection");
    }
    function switchTopProjectsSection() {
        console.log("switchTopProjectsSection");
    }
    function switchLatestExperienceSection() {
        console.log("switchLatestExperienceSection");
    }
    function switchSideSkillsSection() {
        console.log("switchSideSkillsSection");
    }
    function switchLatestBlogsSection() {
        console.log("switchLatestBlogsSection");
    }

    // Initialize the sections animated with null
    // var TopContentAnimated = false;
    var featuresAnimated = false;
    var highlightedSkillsAnimated = false;
    var topProjectsAnimated = false;
    var latestExperienceAnimated = false;
    var sideSkillsAnimated = false;
    var latestBlogsAnimated = false;

    function handleScroll() {
        // Top Home Page Switching
        // if (window.scrollY < 340 && !TopContentAnimated) {
        //     TopContentAnimated = true;
        //     switchTopContent();
        // }
        // Initialize the sections elements
        let featuresSection = document.querySelector(".features-section");
        let highlightedSkillsSection = document.querySelector(
            ".highlighted-skills-section"
        );
        let topProjectsSection = document.querySelector(
            ".top-projects-section"
        );
        let latestExperienceSection = document.querySelector(
            ".latest-experience-section"
        );
        let sideSkillsSection = document.querySelector(".side-skills-section");
        let latestBlogsSection = document.querySelector(
            ".latest-blogs-section"
        );

        if (isElementInViewport(featuresSection) && !featuresAnimated) {
            featuresAnimated = true;
            switchFeaturesSection();
        }
        if (
            isElementInViewport(highlightedSkillsSection) &&
            !highlightedSkillsAnimated
        ) {
            highlightedSkillsAnimated = true;
            switchHighlightedSkillsSection();
        }
        if (isElementInViewport(topProjectsSection) && !topProjectsAnimated) {
            topProjectsAnimated = true;
            switchTopProjectsSection();
        }
        if (
            isElementInViewport(latestExperienceSection) &&
            !latestExperienceAnimated
        ) {
            latestExperienceAnimated = true;
            switchLatestExperienceSection();
        }
        if (isElementInViewport(sideSkillsSection) && !sideSkillsAnimated) {
            sideSkillsAnimated = true;
            switchSideSkillsSection();
        }
        if (isElementInViewport(latestBlogsSection) && !latestBlogsAnimated) {
            latestBlogsAnimated = true;
            switchLatestBlogsSection();
        }
    }

    // if (isPlayingSoundtrack) {
    window.addEventListener("scroll", function () { 
        setTimeout(() => {
            handleScroll();
        }, 2500);
     });
    // }

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
                currentFrom = reverse ? currentFrom + 1 : currentFrom - 2;
            }

            if (currentTo !== maxTo) {
                currentTo = reverse ? currentTo + 2 : currentTo - 1;
            }
            element.style.webkitMaskImage = `linear-gradient(270deg, black ${currentFrom}%, transparent ${currentTo}%)`;
        }, timeInterval);
    }

    useEffect(() => {
        if (isSoundTrackEnd) {
            document.body.classList.add("pharaoh-mode");
            window.scrollTo({ top: 0, behavior: "smooth" });
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
