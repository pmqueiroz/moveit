import styled from 'styled-components';

interface ContainerProps {
   progressBar: string;
}

export const Container = styled.header<ContainerProps>`
   display: flex;
   align-items: center;

   span {
      font-size: 1rem;
   }

   & > div {
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background: var(--color-gray-line);
      margin: 0 1.5rem;
      position: relative;

      div {
         width: ${props => props.progressBar};
         height: 100%;
         border-radius: 4px;
         background: var(--color-secondary-green);
      }

      span {
         position: absolute;
         left: ${props => props.progressBar};
         transform: translateX(-50%);
         top: 12px;
      }
   }
`;