import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navigation, PostContainer, PostHeader, PostInfo } from './styles'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <Navigation>
          <a href="">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </a>
          <a href="">
            Ver no GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Navigation>
        <div>
          <h2>JavaScript data types and data structures</h2>
          <PostInfo>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              cameronwll
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              Há 1 dia
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} /> 5 comentários
            </span>
          </PostInfo>
        </div>
      </PostHeader>
    </PostContainer>
  )
}
