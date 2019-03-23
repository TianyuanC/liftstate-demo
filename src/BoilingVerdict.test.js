import React from "react";
import { BoilingVerdict } from "./BoilingVerdict";
import renderer from "react-test-renderer";

it("would not boil if no input", () => {
    const tree = renderer.create(<BoilingVerdict />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("would not boil if NaN", () => {
    const tree = renderer.create(<BoilingVerdict celsius={"nah"} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("would boil if at 100", () => {
    const tree = renderer.create(<BoilingVerdict celsius={100} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("would boil if above 100", () => {
    const tree = renderer.create(<BoilingVerdict celsius={200} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("would not boil if below 20", () => {
    const tree = renderer.create(<BoilingVerdict celsius={20} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("would not boil if negative -1000", () => {
    const tree = renderer.create(<BoilingVerdict celsius={-1000} />).toJSON();
    expect(tree).toMatchSnapshot();
});
