import { render, screen } from '@testing-library/react';

import Post from '.';

describe('Teste do componente Post', () => {
    it('Dete redenrizar a imagem', () => {
        render(<Post imageUrl="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg">Olha só que legal minha miniatura do Batmóvel.</Post>);
        expect(screen.getByTestId('post-img')).toBeInTheDocument();
    })
    it('Deve renderizar o texto corretamente', () => {
        render(<Post imageUrl="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg">Olha só que legal minha miniatura do Batmóvel.</Post>);
        expect(screen.getByText('Olha só que legal minha miniatura do Batmóvel.')).toBeInTheDocument();
    });
});