import * as S from './styles';

export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="" />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de sistemas em frente ao um monitor com uma tela com código"
      />
    </S.Wrapper>
  );
}
