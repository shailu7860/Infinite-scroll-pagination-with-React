import Home from '../Home';
import { shallow } from 'enzyme';

describe('update home page',()=>{

    it('my Home test case',()=>{
        const wrapper = shallow(<Home />);
          //console.log(wrapper.debug());
        expect(wrapper.exists('.App')).toEqual(true);
    })

})
