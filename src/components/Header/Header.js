import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
    return (
        <header>
            <SuperHeader>
                <Row>
                    <ActionGroup>
                        <button>
                            <Search size={24} />
                        </button>
                        <button>
                            <Menu size={24} />
                        </button>
                    </ActionGroup>
                    <DesktopHeader>
                        <MainHeader>
                            <Logo />
                        </MainHeader>
                    </DesktopHeader>
                    <ActionGroup>
                        <button>
                            <User size={24} />
                        </button>
                    </ActionGroup>
                    <ButtonWrapper>
                        <Button>
                            subscribe
                        </Button>
                    </ButtonWrapper>
                </Row>
            </SuperHeader>
            <MobileHeader>
                <MainHeader>
                    <Logo />
                </MainHeader>
            </MobileHeader>
        </header>
    );
};

const ButtonWrapper = styled.div`
    display: none;

    @media ${QUERIES.desktopAndUp} {
        display: revert;
        align-self: center;
    }
`

const DesktopHeader = styled.div`
    display: none;

    @media ${QUERIES.desktopAndUp} {
        display: revert;
    }
`
const MobileHeader = styled.div`
    @media ${QUERIES.desktopAndUp} {
        display: none;
    }
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
    
    @media ${QUERIES.desktopAndUp} {
        color: var(--color-off-black);
        background: var(--color-gray-100);
    }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

    &:nth-child(3) {
        display: revert;
        @media ${QUERIES.desktopAndUp} {
            display: none;
        }
    }

    &:nth-child(4) {
        display: none;
        @media ${QUERIES.desktopAndUp} {
            display: revert;
        }
    }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

export default Header;
