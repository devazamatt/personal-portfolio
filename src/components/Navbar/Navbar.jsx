import { Link, List, ListItem } from '@mui/material'
import { StyledNav } from './styled'
import { links } from '../../constants'

export const Navbar = () => {
  return (
    <StyledNav>
      <List>
        {links.map((link) => (
          <ListItem key={link.key}>
            <Link href={link.url}>{link.label}</Link>
          </ListItem>
        ))}
      </List>
    </StyledNav>
  )
}
