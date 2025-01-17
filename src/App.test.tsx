import React from "react";
import api from "./Api";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import App from "./App";
import { GridOptions } from "ag-grid-community";
import fetch from "jest-fetch-mock";
import { AgInputTextField } from "@ag-grid-community/core";
// import fetchMock from 'fetch-mock';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        title: "jhbhj",
        userId: 10,
        body: "hvjh",
      }),
  })
) as jest.Mock;

beforeEach(() => {
  fetch.mockClear();
});

describe("withFetch", () => {
  test("get ", async () => {
    const fetchMock = jest.spyOn(global, "fetch");
    const json = await api.valueGet();
    expect(fetchMock).toHaveBeenCalledWith("http://localhost:4002/post");

    expect(fetchMock).toBeTruthy();
  });
  test("post", async () => {
    const fetchMock = jest.spyOn(global, "fetch");
    const json = await api.valuePost({
      title: "jhbhj",
      userId: 10,
      body: "hvjh",
    });
    expect(fetchMock).toHaveBeenCalled();

    expect(fetchMock).toBeTruthy();
  });
  test("update", async () => {
    const fetchMock = jest.spyOn(global, "fetch");
    const json = await api.valuePut(18, {
      title: "jhbhj",
      userId: 10,
      body: "hvjh",
    });
    expect(fetchMock).toHaveBeenCalled();

    expect(fetchMock).toBeTruthy();
  });

  test("delete", async () => {
    const fetchMock = jest.spyOn(global, "fetch");
    const json = await api.valueDelete(18);
    expect(fetchMock).toHaveBeenCalled();

    expect(fetchMock).toBeTruthy();
  });
});
