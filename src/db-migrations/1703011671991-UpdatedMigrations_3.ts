import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatedMigrations31703011671991 implements MigrationInterface {
    name = 'UpdatedMigrations31703011671991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "results" DROP CONSTRAINT "FK_6ce829d081a1d8d857c56dc5447"`);
        await queryRunner.query(`ALTER TABLE "results" DROP CONSTRAINT "FK_bf7a24ff2f3f9f46ce78c1daeb0"`);
        await queryRunner.query(`ALTER TABLE "results" DROP COLUMN "drivers_short_id"`);
        await queryRunner.query(`ALTER TABLE "results" DROP COLUMN "circuit_short_id"`);
        await queryRunner.query(`ALTER TABLE "results" ADD "race_short_id" character varying(10)`);
        await queryRunner.query(`ALTER TABLE "results" ADD CONSTRAINT "UQ_2d91e4373c15853a461d547fed6" UNIQUE ("race_short_id")`);
        await queryRunner.query(`ALTER TABLE "results" ADD CONSTRAINT "FK_2d91e4373c15853a461d547fed6" FOREIGN KEY ("race_short_id") REFERENCES "races"("race_short_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "results" DROP CONSTRAINT "FK_2d91e4373c15853a461d547fed6"`);
        await queryRunner.query(`ALTER TABLE "results" DROP CONSTRAINT "UQ_2d91e4373c15853a461d547fed6"`);
        await queryRunner.query(`ALTER TABLE "results" DROP COLUMN "race_short_id"`);
        await queryRunner.query(`ALTER TABLE "results" ADD "circuit_short_id" character varying(36)`);
        await queryRunner.query(`ALTER TABLE "results" ADD "drivers_short_id" character varying(10)`);
        await queryRunner.query(`ALTER TABLE "results" ADD CONSTRAINT "FK_bf7a24ff2f3f9f46ce78c1daeb0" FOREIGN KEY ("circuit_short_id") REFERENCES "circuits"("circuit_short_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "results" ADD CONSTRAINT "FK_6ce829d081a1d8d857c56dc5447" FOREIGN KEY ("drivers_short_id") REFERENCES "drivers"("drivers_short_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
