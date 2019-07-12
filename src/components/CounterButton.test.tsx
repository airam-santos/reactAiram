import * as React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

describe("Counterbutton", () => {
  describe("render", () => {
    test("Debería renderizar un 1 cuando se haya hecho un click en el botón", () => {
      const wrapper = shallow(<CounterButton />);
      wrapper.find("button").simulate("click");
      expect(wrapper.find("button").text()).toBe("1");
    });
  });
});
