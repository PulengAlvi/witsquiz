import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Main } from '../pages/main'

test("Should render Main component", () => {
    render(<Main/>);
    const mainElement = screen.getByTestId("main-1");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveTextContent("WitsQuiz Home Page");
})