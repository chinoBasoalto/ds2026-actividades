import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ArrowLeft, JournalPlus } from 'react-bootstrap-icons';

// 1. ESQUEMA DE VALIDACIÓN (Declarado arriba de todo para que no tire error)
const libroSchema = z.object({
    titulo: z.string().min(1, { message: "El título es obligatorio" }),
    autor: z.string().min(1, { message: "El autor es obligatorio" }),
    // Usamos z.number() y convertimos el valor en el registro con valueAsNumber
    precio: z.number().min(1, { message: "El precio debe ser mayor a 0" }),
    genero: z.string().min(1, { message: "Seleccioná un género válido" }),
    imagen: z.string().url({ message: "Debe ser una URL de imagen válida (http://...)" })
});

// 2. INFERENCIA DEL TIPO (Acá se crea LibroFormData antes de usarlo)
type LibroFormData = z.infer<typeof libroSchema>;

function AltaLibro() {
    const navigate = useNavigate();

    // 3. CONFIGURACIÓN DEL FORMULARIO (Ya reconoce LibroFormData perfectamente)
    const { register, handleSubmit, formState: { errors } } = useForm<LibroFormData>({
        resolver: zodResolver(libroSchema)
    });

    // 4. ENVÍO DE DATOS
    const onSubmit = (data: LibroFormData) => {
        console.log("¡Datos del nuevo libro válidos!", data);
        alert(`¡Libro "${data.titulo}" creado con éxito! (Simulado)`);
        
        // Redirección al catálogo con useNavigate
        navigate('/');
    };

    return (
        <Container className="mt-5" style={{ maxWidth: '650px' }}>
            <Link to="/" className="text-decoration-none text-secondary d-inline-flex align-items-center gap-2 mb-4">
                <ArrowLeft /> Volver al catálogo
            </Link>

            <div className="bg-light p-4 rounded shadow-sm border">
                <h2 className="fw-bold mb-4 text-dark d-flex align-items-center gap-2">
                    <JournalPlus className="text-warning" /> Alta de Nuevo Libro
                </h2>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    {/* Título */}
                    <Form.Group className="mb-3" controlId="formTitulo">
                        <Form.Label className="fw-semibold">Título del Libro</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ej: Clean Code" 
                            isInvalid={!!errors.titulo}
                            {...register('titulo')}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.titulo?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Autor */}
                    <Form.Group className="mb-3" controlId="formAutor">
                        <Form.Label className="fw-semibold">Autor</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ej: Robert C. Martin" 
                            isInvalid={!!errors.autor}
                            {...register('autor')}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.autor?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Precio */}
                    <Form.Group className="mb-3" controlId="formPrecio">
                        <Form.Label className="fw-semibold">Precio ($)</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="Ej: 45000" 
                            isInvalid={!!errors.precio}
                            {...register('precio', { valueAsNumber: true })}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.precio?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Género */}
                    <Form.Group className="mb-3" controlId="formGenero">
                        <Form.Label className="fw-semibold">Género Literario</Form.Label>
                        <Form.Select isInvalid={!!errors.genero} {...register('genero')}>
                            <option value="">-- Seleccionar género --</option>
                            <option value="Programación">Programación</option>
                            <option value="Ciencia Ficción">Ciencia Ficción</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Novela">Novela</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {errors.genero?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Portada URL */}
                    <Form.Group className="mb-4" controlId="formImagen">
                        <Form.Label className="fw-semibold">URL de la Portada (Imagen)</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="https://ejemplo.com/imagen.jpg" 
                            isInvalid={!!errors.imagen}
                            {...register('imagen')}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.imagen?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100 py-2 fw-bold shadow-sm">
                        Guardar Libro
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default AltaLibro;