import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   background: var(--color-primary);
   display: flex;
   align-items: center;
   justify-content: flex-end;


   & > div {
      background: url('logo-bg.svg') no-repeat center;
      width: 50rem;
      height: 40rem;
      position: absolute;
      left: -5rem;
      top: 3rem;
   }

   section {
      margin-right: 10rem;
      & > img {
         margin-bottom: 5rem;
      }

      h1 {
         color: var(--color-white);
         margin-bottom: 2rem;
      }

      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: initial;

      div {
         display: flex;
         align-items: center;
         margin-bottom: 2rem;
         color: var(--color-text-highlight);

         img {
            margin-right: 1rem;
         }
      }
   }
`;