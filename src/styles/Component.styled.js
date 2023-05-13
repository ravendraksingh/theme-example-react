import { styled } from "styled-components";

export const StyledApp = styled.body`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MainContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 32px;
`;

export const Countrycard = styled.div`
  background-color: ${({ theme }) => theme.colors.elementbg};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  max-height: 450px;
  margin-bottom: 3rem;
  border-radius: 6px;
  border: none;
  box-shadow: 0px 0px 5px 1px #aaaaaa;

  @media screen and (min-width: 576px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CountrycardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.elementbg};
  padding: 32px;

  .country-name,
  .other-info {
    color: ${({ theme }) => theme.colors.text};
  }
  .light-text {
    color: ${({ theme }) => theme.colors.lighttext};
  }
`;

export const CountryDetailsCardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.elementbg};
  padding: 64px;
  font-size: 16px;

  .country-name,
  .other-info {
    color: ${({ theme }) => theme.colors.text};
  }
  .light-text {
    color: ${({ theme }) => theme.colors.lighttext};
  }

  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.headerbg};
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.elementbg};
  color: ${({ theme }) => theme.colors.text};
  padding: 4px;
  border: 0.1px solid rgb(220, 220, 220);
  border-radius: 4px;
  width: 120px;
`;

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.elementbg};
  color: ${({ theme }) => theme.colors.text};
`;
