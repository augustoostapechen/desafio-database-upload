import { getRepository } from 'typeorm';

import Category from '../models/Category';

class CreateCategoryService {
  public async execute(categoryTitle: string): Promise<Category> {
    const categoryRepository = getRepository(Category);

    const findCategory = await categoryRepository.findOne({
      where: {
        title: categoryTitle,
      },
    });

    if (findCategory) {
      return findCategory;
    }

    const category = categoryRepository.create({
      title: categoryTitle,
    });

    await categoryRepository.save(category);

    return category;
  }
}

export default CreateCategoryService;
