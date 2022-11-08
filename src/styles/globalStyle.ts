import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

:root{
    --color-black:#242222;
    --color-gray: #EEEEEE;
    --color-white: #fff;
    --color-placeholder: #8A8787;
	
    --color-salmon: #ff5757;
	--color-green: #3FE864;

	--toastify-color-dark: var(--color-black);
    --toastify-color-error: var(--color-salmon);
    --toastify-color-success: var(--color-green);
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, p, blockquote, pre,
a, em, img,  samp,
small, strike, b, sub, sup, var,
b, u, i, center,  ol, ul, li,
fieldset, form, label,
table, caption, article, aside,
figure, figcaption, footer, header,
nav, output, section, time, audio, video, button {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	vertical-align: baseline;
	font-family: 'Inter', sans-serif;
	text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, figcaption, figure,
footer, header, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

img{
	max-width: 100%;
}

input{
	outline: none;
}

::-webkit-scrollbar {
    height: 5px;
    width: 5px;
}

::-webkit-scrollbar-track {
    background-color: var(--color-placeholder);
}

::-webkit-scrollbar-thumb {
    background-color: var(--color-salmon);
}

#root {
	width: 100%;
	max-width: 100%;
}
`;
