import { Container } from "components/Container";
import { Header } from "components/Header";
import { getPost } from "service/post/getPost";
import { PostTemplateProps } from "./types";
import useSWR from "swr";
import CardAuthor from "components/CardAuthor";
import * as S from "./styles";

export function PostTemplate({ post }: PostTemplateProps) {
  const { data } = useSWR(`/api/post/${post}`, () => getPost(post));

  return (
    <>
      <Header />
      <Container>
        <S.Wrapper>
          {data && (
            <S.CardPost>
              <S.PhotoBook
                src={data.bannerImage.url}
                alt=""
                width={800}
                height={500}
              />
              <S.Content>
                <h1>{data.title}</h1>
                <main dangerouslySetInnerHTML={{ __html: data.content.html }} />
              </S.Content>
            </S.CardPost>
          )}

          <CardAuthor />

          <p>FOOTER</p>
        </S.Wrapper>
      </Container>
    </>
  );
}
