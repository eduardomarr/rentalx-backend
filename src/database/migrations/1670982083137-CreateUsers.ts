import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1670982083137 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varChar",
          },
          {
            name: "username",
            type: "varChar",
          },
          {
            name: "email",
            type: "varChar",
          },
          {
            name: "password",
            type: "varChar",
          },
          {
            name: "driver_license",
            type: "varChar",
          },
          {
            name: "isAdmin",
            type: "boolean",
            default: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
