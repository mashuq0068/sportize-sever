import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  //   searching
  search(searchableFields: string[]) {
    const searchTerm = this?.query?.searchTerm;
    if (searchTerm) {
      this.modelQuery = this.modelQuery
        .find({
          $or: searchableFields.map(
            (field) =>
              ({
                [field]: { $regex: searchTerm, $options: 'i' },
              }) as FilterQuery<T>,
          ),
        })
        .limit(10);
    }

    return this;
  }

  //   filtering
  filter() {
    const queryObj = { ...this.query };
    if (queryObj?.price) {
      this.modelQuery = this.modelQuery.find({
        price: { $lte: queryObj.price },
      });
    }
    // if (queryObj?.rating) {
    //   this.modelQuery = this.modelQuery.find({
    //     price: { $eq: queryObj.rating },
    //   });
    // }

    const excludeFields = ['searchTerm', 'sort', 'price', 'limit'];
    for (const key in queryObj) {
      if (!queryObj[key]) {
        excludeFields.push(key);
      }
    }
    excludeFields.forEach((el) => delete queryObj[el]);

    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);

    return this;
  }
  //   sorting
  sort() {
    const sort =
      this?.query?.sort || '-createdAt';
      // console.log(this.query.sort);
    this.modelQuery = this.modelQuery.sort(sort as string);

    return this;
  }

  // limit
  limit() {
    const limit = Number(this?.query?.limit);
    this.modelQuery = this.modelQuery.limit(limit);
    return this;
  }
}

export default QueryBuilder;
