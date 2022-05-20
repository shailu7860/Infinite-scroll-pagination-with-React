import React, { useEffect, useState, useRef } from 'react';
import { shallow } from 'enzyme';
import About from "../components/About";
import MockAdapter from "axios-mock-adapter";
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";


let wrapper;
describe('About  component', () => {

  it('render correctly',()=>{
      wrapper = shallow(
      <BrowserRouter>
          <Routes>
            <Route path="*" element={<About  policyTypes={false} />} />
          </Routes>
        </BrowserRouter>);
        //console.log(wrapper.debug());
      
  });
  // it('should run getpost method', () => {
  //   const instance = wrapper.instance(); // you assign your instance of the wrapper
  //   instance.fetchMoreData({});
  // });

  it('should clear settimeout', () => {
    wrapper.unmount()
  });
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  }); 

  let result = []
  let count=0
  describe("when API call is successful", () => {
    it("should return about list", async () => {
      

      // given
      const data = [
        {author: "vanxv",
        comment_text: null,
        created_at: "2021-12-01T12:06:21.000Z",
        created_at_i: 1638360381,
        num_comments: 0,
        objectID: "29402932",
        parent_id: null,
        points: 1,
        story_id: null,
        story_text: "in china AI engineer,recommended entrepreneurial directions?",
        story_title: null,
        story_url: null,
        title: "In China AI engineer,recommended entrepreneurial directions?",
        url: null}
      ];
      
      mock.onGet("https://hn.algolia.com/api/v1/search_by_date?tags=story&page="+count).reply(200 ,data)
      
      axios.get("https://hn.algolia.com/api/v1/search_by_date?tags=story&page="+count).then(function (response) {
      result = response.data
        console.log("thissssssssssssssssss",result)
      });

      wrapper = shallow(
        <BrowserRouter>
            <Routes>
              <Route path="*" element={<About  policyTypes={false} />} />
            </Routes>
          </BrowserRouter>);
          
          
    //   if(result.length < 1000){
    //     wrapper.setState({count : count+1})
    //   }
    //   expect(count).toBeLessThanOrEqual(1);
      
    //   expect(result).toEqual(expect.not.objectContaining([]));

    });
  });
  describe("when API call is failed", () => {
    it("should return empty array", () => {

      let result = []
      let count = 50
     
      // given
      const data = [
        {author: "vanxv",
        comment_text: null,
        created_at: "2021-12-01T12:06:21.000Z",
        created_at_i: 1638360381,
        num_comments: 0,
        objectID: "29402932",
        parent_id: null,
        points: 1,
        story_id: null,
        story_text: "in china AI engineer,recommended entrepreneurial directions?",
        story_title: null,
        story_url: null,
        title: "In China AI engineer,recommended entrepreneurial directions?",
        url: null}
      ];
      
      mock.onGet("https://hn.algolia.com/api/v1/search_by_date?tags=story&page="+count).reply(200 ,data)
      
      axios.get("https://hn.algolia.com/api/v1/search_by_date?tags=story&page="+count).then(function (response) {
      // console.log("data in result==",response.data);
        result = response.data
      });
       
      expect(result).toEqual([]);
  
    });
  });

  // describe('send raw json to another file', () => {
  //   it('send raw json to another file with object', () => {
  //     const mpush =  { history: { push: jest.fn() } };
  //     wrapper = shallow(
  //     <BrowserRouter>
  //           <Routes>
  //             <Route path="*" element={<About {...mpush} policyTypes={false} />} />
  //           </Routes>
  //         </BrowserRouter>
  //     );
  //     const instance = wrapper.instance(); // you assign your instance of the wrapper
  //     instance.getRawJSON(result[count]);  
  //     expect(mpush.history.push).toBeCalledWith({"pathname": "/post_particular", "state": {"rawJson": result[count]}});
  //   }); 
  // });





  });

