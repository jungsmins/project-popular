import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MapIcon from '../Icons/MapIcon';
import SearchIcon from '../Icons/SearchIcon';
import HomeIcon from '../Icons/HomeIcon';
import CommunityIcon from '../Icons/CommunityIcon';
import { CLIENT_PATH } from '../../../constants/path';
import UserIcon from '../Icons/UserIcon';

const Container = styled.footer`
  position: fixed;
  bottom: 0;

  width: 100vw;
  height: var(--GNA-height);

  padding: 0 30px;

  background-color: #fff;

  border-top: 1px var(--color-light-gray) solid;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1024px;
    height: 100%;

    margin: 0 auto;
  }

  a {
    transition: all 0.3s;

    .nav_link {
      text-align: center;

      svg {
        margin-bottom: 4px;
        fill: var(--color-gray);
      }

      p {
        font-size: var(--font-micro);
        color: var(--color-gray);
      }
    }

    &.active {
      transform: scale(1.2);

      svg {
        fill: var(--color-main);
      }

      p {
        color: var(--color-main);
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

const GlovalNavigation = () => {
  const FAKE_ID = '122323';

  return (
    <Container>
      <nav>
        <NavLink to={CLIENT_PATH.MAP} className={({ isActive }) => (isActive ? 'active' : '')}>
          <div className="nav_link">
            <MapIcon />
            <p>지도</p>
          </div>
        </NavLink>
        <NavLink to={CLIENT_PATH.SEARCH} className={({ isActive }) => (isActive ? 'active' : '')}>
          <div className="nav_link">
            <SearchIcon />
            <p>검색</p>
          </div>
        </NavLink>
        <NavLink to={CLIENT_PATH.HOME} className={({ isActive }) => (isActive ? 'active' : '')}>
          <div className="nav_link">
            <HomeIcon />
            <p>홈</p>
          </div>
        </NavLink>
        <NavLink to={CLIENT_PATH.COMMUNITY} className={({ isActive }) => (isActive ? 'active' : '')}>
          <div className="nav_link">
            <CommunityIcon />
            <p>커뮤니티</p>
          </div>
        </NavLink>
        <NavLink to={`${CLIENT_PATH.USER}/${FAKE_ID}`} end className={({ isActive }) => (isActive ? 'active' : '')}>
          <div className="nav_link">
            <UserIcon />
            <p>마이페이지</p>
          </div>
        </NavLink>
      </nav>
    </Container>
  );
};

export default GlovalNavigation;
