import Field from './Field';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Field />', () => {

    it('Allows to set content', () => {
        const content = 'test content';
        const wrapper = mount(<Field content={content} />);
        expect(wrapper.props().content).toEqual(content);
    });
});