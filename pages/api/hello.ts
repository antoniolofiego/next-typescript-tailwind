import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { name, age } = req.query;
    res.statusCode = 200;
    res.json({ name: name, age: age });
};
