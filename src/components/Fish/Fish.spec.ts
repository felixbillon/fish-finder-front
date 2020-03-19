import { mount } from "@vue/test-utils";
import Fish from "@/components/Fish/Fish.vue";

describe("Fish.vue", () => {
  it("should render with img", () => {
    const wrapper = mount(Fish, {
      propsData: {
        fish: {
          commonName: "salomon",
          scientificName: "salminotis",
          picture: "test"
        }
      }
    });

    expect(
      wrapper
        .find(".v-list-item__title")
        .text()
        .includes("salomon")
    ).toBe(true);

    expect(
      wrapper
        .find(".v-list-item__subtitle")
        .text()
        .includes("salminotis")
    ).toBe(true);

    expect(wrapper.find(".v-list-item__avatar").contains("img")).toBe(true);
  });

  it("should render without img", () => {
    const wrapper = mount(Fish, {
      propsData: {
        fish: {
          commonName: "salomon",
          scientificName: "salminotis"
        }
      }
    });

    expect(
      wrapper
        .find(".v-list-item__title")
        .text()
        .includes("salomon")
    ).toBe(true);

    expect(
      wrapper
        .find(".v-list-item__subtitle")
        .text()
        .includes("salminotis")
    ).toBe(true);

    expect(wrapper.find(".v-list-item__avatar").contains("img")).toBe(false);
  });
});
