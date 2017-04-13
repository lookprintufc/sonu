# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170413110939) do

  create_table "admins", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "comitees", force: :cascade do |t|
    t.string   "name"
    t.string   "grade"
    t.integer  "limit"
    t.float    "value_not_cotist"
    t.float    "value_cotist"
    t.datetime "start_date",       null: false
    t.datetime "end_date",         null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "",           null: false
    t.string   "encrypted_password",     default: "",           null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,            null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                                    null: false
    t.datetime "updated_at",                                    null: false
    t.string   "name",                   default: "",           null: false
    t.string   "general_register",       default: "",           null: false
    t.string   "cpf",                    default: "",           null: false
    t.string   "gender",                 default: "",           null: false
    t.date     "birthday",               default: '2009-01-01', null: false
    t.string   "cep"
    t.string   "state"
    t.text     "adress"
    t.string   "adress_number"
    t.string   "complement"
    t.string   "city"
    t.string   "district"
    t.string   "phone"
    t.string   "cel",                    default: "",           null: false
    t.string   "university",             default: "",           null: false
    t.integer  "registration_id"
    t.integer  "semester"
    t.text     "facebook_profile_link",  default: "",           null: false
    t.boolean  "completed"
    t.boolean  "active",                 default: true
    t.integer  "lot_id"
    t.datetime "paid_on"
    t.integer  "room_id"
    t.index ["birthday", "gender", "cel"], name: "index_users_on_birthday_and_gender_and_cel", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["name", "general_register", "cpf"], name: "index_users_on_name_and_general_register_and_cpf", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["university", "facebook_profile_link"], name: "index_users_on_university_and_facebook_profile_link", unique: true
  end

end
