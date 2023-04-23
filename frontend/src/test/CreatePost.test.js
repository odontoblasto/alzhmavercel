
import mockAxios from "jest-mock-axios";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import CreatePost from '../pages/CreatePost'


jest.mock('react', () => ({
	...jest.requireActual('react'),
	useState: jest.fn()
}))
const setState = jest.fn()


describe("CreatePost", () => {
    afterEach(() => {
      mockAxios.reset();
    });
  
    describe("when API call is successful", () => {
      it("should return users list", async () => {

        const useState = jest.fn()
    
        useState.mockImplementation(() => [posts, setState])
        // given
        const posts = [
          { id: 1, title: "John",description:"John",uid:1 },
          { id: 2, title: "Andrew",description:"Andrew",uid:2 },
        ];
        mockAxios.get.mockResolvedValueOnce(posts);
  
        // when
        const result =  CreatePost();
  
        // then
        expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}/create`);
        expect(result).toEqual(posts);
      });
    });
})



