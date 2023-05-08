import {
  StyledSocialLink,
  StyledSocialList,
  StyledSocialListItem
} from './styled'

export const HomeSocial = () => {
  return (
    <StyledSocialList>
      <StyledSocialListItem>
        <StyledSocialLink href="https://github.com/devazamatt" target="_blank">
          <i className="ri-github-fill"></i>
        </StyledSocialLink>
      </StyledSocialListItem>

      <StyledSocialListItem>
        <StyledSocialLink href="https://t.me/devazamat" target="_blank">
          <i className="ri-telegram-fill"></i>
        </StyledSocialLink>
      </StyledSocialListItem>

      <StyledSocialListItem>
        <StyledSocialLink
          href="https://www.instagram.com/devazamat/"
          target="_blank"
        >
          <i className="ri-instagram-fill"></i>
        </StyledSocialLink>
      </StyledSocialListItem>
    </StyledSocialList>
  )
}
