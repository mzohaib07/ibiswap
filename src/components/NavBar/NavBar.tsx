import React from "react";
import ibiswaplogo from "../../assets/Simbolo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SearchBarWrapper from "../common/SearchBar/SearchBarWrapper";
import PopoverWrapper from "../common/Popover/PopoverWraper";
import {
  BoxWrapper,
  HeaderIcon,
  HeaderItem,
  HeaderItems,
  LogoContainer,
  NavLink,
} from "./NavBar.styles";
import { Context } from "../../context/Context";
import { ACTIVENAV, OPENDRAWER } from "../../constants/constants";

const NavBar: React.FC = () => {
  const { state, dispatch } = React.useContext(Context);
  const { open, activeNav, show } = state;

  const handleWallet = React.useCallback(() => {
    dispatch({
      type: OPENDRAWER,
      payload: {
        open: !open,
      },
    });
  }, [dispatch, open]);
  const handleStatsClick = React.useCallback(() => {
    dispatch({
      type: ACTIVENAV,
      payload: {
        show: !show,
        activeNav: "Stats",
      },
    });
  }, [dispatch, show]);
  const handleCreateClick = React.useCallback(() => {
    dispatch({
      type: ACTIVENAV,
      payload: {
        show: !show,
        activeNav: "Create",
      },
    });
  }, [dispatch, show]);
  const handleResourcesClick = React.useCallback(() => {
    dispatch({
      type: ACTIVENAV,
      payload: {
        show: !show,
        activeNav: "Resources",
      },
    });
  }, [dispatch, show]);
  const handleLogoClick = React.useCallback(() => {
    dispatch({
      type: ACTIVENAV,
      payload: {
        show: false,
        activeNav: "",
      },
    });
  }, [dispatch]);
  return (
    <BoxWrapper className="wrapper">
      <div>
        <NavLink to="/">
          <LogoContainer onClick={handleLogoClick}>
            <img src={ibiswaplogo} height={40} width={40} alt="logo" />
            <div className="logo-text">
              <span>IBISWAP</span>
            </div>
          </LogoContainer>
        </NavLink>
      </div>
      <SearchBarWrapper title={"Search items , collections , and accounts"} />
      <HeaderItems>
        <PopoverWrapper>
          <HeaderItem>Collections</HeaderItem>
        </PopoverWrapper>
        <NavLink to="/stats">
          <HeaderItem
            className={activeNav === "Stats" ? "nav-active" : " "}
            onClick={handleStatsClick}
          >
            Stats
          </HeaderItem>
        </NavLink>
        <HeaderItem
          className={activeNav === "Resources" ? "nav-active" : " "}
          onClick={handleResourcesClick}
        >
          {" "}
          Resources{" "}
        </HeaderItem>
        <NavLink to="/login">
          <HeaderItem
            className={activeNav === "Create" ? "nav-active" : " "}
            onClick={handleCreateClick}
          >
            {" "}
            Create{" "}
          </HeaderItem>
        </NavLink>
        <HeaderIcon>
          <AccountCircleOutlinedIcon className="icon" />
        </HeaderIcon>
        <HeaderIcon>
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            onClick={handleWallet}
          />
        </HeaderIcon>
      </HeaderItems>
    </BoxWrapper>
  );
};

export default NavBar;
