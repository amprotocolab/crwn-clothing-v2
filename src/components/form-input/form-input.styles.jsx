import styled, {
  css
} from 'styled-components';

const mainColor = 'black';
const subColor = 'rgb(89, 89, 89)';

const ShrinkLabelStyles = css `
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`
export const FormInputLabel = styled.label `
    color: ${subColor};
    font-size: 26px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 20px;
    transition: 300ms ease all;

  ${({shrink}) => shrink && ShrinkLabelStyles }

`
export const Input = styled.input `
      background: none;
      background-color: white;
      color: ${subColor};
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 100%;
      border: none;
      border-radius: 0;
      border-bottom: 1px solid ${subColor};
      margin: 15px 0;

      &:focus {
        outline: none;
      }

      &:focus ~ ${FormInputLabel} {
        ${ShrinkLabelStyles}
      }
`

export const Group = styled.div `
  position: relative;
  margin: 5px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  `
// .group {
//   position: relative;
//   margin: 5px 0;

//   .form-input {
//     background: none;
//     background-color: white;
//     color: $sub-color;
//     font-size: 18px;
//     padding: 10px 10px 10px 5px;
//     display: block;
//     width: 100%;
//     border: none;
//     border-radius: 0;
//     border-bottom: 1px solid $sub-color;
//     margin: 15px 0;

//     &:focus {
//       outline: none;
//     }

//     &:focus ~ .form-input-label {
//       @include shrinkLabel();
//     }
//   }

//   input[type='password'] {
//     letter-spacing: 0.3em;
//   }








// $sub-color: rgb(89, 89, 89);
// $main-color: black;

// @mixin shrinkLabel {
//   top: -14px;
//   font-size: 12px;
//   color: $main-color;
// }
//   .form-input-label {
//     color: $sub-color;
//     font-size: 26px;
//     font-weight: normal;
//     position: absolute;
//     pointer-events: none;
//     left: 5px;
//     top: 20px;
//     transition: 300ms ease all;

//     &.shrink {
//       @include shrinkLabel();
//     }
//   }
// }