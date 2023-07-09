import { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Features from "./Components/Features";
import HighlightedSkills from "./Components/HighlightedSkills";
import TopProjects from "./Components/TopProjects";
import LatestExperience from "./Components/LatestExperience";
import SideSkills from "./Components/SideSkills";
import LatestBlogs from "./Components/LatestBlogs";
import SwitchButton from "./Components/Partials/SwitchButton";
import TrianglePattern from "../Pages/Patterns/TrianglePattern";
import CirclePattern from "../Pages/Patterns/CirclePattern";

function Home(props) {
    const positionTitleRef = useRef(null);

    const DummyCode = `!function(){var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t={945:function(e){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=(r(n(1)),n(6)),o=r(a),s=r(n(7)),l=r(n(8)),u=r(n(9)),c=r(n(10)),f=r(n(11)),d=r(n(14)),h=[],p=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return h=(0,f.default)(h,m),(0,c.default)(h,m.once),h},g=function(){h=(0,d.default)(),v()};e.exports={init:function(e){m=i(m,e),h=(0,d.default)();var t=document.all&&!window.atob;return function(e){return!0===e||"mobile"===e&&u.default.mobile()||"phone"===e&&u.default.phone()||"tablet"===e&&u.default.tablet()||"function"==typeof e&&!0===e()}(m.disable)||t?void h.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})):(m.disableMutationObserver||l.default.isSupported()||(console.info('      aos: MutationObserver is not supported on this browser,      code mutations observing has been disabled.      You may have to call "refreshHard()" by yourself.    '),m.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),"DOMContentLoaded"===m.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===m.startEvent?window.addEventListener(m.startEvent,(function(){v(!0)})):document.addEventListener(m.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,s.default)(v,m.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(v,m.debounceDelay,!0)),window.addEventListener("scroll",(0,o.default)((function(){(0,c.default)(h,m.once)}),m.throttleDelay)),m.disableMutationObserver||l.default.ready("[data-aos]",g),h)},refresh:v,refreshHard:g}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=f,r=d;return f=d=void 0,g=t,p=e.apply(r,n)}function o(e){var n=e-v;return void 0===v||n>=t||n<0||k&&e-g>=h}function l(){var e=w();return o(e)?u(e):void(m=setTimeout(l,function(e){var n=t-(e-v);return k?x(n,h-(e-g)):n}(e)))}function u(e){return m=void 0,S&&f?i(e):(f=d=void 0,p)}function c(){var e=w(),n=o(e);if(f=arguments,d=this,v=e,n){if(void 0===m)return function(e){return g=e,m=setTimeout(l,t),y?i(e):p}(v);if(k)return m=setTimeout(l,t),i(v)}return void 0===m&&(m=setTimeout(l,t)),p}var f,d,h,p,m,v,g=0,y=!1,k=!1,S=!0;if("function"!=typeof e)throw new TypeError(s);return t=a(t)||0,r(n)&&(y=!!n.leading,h=(k="maxWait"in n)?b(a(n.maxWait)||0,t):h,S="trailing"in n?!!n.trailing:S),c.cancel=function(){void 0!==m&&clearTimeout(m),g=0,f=v=d=m=void 0},c.flush=function(){return void 0===m?p:u(w())},c}function r(e){var t=void 0===e?"undefined":o(e);return!!e&&("object"==t||"function"==t)}function i(e){return"symbol"==(void 0===e?"undefined":o(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":o(e))}(e)&&y.call(e)==u}function a(e){if("number"==typeof e)return e;if(i(e))return l;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=d.test(e);return n||h.test(e)?p(e.slice(2),n?2:8):f.test(e)?l:+e}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",l=NaN,u="[object Symbol]",c=/^+|+$/g,f=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,h=/^0o[0-7]+$/i,p=parseInt,m="object"==(void 0===t?"undefined":o(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,g=m||v||Function("return this")(),y=Object.prototype.toString,b=Math.max,x=Math.min,w=function(){return g.Date.now()};e.exports=function(e,t,i){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError(s);return r(i)&&(a="leading"in i?!!i.leading:a,o="trailing"in i?!!i.trailing:o),n(e,t,{leading:a,maxWait:t,trailing:o})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e){var t=void 0===e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}function r(e){return"symbol"==(vo`;
    const Talisman = `The Enchanted Serpent Talisman is a mystical artifact forged in the fires of ancient sorcery. It is said to possess extraordinary powers that can bring protection and prosperity to its bearer. The talisman takes the form of a coiled serpent, intricately crafted from gleaming silver and adorned with mesmerizing emerald eyes. When held in one's hand, the talisman radiates an aura of enchantment, infusing the surroundings with an air of mysticism. Its energies are said to ward off evil forces and provide a shield of spiritual protection. The serpent's symbolism represents transformation and rebirth, offering the promise of renewal and growth to those who possess it. The Enchanted Serpent Talisman is believed to possess the ability to grant its owner heightened intuition and wisdom. It is said that by tapping into the talisman's power, one can gain clarity of thought and make wise decisions. Additionally, it is rumored that the talisman has the power to attract abundance and prosperity, opening doors to new opportunities and bringing forth luck and fortune. Legend has it that the talisman can reveal hidden truths and unlock secrets of the universe. Those who possess it may experience vivid dreams and heightened spiritual awareness. It is also said that the talisman can act as a conduit for communication with other realms, allowing its owner to connect with spiritual beings and receive guidance from beyond. However, the Enchanted Serpent Talisman is not to be taken lightly. Its powers are potent and must be handled with respect and caution. It is said that only those with pure intentions and a sincere heart can unlock the full potential of the talisman's magic. Whether used as a symbol of protection, a source of guidance, or a conduit to the supernatural, the Enchanted Serpent Talisman remains an enigmatic and revered artifact, shrouded in mystery and awaiting its destined owner.`;

    const animateHackText = (reference) => {
        const letters = "ABMNOPQRSTUVWXYZ&_~$[+_%+`@*@%+?$^";
        let interval = null;
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            if (reference?.current?.innerText) {
                reference.current.innerText = reference.current.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return reference.current.dataset.value[index];
                        }

                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if (iteration >= reference.current.dataset.value.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }
        }, 20);
    };

    useEffect(() => {
        setTimeout(() => {
            animateHackText(positionTitleRef);
        }, 1600);
    }, [props?.config?.config?.user?.position]);

    return (
        <>
            <div className="main-background-cover">
                <div className="blur-background">
                    <TrianglePattern
                        color={"#7455FF"}
                        top="5%"
                        right="20%"
                        rotate="45"
                        width="150"
                    />

                    <TrianglePattern
                        color={"#C229F4"}
                        top="0%"
                        right="30%"
                        rotate="45"
                        width="150"
                    />

                    <CirclePattern
                        color={"#0067ff"}
                        top="5%"
                        right="88%"
                        rotate="45"
                        width="150"
                    />

                    <CirclePattern
                        color={"#021F59"}
                        top="1%"
                        right="70%"
                        rotate="45"
                        width="150"
                    />
                </div>
                <Container className="top-content">
                    <Row>
                        <Col md={6}>
                            <div className="top-home-details">
                                <h1>
                                    <span className="gradient-text">
                                        {
                                            props?.config?.config?.user
                                                ?.first_name
                                        }
                                    </span>
                                    <br />
                                    <span>
                                        {props?.config?.config?.user?.last_name}
                                    </span>
                                </h1>
                                <h4
                                    ref={positionTitleRef}
                                    data-value={
                                        props?.config?.config?.user?.position
                                    }
                                    className="text-hack-animation width-fit-content"
                                    onMouseOver={() =>
                                        animateHackText(positionTitleRef)
                                    }
                                >
                                    {props?.config?.config?.user?.position}
                                </h4>
                                <p>{props?.config?.config?.user?.slogan}</p>
                            </div>
                            <div className="top-home-buttons">
                                <Row>
                                    <Col md={6}>
                                        <SwitchButton />
                                    </Col>
                                    <Col md={6}></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={6}>{/* Gif Graph  */}</Col>
                    </Row>
                </Container>
            </div>
            <div className="home-content">
                {/* <Container> */}
                <Features features={props?.config.features} />
                <HighlightedSkills
                    highlightedSkills={props?.config.highlighted_skills}
                />
                <TopProjects topProjects={props?.config.top_projects} />
                <LatestExperience
                    latestExperience={props?.config?.latest_experience}
                />
                <SideSkills sideSkills={props?.config.side_skills} />
                <LatestBlogs latestBlogs={props?.config?.latest_blogs} />
            </div>

            <div
                className="theme-transition-container"
                id="themeTransitionContainer"
            >
                <div className="glitched-text" id="glitchedText">
                    {DummyCode}
                </div>
                <div className="pharaoh-container">
                    <p>{Talisman + " " + Talisman + " " + Talisman}</p>
                </div>
            </div>
        </>
    );
}

export default Home;
