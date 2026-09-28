import { autorService } from '../services/autor.service';

type Request = {
  params: Record<string, string>;
  body: any;
};

type Response = {
  json: (body: any) => Response;
  status: (code: number) => Response;
  send: () => Response;
};

export const autorController = {
  getAll: (req: Request, res: Response) => {
    res.json(autorService.getAll());
  },
  getById: (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const autor = autorService.getById(id);
    if (!autor) return res.status(404).json({ error: 'Autor no encontrado' });
    res.json(autor);
  },
  create: (req: Request, res: Response) => {
    const nuevo = autorService.create(req.body);
    res.status(201).json(nuevo);
  },
  update: (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const actualizado = autorService.update(id, req.body);
    if (!actualizado) return res.status(404).json({ error: 'Autor no encontrado' });
    res.json(actualizado);
  },
  delete: (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const exito = autorService.delete(id);
    if (!exito) return res.status(404).json({ error: 'Autor no encontrado' });
    res.status(204).send();
  }
};