import { mount, createLocalVue } from '@vue/test-utils';
import test from 'ava';
import VIntlDateTimeFormat from '@/src/VIntlDateTimeFormat.vue';

let wrapper;
const localVue = createLocalVue();

test.beforeEach(() => {
  wrapper = mount(VIntlDateTimeFormat, {
    localVue,
  });
});

test('is a Vue instance', (t) => {
  t.is(wrapper.isVueInstance(), true);
});

test('renders correct snapshot', (t) => {
  t.snapshot(wrapper.vm.$el.outerHTML);
});
