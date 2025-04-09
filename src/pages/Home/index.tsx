import {
  HomeContainer,
  Profile,
  ProfileContent,
  ProfileInfo,
  ProfileTitle,
  TextContent,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

export function Home() {
  return (
    <HomeContainer>
      <Profile>
        <a href="">
          GitHub
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
        <img src="https://github.com/juaoxd.png" alt="" />
        <ProfileContent>
          <TextContent>
            <ProfileTitle>Joao Gabriel</ProfileTitle>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
              repudiandae. Nemo voluptatum esse magni consectetur, animi natus,
              nihil deleniti ullam atque nobis laborum explicabo eius dolorum
              quos consequuntur ratione eaque.
            </p>
          </TextContent>

          <ProfileInfo>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              juaoxd
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              Unemployed
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              32 seguidores
            </span>
          </ProfileInfo>
        </ProfileContent>
      </Profile>
    </HomeContainer>
  )
}
