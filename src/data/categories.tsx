import { Category } from '../types/Category'

export const categories: Category = {
    food: { title: 'Alimentação', expense: true },
    rent: { title: 'Aluguel', expense: true },
    bill: { title: 'Contas', expense: true },
    monthly: { title: 'Mensalidade', expense: true },
    health: { title: 'Saúde', expense: true },
    spend: { title: 'Gastos', expense: true },
    gain: { title: 'Ganhos', expense: false },
    refund: { title: 'Reembolso', expense: false }
}