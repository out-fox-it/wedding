import styled from "styled-components";

export const LinksContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const StyledAddressContainer = styled.article`
  text-transform: uppercase;
  font-style: italic;

  & > span:first-child::before {
    content: attr(data-address-1);
    animation: change-address infinite 7s;
  }

  @keyframes change-address {
    0% {
      content: attr(data-address-1);
    }

    50% {
      content: attr(data-address-2);
    }
  }
`