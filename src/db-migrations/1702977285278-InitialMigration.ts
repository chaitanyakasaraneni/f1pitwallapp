import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1702977285278 implements MigrationInterface {
    name = 'InitialMigration1702977285278'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "races" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "race_short_id" character varying(10) NOT NULL, "year" integer NOT NULL, "race_number" integer NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, "circuit_short_id" character varying(36), CONSTRAINT "UQ_6d6f788b44a0fe808c3545406a1" UNIQUE ("race_short_id"), CONSTRAINT "PK_ba7d19b382156bc33244426c597" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "race_short_id_idx" ON "races" ("race_short_id") `);
        await queryRunner.query(`CREATE INDEX "year_idx" ON "races" ("year") `);
        await queryRunner.query(`CREATE TABLE "constructors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "constructors_short_id" character varying(36) NOT NULL, "name" character varying(72) NOT NULL, "origin_country" character varying(72) NOT NULL, CONSTRAINT "UQ_b6fae466c7b57d196f31ae1ad7e" UNIQUE ("constructors_short_id"), CONSTRAINT "UQ_1707720cd2d3e068c8ffb9c4c18" UNIQUE ("name"), CONSTRAINT "PK_44921a3ca1db2b5c49ae0f0ee67" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "constructors_short_id_idx" ON "constructors" ("constructors_short_id") `);
        await queryRunner.query(`CREATE TABLE "drivers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "drivers_short_id" character varying(10) NOT NULL, "name" character varying(72) NOT NULL, "nationality" character varying(72) NOT NULL, "driver_number" integer NOT NULL, CONSTRAINT "UQ_4367860bc5768ba4401039926ff" UNIQUE ("drivers_short_id"), CONSTRAINT "UQ_a679ed59119fd25c5e586212f4e" UNIQUE ("name"), CONSTRAINT "PK_92ab3fb69e566d3eb0cae896047" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "driver_short_id_idx" ON "drivers" ("drivers_short_id") `);
        await queryRunner.query(`CREATE INDEX "name_idx" ON "drivers" ("name") `);
        await queryRunner.query(`CREATE TABLE "results" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "date" TIMESTAMP WITH TIME ZONE NOT NULL, "drivers_short_id" character varying(10), "circuit_short_id" character varying(36), "constructors_short_id" character varying(36), CONSTRAINT "PK_e8f2a9191c61c15b627c117a678" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "circuits" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "circuit_short_id" character varying(36) NOT NULL, "name" character varying(72) NOT NULL, "location" character varying(72) NOT NULL, "length_kms" double precision NOT NULL, CONSTRAINT "UQ_963a4cdf86d10d8b0beec0443c1" UNIQUE ("circuit_short_id"), CONSTRAINT "UQ_ce0e5f8d729035e073cbb21d296" UNIQUE ("name"), CONSTRAINT "PK_8909faf3f3e7b1c1b002936b92d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "circuit_short_id_idx" ON "circuits" ("circuit_short_id") `);
        await queryRunner.query(`ALTER TABLE "races" ADD CONSTRAINT "FK_027807f9b7dbac04c5ffe4c34c0" FOREIGN KEY ("circuit_short_id") REFERENCES "circuits"("circuit_short_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "results" ADD CONSTRAINT "FK_6ce829d081a1d8d857c56dc5447" FOREIGN KEY ("drivers_short_id") REFERENCES "drivers"("drivers_short_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "results" ADD CONSTRAINT "FK_bf7a24ff2f3f9f46ce78c1daeb0" FOREIGN KEY ("circuit_short_id") REFERENCES "circuits"("circuit_short_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "results" ADD CONSTRAINT "FK_a14b01c3958a52cede584cb7285" FOREIGN KEY ("constructors_short_id") REFERENCES "constructors"("constructors_short_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "results" DROP CONSTRAINT "FK_a14b01c3958a52cede584cb7285"`);
        await queryRunner.query(`ALTER TABLE "results" DROP CONSTRAINT "FK_bf7a24ff2f3f9f46ce78c1daeb0"`);
        await queryRunner.query(`ALTER TABLE "results" DROP CONSTRAINT "FK_6ce829d081a1d8d857c56dc5447"`);
        await queryRunner.query(`ALTER TABLE "races" DROP CONSTRAINT "FK_027807f9b7dbac04c5ffe4c34c0"`);
        await queryRunner.query(`DROP INDEX "public"."circuit_short_id_idx"`);
        await queryRunner.query(`DROP TABLE "circuits"`);
        await queryRunner.query(`DROP TABLE "results"`);
        await queryRunner.query(`DROP INDEX "public"."name_idx"`);
        await queryRunner.query(`DROP INDEX "public"."driver_short_id_idx"`);
        await queryRunner.query(`DROP TABLE "drivers"`);
        await queryRunner.query(`DROP INDEX "public"."constructors_short_id_idx"`);
        await queryRunner.query(`DROP TABLE "constructors"`);
        await queryRunner.query(`DROP INDEX "public"."year_idx"`);
        await queryRunner.query(`DROP INDEX "public"."race_short_id_idx"`);
        await queryRunner.query(`DROP TABLE "races"`);
    }

}
