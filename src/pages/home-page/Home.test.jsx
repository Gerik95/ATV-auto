import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import Home from './Home'

const renderHomePage = () =>
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    )

describe('Home page services section', () => {
    it('renders updated engine sales card and corner prices in modal', async () => {
        renderHomePage()

        expect(screen.getByText('Продажа новых ДВС')).toBeInTheDocument()

        const detailsButton = screen.getByRole('button', {
            name: 'Подробнее об услуге: Развал-схождение',
        })

        await act(async () => {
            await userEvent.click(detailsButton)
        })

        expect(screen.getByText('Диагностика развала: 1 800 ₽')).toBeInTheDocument()
        expect(screen.getByText('Развал-схождение легкового автомобиля: 2 500 ₽')).toBeInTheDocument()
        expect(screen.getByText('Развал-схождение кроссовера: 2 800 ₽')).toBeInTheDocument()
    })
})
