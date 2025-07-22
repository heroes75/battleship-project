/* eslint-disable no-undef */
import {destroyer, carrier}  from "./ship";


describe("test ship destroyer", () => {
    
    test("test hit function", () => {
        destroyer.hit();
        destroyer.hit();
        expect(destroyer.hits).toBe(2)
    })
    test("test length props", () => {
        expect(destroyer.length).toBe(2)
    })
    test("test isSunk function", () => {
        for (let i = 0; i < destroyer.length; i++) {
            destroyer.hit()
        }
        destroyer.isSunk();
        expect(destroyer.sunk).toBe(true)
    })
})

describe("test ship Carrier", () => {
    test("test hit function", () => {
        carrier.hit();
        carrier.hit();
        expect(carrier.hits).toBe(2)
    })
    test("test length props", () => {
        expect(carrier.length).toBe(5)
    })
    test("test isSunk function", () => {
        for (let i = 0; i < carrier.length; i++) {
            carrier.hit()
        }
        carrier.isSunk();
        expect(carrier.sunk).toBe(true)
    })
})