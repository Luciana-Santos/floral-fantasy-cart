import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  background: ${({ background, theme }) =>
    background ? theme.colors.dkTurquoise : theme.colors.ltBlueGray};
  width: max-content;
  margin-inline: ${({ marginInline }) =>
    marginInline ? marginInline : 'auto'};
  font-size: 1rem;
  cursor: pointer;
  color: ${({ color, theme }) =>
    color ? theme.colors.dkTurquoise : theme.colors.white};
  padding-block: clamp(0.375rem, 4vw, 0.6rem);
  padding-inline: clamp(1.4rem, 4vw, 2rem);
  border-radius: 0.25em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
  border: none;
  z-index: 1;
  display: flex;
  gap: 0.375em;
  justify-content: center;
  transition: all 0.35s;

  &:hover {
    color: white;
  }

  &::after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.mdTurquoise};
    z-index: -1;
    display: block;
    transition: all 0.35s;
    top: 100%;
    right: 0;
    bottom: -100%;
    left: 0;
  }

  ${({ isActive }) => {
    return isActive
      ? css`
          ::after {
            top: -10px;
            right: 0;
            bottom: 0;
            left: 0;
          }
        `
      : null;
  }}

  &:hover::after {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
