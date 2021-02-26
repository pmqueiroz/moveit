import styled from 'styled-components';

export const Container = styled.div`
   height: 100%;
   background: var(--color-white);
   box-shadow: 0 0 60px var(--color-shadow);
   padding: 1.5rem 2rem;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   border-radius: 5px;

   .challengeActive {
      height: 100%;
      display: flex;
      flex-direction: column;
      width: 100%;

      header {
         color: var(--color-primary);
         font-weight: 600;
         font-size: 1.25rem;
         padding: 0 2rem 1.5rem;
         border-bottom: 1px solid var(--gray-line);
      }

      main {
         flex: 1;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;

         strong {
            font-size: 2rem;
            font-weight: 600;
            color: var(--color-text-title);
            margin: 1.5rem 0 1rem;
         }

         p {
            line-height: 1.5;
         }
      }

      footer {
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         gap: 1rem;

         button {
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;

            color: var(--color-white);

            font-size: 1rem;
            font-weight: 600;

            transition: filter 0.2s;
            
            &:hover {
               filter: brightness(0.9);
            }
         }

         .Failed {
            background: var(--color-secondary-red);
         }

         .Success {
            background: var(--color-secondary-green);
         }

      }
   }

   .challengeNotActive {
      display: flex;
      flex-direction: column;
      align-items: center;

      strong {
         font-size: 1.5rem;
         font-weight: 500;
         line-height: 1.4;
      }

      p {
         display: flex;
         flex-direction: column;
         align-items: center;
         max-width: 70%;
         margin-top: 3rem;
         line-height: 1.4;

         img {
            margin-bottom: 1rem;
         }
      }
   }
`;