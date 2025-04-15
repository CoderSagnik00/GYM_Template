import { Request, Response, NextFunction } from "express";

const combineParams = (req: Request): { [key: string]: any } => ({
    ...req.body,
    ...req.params,
    ...req.query
});

// Middleware to validate that all required parameters are provided
export const validateParams = (requiredParams: string[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const allParams = combineParams(req);
        const missingParams = requiredParams.filter(param => allParams[param] === undefined);

        if (missingParams.length > 0) {
            res.status(400).json({
                success: false,
                message: 'Missing required parameters',
                missingParameters: missingParams
            });
            return;
        }
        next();
    };
}

// Middleware to validate that at least one required parameter is provided
export const validateAnyParam = (requiredParams: string[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const allParams = combineParams(req);
        const hasAnyParam = requiredParams.some(param => allParams[param] !== undefined);

        if (!hasAnyParam) {
            res.status(400).json({
                success: false,
                message: 'At least one required parameter must be provided'
            });
            return;
        }
        next();
    };
}
