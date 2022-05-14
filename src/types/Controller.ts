import { Request, Response } from 'express'

type Controller = (request: Request, response: Response) => void;

export default Controller
