import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
`
export const PostHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  padding: 2rem;
  margin-top: -84px;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
`
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;

    color: ${(props) => props.theme.blue};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border: 1px solid transparent;

    &:hover {
      border-bottom-color: ${(props) => props.theme.blue};

      transition: border-color 0.2s;
    }
  }
`

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  margin-top: 0.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['base-span']};
  }
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;

  ul {
    margin-left: 40px;
  }
`
