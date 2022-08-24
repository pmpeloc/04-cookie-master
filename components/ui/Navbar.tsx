import { FC, PropsWithChildren } from 'react';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import NextLink from 'next/link';

interface Props extends PropsWithChildren {}

export const Navbar: FC<Props> = () => {
  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        <IconButton size='large' edge='start'>
          <MenuOutlined />
        </IconButton>
        <NextLink href='/' passHref>
          <Link>
            <Typography variant='h6' color='white'>
              CookieMaster
            </Typography>
          </Link>
        </NextLink>
        <div style={{ flex: 1 }}></div>
        <NextLink href='/theme-changer' passHref>
          <Link>
            <Typography variant='h6' color='white'>
              Cambiar tema
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
