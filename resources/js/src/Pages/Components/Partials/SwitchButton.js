import React from "react";
import StarPattern from "../../Patterns/StarPattern";

export default function SwitchButton() {
    return (
        <div className="switch-button-content">
            <div className="switch-button">
                <div className="stars-svg-container">
                    <StarPattern fill="#ffc10787" top="-2px" right="1%" />
                    <StarPattern fill="#ffc10787" top="22px" right="18%" rotate="90" />
                    <StarPattern fill="#ffc10787" top="-16px" right="56%" />
                    <StarPattern fill="#ffc10787" top="-5px" right="83%" />
                    <StarPattern fill="#ffc10787" top="24px" right="62%" rotate="70" />
                    <StarPattern fill="#ffc10787" top="10px" right="12%" />
                    <StarPattern fill="#ffc10787" top="18px" right="90%" />


                    <StarPattern fill="#fff" top="10px" right="90%" width="10px" />
                    <StarPattern fill="#fff" top="20" right="1%" width="10px" />
                    <StarPattern fill="#fff" top="35px" right="42%" width="10px" />
                    <StarPattern fill="#fff" top="0px" right="10%" width="10px" />

                </div>

                <span>Moon Knight</span>
            </div>
        </div>
    );
}
