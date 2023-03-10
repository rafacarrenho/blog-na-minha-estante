import { getCategories } from "service/category/getCategories";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/img/logo.png";
import useSWR from "swr";
import Container from "components/Container";
import * as S from "./styles";

function Header() {
  const { data } = useSWR("/api/categories", getCategories);

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Logo redondo escrito Na Minha Estante"
              width="72"
            />
          </Link>

          <S.MenuContent>
            {data?.map((category: any) => (
              <li key={category.name}>
                <Link href={`/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </S.MenuContent>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}

export default Header;
