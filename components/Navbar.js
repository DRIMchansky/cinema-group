// packages
import styled from 'styled-components'

const Navbar = () => {
  return (
    <StyledNavbar>
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
  & ul {
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
