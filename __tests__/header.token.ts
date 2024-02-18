import { ensureToken } from "../src/index";
import { Request, Response, NextFunction } from "express";

describe("ensureToken middleware", () => {
	it("should set token in request headers if authorization header is present", () => {
		// Mocking Request and Response objects
		const token = "myToken123";
		const req: Partial<Request> = {
			headers: {
				authorization: `Bearer ${token}`,
			},
		};
		const res: Partial<Response> = {
			sendStatus: jest.fn(),
		};
		const next: NextFunction = jest.fn();

		// Calling the middleware function
		ensureToken(req as Request, res as Response, next);

		// Expectation
		expect(req.headers!.token).not.toEqual("");
		expect(req.headers!.token).toEqual(token);
		expect(req.headers!.token).toEqual(expect.any(String));
		expect(next).toHaveBeenCalled();
		expect(res.sendStatus).not.toHaveBeenCalled();
	});

	it("should send 403 status if authorization header is not present", () => {
		// Mocking Request and Response objects
		const req: Partial<Request> = {
			headers: {},
		};
		const res: Partial<Response> = {
			sendStatus: jest.fn().mockReturnThis(), // Chaining mockReturnThis() to make it chainable
		};
		const next: NextFunction = jest.fn();

		// Calling the middleware function
		ensureToken(req as Request, res as Response, next);

		// Expectation
		expect(res.sendStatus).toHaveBeenCalledWith(403);
		expect(next).not.toHaveBeenCalled();
	});
});
