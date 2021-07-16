import { Router, Request, Response } from 'express';

const router = Router();

router.post('/mensajes', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        cuerpo,
        de

    });

});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    const id = req.params.id
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        cuerpo,
        de,
        id

    });

});



export default router;