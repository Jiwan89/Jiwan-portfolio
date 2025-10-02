// import React from 'react';
// import { render } from '@testing-library/react';
// import TimeCard from '../TimeCard';
// import WithThemeProvider from '../../../helpers/test/withThemeProvider';

// const data = {
//   time: 'Oct 2018 - May 2020',
//   title: 'Senior Front-End engineer',
//   description: 'working within cross-functional team on:',
//   company: {
//     name: 'Architrave GmbH',
//     link: 'https://www.architrave.de/',
//   },
//   location: 'Germany',
//   workList: ['migrating old front-end development system to modern one', 'maintaining and build backbone app features', 'implement micro front end structure', 'build react micro apps'],
//   references: false,
//   jobDescription: 'See Architrave website:',
// };

// describe('TimeCard component', () => {
//   it('renders correctly with content', () => {
//     const { getByTestId, getByText } = render(
//       <WithThemeProvider>
//         <TimeCard item={data} />
//       </WithThemeProvider>,
//     );
//     const cardElement = getByTestId(TimeCard.testId);
//     const cardTitleElement = getByText(data.title);
//     expect(cardElement).toBeInTheDocument();
//     expect(cardTitleElement).toBeInTheDocument();
//   });
// });
