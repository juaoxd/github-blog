import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
`
export const Profile = styled.div`
  position: relative;
  display: flex;
  gap: 4rem;
  width: 100%;
  padding: 2.5rem 2rem;
  margin-top: -100px;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  a {
    position: absolute;
    top: 2.5rem;
    right: 2rem;

    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;

    color: ${(props) => props.theme.blue};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ProfileTitle = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-title']};
  line-height: 1.3;
`

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
      font-size: 18px;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  margin-top: 4.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;

    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:active {
      border: 1px solid ${(props) => props.theme.blue};
    }

    &:focus {
      outline: none;
    }
  }
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin: 3rem auto;
`

export const Card = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-sizing: content-box;
  border: 2px solid transparent;

  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.theme['base-label']};
  }

  div {
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    h3 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
      flex: 1;
      word-break: break-word;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }
`
