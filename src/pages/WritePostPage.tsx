import styled from 'styled-components';
import TabsContainer from '../components/WritePost/containers/TabsContainer';
import TitleInput from '../components/WritePost/components/PostTitle';
import PostContentContainer from '../components/WritePost/containers/PostContentContainer';
import RatingContainer from '../components/WritePost/containers/RatingContainer';
import WriteCompleteButton from '../components/WritePost/components/WriteCompleteButton';
import ChoiceStoreBoxContainer from '../components/WritePost/containers/ChoiceStoreBoxContainer';
const Container = styled.div`
  width: 100%;
  height: 1000px;
  position: relative;
`;

const WritePostPage = () => {
  return (
    <Container>
      <TabsContainer />
      <TitleInput />
      <PostContentContainer />
      <ChoiceStoreBoxContainer />
      <RatingContainer />
      <WriteCompleteButton>작성하기</WriteCompleteButton>
    </Container>
  );
};

export default WritePostPage;
