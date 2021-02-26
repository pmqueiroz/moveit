import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
   margin: 0;
   padding: 0;
   border: none;
   outline: none;
   box-sizing: border-box;
}

*:focus {
   outline: none;
}

body {
   background: var(--color-background);
   font-family: 'Inter', sans-serif;
}

body, input, textarea, button {
   font: 400 1rem 'Inter';
}

button {
   cursor: pointer;
}

a {
   color: inherit;
   text-decoration: none;
}

::-webkit-scrollbar {
   width: 0.4rem;
}
::-webkit-scrollbar-track {
   background: transparent;
   border-radius: 0.5rem;
}
::-webkit-scrollbar-thumb {
   background: var(--color-primary);
   border-radius: 0.5rem;
}
::-webkit-scrollbar-corner { background: transparent; }

:root{
   --color-white: #FFFFFF;
   --color-primary: #5965E0;
   --color-primary-hover: #4953B8;
   --color-twitter: #2AA9E0;
   --color-secondary-green: #4CD62B;
   --color-secondary-red: #E83F5B;
   --color-background: #f2f3f5;
   --color-gray-line: #DCDDE0;
   --color-text-base: #666666;
   --color-text-title: #2E384D;
   --color-text-highlight: #B3B9FF;
   --color-shadow: rgba(0, 0, 0, 0.05);
}

@media (max-width: 1080px) {
   :root{
      font-size: 93.75%;
   }
}

@media (max-width: 720px) {
   :root{
      font-size: 87.5%;
   }
}
`;