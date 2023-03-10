import { getPosts } from "service/post/getPosts";
import Link from "next/link";
import useSWR from "swr";
import * as S from "./styles";

function CardPostsG() {
  const { data } = useSWR("/api/posts", getPosts);

  return (
    <S.Wrapper>
      {data
        ?.map((post) => (
          <S.Card key={post.title}>
            <Link href={`/${post.category?.slug}/${post.slug}`}>
              <S.PhotoBook
                src={post.bannerImage.url}
                alt=""
                width={380}
                height={184}
              />

              <S.Content>
                <S.Subtitle>{post.title}</S.Subtitle>

                <S.Description>{post.description}</S.Description>
              </S.Content>
            </Link>
          </S.Card>
        ))
        .slice(0, 3)}
    </S.Wrapper>
  );
}

export default CardPostsG;
