import { css } from "@microsoft/fast-element";

export const colorPickerStyles = css`
    .root .colorUI {
        display: none;
        padding: 2px;
        flex-direction: row;
        background-color: var(--neutral-layer-floating);
        border: calc(var(--outline-width) * 1px) solid var(--neutral-outline-rest);
        border-radius: calc(var(--corner-radius) * 1px);
    }

    .root.open .colorUI {
        display: flex;
        position: absolute;
        z-index: 1;
        margin-left: -32px;
    }

    .pickerContainer {
        margin: 4px 6px 4px 4px;
    }

    .inputContainer {
        width: 65px;
        margin: 0 4px 4px 0;
    }

    .satLightPicker {
        position: relative;
        width: 200px;
        height: 200px;
        margin-bottom: 17px;
        background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%),
            linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
        background-color: #f00;
        border: 1px solid #fff;
    }

    .satLightLocation {
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #fff;
        border-radius: 3px;
        width: 4px;
        height: 4px;
        pointer-events: none;
    }

    .huePicker {
        position: relative;
        width: 200px;
        height: 30px;
        margin-bottom: 17px;
        border: 1px solid #fff;
        background: linear-gradient(
            to right,
            #f00 0%,
            #ff0 16.66%,
            #0f0 33.33%,
            #0ff 50%,
            #00f 66.66%,
            #f0f 83.33%,
            #f00 100%
        );
    }

    .hueLocation,
    .alphaLocation {
        position: absolute;
        left: 0;
        top: -2px;
        border: 1px solid #fff;
        width: 1px;
        height: 32px;
        pointer-events: none;
        margin-left: 1px;
    }

    .alphaPicker {
        position: relative;
        width: 200px;
        height: 30px;
        border: 1px solid #fff;
        background-image: linear-gradient(45deg, #999 25%, transparent 25%),
            linear-gradient(-45deg, #999 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #999 75%),
            linear-gradient(-45deg, transparent 75%, #999 75%);
        background-size: 20px 20px;
        background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        background-color: #fff;
    }

    .alphaMask {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right, transparent, #f00);
        margin-bottom: 5px;
    }

    .selectedColor {
        position: relative;
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-top: auto;
        margin-bottom: auto;
        border: 1px solid var(--fast-tooling-l1-color, #333333);
    }

    .selectedColor::before {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image: linear-gradient(
            to bottom left,
            transparent calc(50% - 1px),
            var(--fast-tooling-l1-color, #333333),
            transparent calc(50% + 1px)
        );
    }

    .selectedColor::after {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: var(--selected-color-value);
    }
`;
