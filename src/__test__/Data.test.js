import Data from '../components/Data';
import { shallow } from 'enzyme';
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe('update home page',()=>{

    it('my Home test case',()=>{
        const wrapper = shallow(
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Data  policyTypes={false} />} />
          </Routes>
        </BrowserRouter>
        );
          console.log(wrapper.debug());
        // expect(wrapper.exists('name')).toEqual(true);
    })

})