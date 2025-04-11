import {
  Card,
  CardsContainer,
  HomeContainer,
  InputContainer,
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
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface ProfileData {
  name: string
  avatarUrl: string
  login: string
  company: string
  bio: string
  followers: number
  htmlUrl: string
}

interface Post {
  number: number
  title: string
  body: string
  created_at: string
}

interface Posts {
  totalCount: number
  items: Post[]
}

export function Home() {
  const [profileData, setProfileData] = useState<ProfileData>()
  const [posts, setPosts] = useState<Posts>()

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

  async function fetchPosts() {
    const response = await api.get('/search/issues', {
      params: {
        q: 'repo:juaoxd/github-blog',
      },
    })

    const { total_count: totalCount, items } = response.data

    setPosts({ totalCount, items })
  }

  useEffect(() => {
    fetchProfileData()
    fetchPosts()
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

      <InputContainer>
        <div>
          <h3>Publicações</h3>
          <span>{posts?.totalCount} publicações</span>
        </div>

        <input type="text" placeholder="Buscar conteúdo" />
      </InputContainer>

      <CardsContainer>
        {posts?.items.map((post) => {
          return (
            <Card key={post.number} to={`/posts/${post.number}`}>
              <div>
                <h3>{post.title}</h3>
                <span>{dayjs(post.created_at).fromNow()}</span>
              </div>

              <p>{post.body?.substring(0, 80).trimEnd().concat('...')}</p>
            </Card>
          )
        })}
      </CardsContainer>
    </HomeContainer>
  )
}
