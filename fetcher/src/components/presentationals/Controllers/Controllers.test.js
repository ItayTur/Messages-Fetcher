import Controllers from './Controllers';
import IconButton from '../UI/IconButton/IconButton';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Controllers />', () => {

    it('should have 2 <IconButton />', () => {
        const wrapper = shallow(<Controllers />);
        expect(wrapper.find(IconButton)).toHaveLength(2);
    });
});