import IconButton from './IconButton';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('<IconButton />', () => {

    it('simulates mouseDown events', () => {
        const onIconButtonClick = sinon.spy();
        const wrapper = shallow(<IconButton onMouseDown={onIconButtonClick} />);
        wrapper.find('button').simulate('mousedown');
        expect(onIconButtonClick).toHaveProperty('callCount', 1);
    });
});