import { libroService } from '../services/libro.service';

type Request = {
  params: Record<string, string | undefined>;
  body: any;
};

type Response = {
  json: (body: any) => Response;
  status: (code: number) => Response;
  send: () => Response;
};

export const libroController = {
  getAll: (req: Request, res: Response) => {
    res.json(libroService.getAll());
  },
  getById: (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const libro = libroService.getById(id);
    if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });
    res.json(libro);
  },
  create: (req: Request, res: Response) => {
    const nuevo = libroService.create(req.body);
    res.status(201).json(nuevo);
  },
  update: (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const actualizado = libroService.update(id, req.body);
    if (!actualizado) return res.status(404).json({ error: 'Libro no encontrado' });
    res.json(actualizado);
  },
  delete: (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const exito = libroService.delete(id);
    if (!exito) return res.status(404).json({ error: 'Libro no encontrado' });
    res.status(204).send();
  }
};