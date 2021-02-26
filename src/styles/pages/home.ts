import styled from 'styled-components';

export const Container = styled.div`
   height: calc(100vh - 3.75rem);
   max-width: 992px;
   margin: 0 auto;
   padding: 2.5rem 2rem;

   display: flex;
   flex-direction: column;

   section {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6.25rem;
      margin-top: 2rem;
      align-content: center;

      .leftContainer {

      }
   }
`;