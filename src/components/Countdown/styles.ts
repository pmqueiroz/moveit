import styled, { css } from 'styled-components';

interface ButtonProps {
   isActive: boolean;
   hasCompletedChallenge: boolean;
}

export const Container = styled.div`
   display: flex;
   align-items: center;
   font-family: Rajdhani;
   font-weight: 600;
   color: var(--color-text-title);

   & > div {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background: var(--color-white);
      box-shadow: 0 0 60px var(--color-shadow);
      border-radius: 5px;
      font-size: 8.5rem;
      text-align: center;

      span {
         flex: 1;
      }

      span:first-child {
         border-right: 1px solid #f0f1f3;
      }

      span:last-child {
         border-left: 1px solid #f0f1f3;
      }
   }

   & > span {
      font-size: 6.25rem;
      margin: 0 0.5rem;
   }
`;

export const ButtonContainer = styled.button<ButtonProps>`
   width: 100%;
   height: 5rem;
   margin-top: 2rem;

   display: flex;;
   align-items: center;
   justify-content: center;
   border: 0;
   border-radius: 5px;
   background: var(--color-primary);
   color: var(--color-white);
   font-size: 1.25rem;
   font-weight: 600; 
   transition: background-color 0.2s;
   border-bottom: solid 0.25rem transparent;

   &:not(:disabled):hover{
      background: var(--color-primary-hover);
   }

   &:disabled {
      background: var(--color-white);
      color: var(--color-text-base);
      cursor: not-allowed;
   }

   svg, img {
      margin-left: 0.75rem;
      fill: var(--color-white);
      svg:hover {
         color: var(--color-white);
      }
   }

   ${(props) => props.isActive === true
      && css`
         background: var(--color-white);
         color: var(--color-text-title);
         transition: background-color 0.2s;

      &:hover {
         background: var(--color-secondary-red);
         color: var(--color-white);
      }
   `}

   ${(props) => props.hasCompletedChallenge === true
      && css`
         border-bottom: solid 0.25rem var(--color-secondary-green);
   `}
`;
