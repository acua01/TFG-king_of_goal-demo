<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableCardsTypes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards_types', function (Blueprint $table) {
          $table->engine = 'InnoDB';
          $table->bigIncrements('id');
          $table->string('name', 50);
          $table->string('image', 500)->nullable(true);
          $table->string('image_mini', 500)->nullable(true);
          $table->string('text_color', 7);
          $table->boolean('rare');
          $table->boolean('special');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cards_types');
    }
}
