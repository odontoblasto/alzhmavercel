import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Login } from '../pages/Login';
import { Auth } from '../components/auth';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe("Login",()=>{
    it("Should render Login correctly", ()=>{
    render(<Login/>)
});
})
describe("Login",()=>{
    it("Should render Auth correctly", ()=>{
    render(<Auth/>)
});
})



