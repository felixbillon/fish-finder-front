import { mount } from "@vue/test-utils";
import Fish from "@/components/Fish.vue";

describe("Fish.vue", () => {
  it("should have a custom title and match snapshot", () => {
    const wrapper = mount(Fish, {
      propsData: {
        fish: {
          commonName: "salomon"
        }
      }
    });

    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot();
  });
});
