import ibiswaplogo from '../../assets/Simbolo.png'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SearchBarWrapper from '../common/SearchBar/SearchBarWrapper';
import { HeaderIcon, HeaderItem, HeaderItems, LogoContainer, NavLink, Wrapper } from './NavBar.styles'

const NavBar = () => {
  return (
    <Wrapper>
      <div>
        <NavLink to="/">
          <LogoContainer>
            <img src={ibiswaplogo} height={40} width={40} alt='logo' />
            <div className="logo-text"><span>IBISWAP</span></div>
          </LogoContainer>
        </NavLink>
      </div>
      <SearchBarWrapper title={"Search items , collections , and accounts"} />
      <HeaderItems>
        <NavLink to="/">
          <HeaderItem> Collections </HeaderItem>
        </NavLink>
        <HeaderItem> Stats </HeaderItem>
        <HeaderItem> Resources </HeaderItem>
        <HeaderItem> Create </HeaderItem>
        <HeaderIcon>
          <AccountCircleOutlinedIcon className='icon' />
        </HeaderIcon>
        <HeaderIcon>
          <AccountBalanceWalletOutlinedIcon className='icon' />
        </HeaderIcon>
      </HeaderItems>
    </Wrapper>
  )
}

export default NavBar;