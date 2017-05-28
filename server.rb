require 'sinatra'
require 'pg'
conn = PG::Connection.open(:dbname => 'LibraryController')
