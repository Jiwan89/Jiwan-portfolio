import React from 'react';
import LandingSection from '../../components/homePage/landingSection';
import CenteredContainer from '../../components/homePage/centeredContainer';
import Skills from '../../components/homePage/fluidGridSection';
import Timeline from '../../components/homePage/timelineSection';

const mainPageSections = [
  { id: CenteredContainer.id, name: 'build apps' },
  { id: Skills.id, name: 'skills' },
  { id: Timeline.id, name: 'experience' },
];

const HOC = ({ InnerComponent }) => <InnerComponent pointers={mainPageSections} />;
const sections = [LandingSection, CenteredContainer, Skills, Timeline];

export default function HomePage({ testId }) {
  return (
    <div data-testid={testId}>
      {sections.map((section) => <HOC key={section.id} InnerComponent={section} />)}
    </div>
  );
}
