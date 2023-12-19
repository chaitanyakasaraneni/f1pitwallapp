import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatedMigrations31703014674951 implements MigrationInterface {
    name = 'UpdatedMigrations31703014674951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "races" ADD "race_name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "races" ADD CONSTRAINT "UQ_6ef487536db8af4737b630b301c" UNIQUE ("race_name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "races" DROP CONSTRAINT "UQ_6ef487536db8af4737b630b301c"`);
        await queryRunner.query(`ALTER TABLE "races" DROP COLUMN "race_name"`);
    }

}
