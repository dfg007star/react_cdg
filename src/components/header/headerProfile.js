import React from "react";
import styled from "styled-components";
import settings from "../../assets/settings.svg";
import info from "../../assets/info.svg";
import exit from "../../assets/exit.svg";
import avatar from "../../assets/avatar.svg";

const HeaderProfMenu = styled.ul`
  width: 50%;
  height: 91px;
  display: flex;
  margin: 0;
  justify-content: flex-end;
  align-items: center;
`;

const HeaderProfItem = styled.li`
  margin-left: 55px;
  display: inline-block;
  text-align: center;
`;

const HeaderItemLink = styled.a`
  padding-bottom: 34px;
  border-bottom: 2px solid #3744bd;
  border-radius: 1px;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

const HeaderAvatarLink = styled.a`
  padding-bottom: 36px;
  border-bottom: 2px solid #3744bd;
  border-radius: 1px;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

const Image = styled.img``;

function HeaderProfile() {
  return (
    <HeaderProfMenu>
      <HeaderProfItem>
        <HeaderItemLink>
          <Image src={settings} alt="settings" />
        </HeaderItemLink>
      </HeaderProfItem>
      <HeaderProfItem>
        <HeaderItemLink>
          <Image src={info} alt="info" />
        </HeaderItemLink>
      </HeaderProfItem>
      <HeaderProfItem>
        <HeaderItemLink>
          <Image src={exit} alt="exit" />
        </HeaderItemLink>
      </HeaderProfItem>
      <HeaderProfItem>
        <HeaderAvatarLink>
          <Image src={avatar} alt="avatar" className="avatar-header" />
        </HeaderAvatarLink>
      </HeaderProfItem>
    </HeaderProfMenu>
  );
}

export default HeaderProfile;
