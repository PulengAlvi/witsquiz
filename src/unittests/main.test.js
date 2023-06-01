import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { Main } from '../pages/main';

test("Should render Main component", () => {
  render(
    <Router>
      <Main />
    </Router>
  );
  const mainElement = screen.getByTestId("main-1");
  expect(mainElement).toBeInTheDocument();
  expect(mainElement).toHaveTextContent("WitsQuiz Home Page");
});
