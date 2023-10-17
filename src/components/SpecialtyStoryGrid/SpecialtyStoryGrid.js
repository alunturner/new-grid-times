import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
              <SportsStoryWrapper>
            <MiniStory key={data.id} {...data} />
              </SportsStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
    grid-template-columns: minmax(0px, auto);
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
display: grid;
gap: 16px;
grid-template-columns:
repeat(auto-fill, minmax(150px, 1fr));
overflow: scroll;`;

const SportsSection = styled.section`
`;

const SportsStories = styled.div`
display: grid;
gap: 16px;
grid-template-columns:
repeat(auto-fill, minmax(150px, 1fr));

    @media ${QUERIES.tabletAndUp} {
        display: flex;
        grid-template-columns: revert;
        overflow: auto;
    }
`

const SportsStoryWrapper = styled.div`
    min-width: 220px;
`
export default SpecialtyStoryGrid;
