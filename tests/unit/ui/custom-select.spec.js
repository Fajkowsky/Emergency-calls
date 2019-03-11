import CustomSelect from '@/components/ui/CustomSelect.vue';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('CustomSelect', () => {
  it('renders the correct markup', () => {
    const wrapper = shallowMount(CustomSelect);
    expect(wrapper.html())
    .contain('<div id="custom-select">');
  });
});
