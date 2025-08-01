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
exports.up = up;
exports.down = down;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        const exists = yield knex.schema.hasTable("users");
        if (!exists) {
            yield knex.schema.createTable("users", (table) => {
                table.string("id", 36).primary().defaultTo(knex.raw("(UUID())"));
                table.string("first_name").notNullable();
                table.string("last_name").notNullable();
                table.string("email").notNullable();
                table.string("karma_id");
                table.timestamp("created_at").defaultTo(knex.fn.now());
                table.timestamp("updated_at").defaultTo(knex.fn.now());
            });
        }
    });
}
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        const exists = yield knex.schema.hasTable("users");
        if (exists) {
            yield knex.schema.dropTable("users");
        }
    });
}
