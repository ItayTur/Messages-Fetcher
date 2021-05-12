import Messages from './Messages';
import Message from '../Message/Message';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';


Enzyme.configure({ adapter: new Adapter() });

describe('<Messages />', () => {
    let wrapper;
    beforeAll(() => wrapper = shallow(<Messages messages={[{ id: 1 }]} />));

    it('should render <Message />', () => {
        expect(wrapper.containsMatchingElement(<Message />)).toEqual(true);
    })
})