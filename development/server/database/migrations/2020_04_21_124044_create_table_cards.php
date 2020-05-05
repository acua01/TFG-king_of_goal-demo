<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards', function (Blueprint $table) {
          $table->engine = 'InnoDB';
          $table->bigIncrements('id');
          $table->integer('rating');
          $table->integer('value');
          $table->integer('pace');
          $table->integer('shooting');
          $table->integer('passing');
          $table->integer('dribbling');
          $table->integer('defending');
          $table->integer('physicality');
          $table->string('good_leg', 20);
          $table->integer('skills');
          $table->integer('bad_leg');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cards');
    }
}
