import { createGlobalStyle } from 'styled-components'
import { fonts, breakpoints } from './css-config'

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  height: 100%;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  font-size: 16px;

  @media(${breakpoints.medium}) {
    font-size: 18px;
  }

  @media(${breakpoints.extra}) {
    font-size: 20px;
  }
}

body {
  height: 100%;
  margin: 0;
  font-family: ${fonts.main};
}

div#__next {
  height: 100%;
}

hr {
  height: 0;
}


abbr[title] {
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp,
pre {
  font-family:
    ui-monospace,
    SFMono-Regular,
    Consolas,
    'Liberation Mono',
    Menlo,
    monospace;
  font-size: 1em;
}

/**
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
1. Remove the inheritance of text transform in Firefox.
*/

button,
select { /* 1 */
  text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
Restore the focus styles unset by the previous rule.
*/

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
  padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

`
export default GlobalStyles
