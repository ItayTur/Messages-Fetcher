import Message from './Message';
import Field from '../UI/Field/Field';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Message />', () => {

    it('should have 3 <Field />', () => {
        const wrapper = shallow(<Message />);
        expect(wrapper.find(Field)).toHaveLength(3);
    });
});