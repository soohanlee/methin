import { createGlobalStyle } from 'styled-components';
import './font.scss';

const GlobalStyle = createGlobalStyle`
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        font-size: 100%;
        vertical-align: baseline;
        font-size: 1.6rem;
        font-size: 16px;
        box-sizing: border-box;
    }

    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }

    html {
        font-size: 62.5%;
        cursor: default;
    }

    body {

        div {
            line-height: 1;
            &::-webkit-scrollbar-corner {
                background: transparent;
            }
            &::-webkit-scrollbar-thumb {
                background: ${(props) => props.theme.SCROLL};
                border-radius: 2rem;
            }
            &::-webkit-scrollbar {
                width: 0.5rem;
                height:0.5rem;
            }
            
            &::-webkit-scrollbar-track {
                background: transparent; 
            }

        }

        font-family: Noto Sans CJK KR, "Noto Sans CJK KR", 'NanumSquare', sans-serif;
        .normal		{ font-weight: 400 }
        .bold		{ font-weight: 700 }
        .bolder		{ font-weight: 800 }
        .light		{ font-weight: 300 }
        color: ${(props) => props.theme.TEXT_MAIN};
        height: 100vh;
        background: ${(props) => props.theme.BACKGROUND};
        font-size: 16px;
        font-size: 1.6rem;
        line-height: 1;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        overflow-x: hidden;
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    input, textarea {
        font-family: Noto Sans CJK KR, "Noto Sans CJK KR", 'NanumSquare', sans-serif;
        font-size: 1.6rem;

        &::placeholder {
            font-size: 1.6rem;
            font-family: Noto Sans CJK KR, "Noto Sans CJK KR", 'NanumSquare', sans-serif;
        }
    }

    input[type="password"] {
        font-family: "sans-serif";
    }

    textarea {
        padding-top: 0.5rem;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        text-decoration: inherit;
        color: inherit;
    }

    * {
        box-sizing: border-box;
        &:focus {outline:none !important}
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`;

export default GlobalStyle;
