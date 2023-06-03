import { fireEvent, render, screen } from '@testing-library/react';

import PostComment from '.';

describe('Teste do componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Deve adicionar um comentário', ()=> {
        render(<PostComment/>);
        const comentarioTextarea = screen.getByTestId('comentario-textarea')
        const comentarioSubmit = screen.getByTestId('comentario-submit')
        fireEvent.change(comentarioTextarea, {
            target: {
                value: 'Um comentario'
            }
        })
        fireEvent.click(comentarioSubmit)
        expect(screen.getByText('Um comentario')).toBeInTheDocument()
    })
});