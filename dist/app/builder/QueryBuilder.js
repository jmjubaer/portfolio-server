"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    constructor(queryModel, query) {
        this.queryModel = queryModel;
        this.query = query;
    }
    // search query
    search(searchAbleFields) {
        var _a;
        const searchTerm = (_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.searchTerm;
        if (searchTerm) {
            this.queryModel = this.queryModel.find({
                $or: searchAbleFields.map((field) => ({
                    [field]: { $regex: searchTerm, $options: 'i' },
                })),
            });
        }
        return this;
    }
    // filter query
    filter() {
        const queryObj = Object.assign({}, this.query);
        const excludeField = [
            'searchTerm',
            'minPrice',
            'maxPrice',
            'sort',
            'limit',
            'page',
            'fields',
        ];
        excludeField.forEach((elm) => delete queryObj[elm]);
        this.queryModel = this.queryModel.find(queryObj);
        return this;
    }
    // sort query
    sort() {
        var _a, _b, _c;
        const sort = ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.sort) === null || _b === void 0 ? void 0 : _b.split(',')) === null || _c === void 0 ? void 0 : _c.join(' ')) || '-createdAt';
        this.queryModel = this.queryModel.sort(sort);
        return this;
    }
    // pagination query
    paginate() {
        var _a, _b;
        const limit = Number((_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.limit) || 10;
        const page = Number((_b = this === null || this === void 0 ? void 0 : this.query) === null || _b === void 0 ? void 0 : _b.page) || 1;
        const skip = (page - 1) * limit;
        this.queryModel = this.queryModel.skip(skip).limit(limit);
        return this;
    }
    // fields query
    fields() {
        var _a, _b, _c;
        const fields = ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.split(',')) === null || _c === void 0 ? void 0 : _c.join(' ')) || '-__v';
        this.queryModel = this === null || this === void 0 ? void 0 : this.queryModel.select(fields);
        return this;
    }
    // price range query
    priceRange() {
        var _a, _b;
        const minPrice = Number((_a = this.query) === null || _a === void 0 ? void 0 : _a.minPrice);
        const maxPrice = Number((_b = this.query) === null || _b === void 0 ? void 0 : _b.maxPrice);
        if (!isNaN(minPrice) || !isNaN(maxPrice)) {
            const priceFilter = {};
            if (!isNaN(minPrice))
                priceFilter['$gte'] = minPrice;
            if (!isNaN(maxPrice))
                priceFilter['$lte'] = maxPrice;
            this.queryModel = this.queryModel.find({
                price: priceFilter,
            });
        }
        return this;
    }
    // count total query for meta data
    countTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const totalQueries = this.queryModel.getFilter();
            const total = yield this.queryModel.model.countDocuments(totalQueries);
            const limit = Number((_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.limit) || 10;
            const page = Number((_b = this === null || this === void 0 ? void 0 : this.query) === null || _b === void 0 ? void 0 : _b.page) || 1;
            const totalPage = Math.ceil(total / limit);
            return { limit, page, total, totalPage };
        });
    }
}
exports.default = QueryBuilder;
