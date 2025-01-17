import React from 'react';
import styled from 'styled-components/macro';

import {
    MAIN_STORY,
    OPINION_STORIES,
    SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

import { QUERIES } from "../../constants"

const Separator = () => {
    return <StyledSeparator />
}

const StyledSeparator = styled.div`
    width: 100%;
    border: 1px solid var(--color-gray-300);
    margin: 16px 0;

    @media ${QUERIES.tabletOnly} { 
        display: none;
    }
`
const MainStoryGrid = () => {
    return (
        <Wrapper>
            <MainStorySection>
                <MainStory {...MAIN_STORY} />
            </MainStorySection>

            <SecondaryStorySection>
                <StoryList>
                    {SECONDARY_STORIES.map((story, index) => (
                        <>
                            <SecondaryStory key={story.id} {...story} />
                            {index < SECONDARY_STORIES.length - 1 && <Separator />}
                        </>
                    ))}
                </StoryList>
            </SecondaryStorySection>

            <OpinionSection>
                <SectionTitle>Opinion</SectionTitle>
                <StoryList>
                    {OPINION_STORIES.map((story, index) => (
                        <>
                            <OpinionStory key={story.id} {...story} />
                            {index < OPINION_STORIES.length - 1 && <Separator />}
                        </>
                    ))}
                </StoryList>
            </OpinionSection>

            <AdvertisementSection>
                <Advertisement />
            </AdvertisementSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

    @media ${QUERIES.tabletAndUp} {
        grid-template-areas: 
            "main-story secondary-stories"
            "advertisement advertisement"
            "opinion-stories opinion-stories";
        grid-template-columns: 3fr 1fr;
    } 

    @media ${QUERIES.desktopAndUp} {
        grid-template-areas: 
            "main-story secondary-stories opinion-stories"
            "main-story advertisement advertisement";
        grid-template-columns: 2fr 1fr 1fr;
    }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

    @media ${QUERIES.tabletOnly} {
        display: grid;
        grid-auto-flow: column;
    }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
