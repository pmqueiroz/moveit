import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled(Form)`
   width: 22rem;
   height: 3.75rem;
   display: flex;

   input {
      flex: 1;
      height: 100%;
      padding-left: 2rem;
      border-radius: 8px 0 0 8px;
      background: linear-gradient(to right, rgba(73, 83, 184, 1) , rgba(73, 83, 184, 0.2));
      border: 2px solid transparent;

      &::placeholder{
         color: var(--color-text-highlight);
      }

      &:hover{
         border: 2px solid #414AA3;
      }

      &:focus{
         border: 2px solid #414AA3;
      }
   }

   button {
      height: 100%;
      width: 3.75rem;
      border-radius: 0 8px 8px 0;
      background: var(--color-primary-hover);
      color: var(--color-white);
   }
`;