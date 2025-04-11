import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Navigation,
  PostContainer,
  PostContent,
  PostHeader,
  PostInfo,
} from './styles'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink, useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface Post {
  html_url: string
  title: string
  user: {
    login: string
  }
  created_at: string
  comments: number
  body: string
}

export function Post() {
  const { postId } = useParams()

  const [post, setPost] = useState<Post>()

  const fetchPost = useCallback(async () => {
    const response = await api.get(`/repos/juaoxd/github-blog/issues/${postId}`)

    const fetchedPost = response.data

    setPost(fetchedPost)
  }, [postId])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <PostContainer>
      <PostHeader>
        <Navigation>
          <NavLink to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </NavLink>
          <a href={post?.html_url}>
            Ver no GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Navigation>
        <div>
          <h2>{post?.title}</h2>
          <PostInfo>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {post?.user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              {dayjs(post?.created_at).fromNow()}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} /> {post?.comments}{' '}
              comentários
            </span>
          </PostInfo>
        </div>
      </PostHeader>
      <PostContent>
        <Markdown
          children={post?.body}
          components={{
            code(props) {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { children, className, node, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  language={match[1]}
                  style={dracula}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            },
          }}
        />
      </PostContent>
    </PostContainer>
  )
}
