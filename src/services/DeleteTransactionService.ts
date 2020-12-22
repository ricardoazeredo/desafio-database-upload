import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import transaction from '../models/Transaction';

import TransactionRepository from '../repositories/TransactionsRepository';
class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // TODO
    const transactionsRepository = getCustomRepository(TransactionRepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exists');
    };

    await transactionsRepository.remove(transaction);

  }
}

export default DeleteTransactionService;
