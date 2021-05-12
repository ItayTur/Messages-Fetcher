import Fetcher from './Fetcher';
import Messages from '../../presentationals/Messages/Messages';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Fetcher />', () => {

    let wrapper;
    beforeAll(() => wrapper = shallow(<Fetcher />));

    it('shold have 1 <Messages />', () => {
        expect(wrapper.find(Messages)).toHaveLength(1);
    })
})