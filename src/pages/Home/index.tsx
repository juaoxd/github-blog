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
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface ProfileData {
  name: string
  avatarUrl: string
  login: string
  company: string
  bio: string
  followers: number
  htmlUrl: string
}

export function Home() {
  const [profileData, setProfileData] = useState<ProfileData>()

  async function fetchProfileData() {
    const response = await api.get('/users/juaoxd')

    const {
      name,
      avatar_url: avatarUrl,
      login,
      company,
      bio,
      followers,
      html_url: htmlUrl,
    } = response.data

    setProfileData({
      name,
      avatarUrl,
      login,
      company,
      bio,
      followers,
      htmlUrl,
    })
  }

  useEffect(() => {
    fetchProfileData()
  }, [])

  return (
    <HomeContainer>
      <Profile>
        <a href={profileData?.htmlUrl} target="_blank">
          GitHub
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
        <img src={profileData?.avatarUrl} alt="" />
        <ProfileContent>
          <TextContent>
            <ProfileTitle>{profileData?.name}</ProfileTitle>
            <p>{profileData?.bio}</p>
          </TextContent>

          <ProfileInfo>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {profileData?.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {profileData?.company}
            </span>

            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {profileData?.followers} seguidores
            </span>
          </ProfileInfo>
        </ProfileContent>
      </Profile>
    </HomeContainer>
  )
}
