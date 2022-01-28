import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('username', 80).notNullable()
      table.string('typeUser').notNullable()
      table.string('cpf', 60).notNullable().unique()
      table.string('weight', 60)
      table.string('height', 60)
      table.string('uf', 60).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
