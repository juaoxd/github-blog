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
