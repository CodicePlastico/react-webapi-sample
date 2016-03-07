import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import Hello from '../js/Hello';
import { expect } from 'chai';

describe('<Hello />', function() {
    it('should render stuff', function() {
        const wrapper = shallow(<Hello name='World' />);
        expect(wrapper.contains(<div>Hello, <em>World</em>!!!</div>)).to.equal(true);
		
		const wrapper2 = shallow(<Hello name='Stefano' />);
        expect(wrapper2.contains(<div>Hello, <em>Stefano</em>!!!</div>)).to.equal(true);
    });
});