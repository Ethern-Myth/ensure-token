import { Request, Response, NextFunction } from "express";

export const ensureToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const bearerHeader = req.headers["authorization"];
	if (typeof bearerHeader !== "undefined") {
		const bearer = bearerHeader.split(" ");
		const bearerToken = bearer[1];
		req.headers.token = bearerToken;
		next();
	} else {
		res.sendStatus(403);
	}
};
