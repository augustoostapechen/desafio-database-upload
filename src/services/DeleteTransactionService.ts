import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('There is no transaction with this id.');
    }

    await transactionsRepository.delete(id);
  }
}

export default DeleteTransactionService;
