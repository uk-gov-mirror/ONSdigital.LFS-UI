import React from "react";
import {cleanup, fireEvent, render} from "@testing-library/react";

import {BrowserRouter} from "react-router-dom";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import fetch from "../tests/setup/__mocks__/fetch.js";
import {Admin} from "./Admin";


// @ts-ignore
global.fetch = fetch;


describe("Admin - User Management Page", () => {
    Enzyme.configure({adapter: new Adapter()});

    beforeEach(() => {
        // @ts-ignore
        process.env.NODE_ENV = 'test'
    });

    afterEach(() => {
        cleanup();
    });

    const Props = {};


    function wrapper(render: any) {
        return render(
            <BrowserRouter>
                <Admin/>
            </BrowserRouter>
        );
    }

    it("renders the page", async () => {
        expect(wrapper(render)).toMatchSnapshot();
    });

    it("should open and close the New User Modal ", async () => {
        const {getByTestId, getByLabelText, getByText, queryAllByTestId} = wrapper(render);

        await fireEvent.click(getByText(/New User/i))

        await fireEvent.click(getByText(/Cancel/i))

        await fireEvent.click(getByText(/New User/i))

        await fireEvent.change(getByLabelText(/Username/i), {
            target: {value: "Admin"}
        });

        await fireEvent.click(getByText(/Save/i))
    });
});