import styled, { css } from 'styled-components';

type LinkProps = {
   isActive: boolean;
}

export const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 3rem;
   height: 3.75rem;
   width: 100%;
   background: var(--color-white);
   box-shadow: 0 0 60px var(--color-shadow);
   background: linear-gradient(to right, var(--color-white) 1%, var(--color-background));

   nav {
      display: flex;
   }
`;

export const Link = styled.a<LinkProps>`
   width: 3.75rem;
   height: 3.75rem;
   display: flex;
   justify-content: center;
   align-items: center;
   border-bottom: 2px solid transparent;
   border-radius: 5px;
   color: var(--color-gray-line);

   ${(props) => props.isActive === true
      && css`
         border-bottom: 5px solid var(--color-primary);
         color: var(--color-primary);
   `}
`;