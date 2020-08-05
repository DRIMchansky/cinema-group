// packages
import styled from 'styled-components'

const Navbar = ({ type }) => {
  return (
    <StyledNavbar type={type}>
      <ul class="navbar__list">
        {/*  Сеть кинотеатров  */}
        <li class="navbar__item">
          <a href="#" class="navbar__link">
            Сеть кинотеатров
          </a>
          <ul class="navbar__sublist">
            <li class="navbar__subitem">
              <p class="navbar__city">Сыктывкар</p>
              <a href="#" class="navbar_sublink" _>
                <span class="navbar__branch">«РубЛион Синема»</span>
                <span class="navbar__mall">ТРК «РубликЪ»</span>
              </a>
            </li>
            <li class="navbar__subitem">
              <a href="#" class="navbar_sublink" _>
                <span class="navbar__branch">«РубЛион Синема»</span>
                <span class="navbar__mall">ТРЦ «Парма»</span>
              </a>
            </li>
            <li class="navbar__subitem">
              <p class="navbar__city">Котлас</p>
              <a href="#" class="navbar__sublink">
                <span class="navbar__branch">«РубЛион Синема»</span>
                <span class="navbar__mall">ТРЦ «Столица»</span>
              </a>
            </li>
          </ul>
        </li>

        {/* <!-- Сеть игровых центров --> */}

        {/* <!-- Сеть боулинг центров --> */}

        {/* <!-- Сеть кафе -->  */}
      </ul>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  display: ${(props) => (props.type === 'mobile' ? 'block' : 'none')};
  visibility: ${(props) => (props.type === 'mobile' ? 'visible' : 'hidden')};

  @media (min-width: 960px) {
    display: ${(props) => (props.type === 'mobile' ? 'none' : 'block')};
    visibility: ${(props) => (props.type === 'mobile' ? 'hidden' : 'visible')};
  }

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  & li {
  }

  & a {
  }
`

const StyledList = styled.ul``

const StyledSublist = styled.ul``

const Styleditem = styled.li``

const StyledSubitem = styled.li``

export default Navbar
