<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipsToCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cards', function (Blueprint $table) {
          // Relationships
          $table->bigInteger('id_type')->unsigned();
          $table->bigInteger('id_player')->unsigned();
          $table->bigInteger('id_team')->unsigned();
          $table->bigInteger('id_country')->unsigned();
          $table->bigInteger('id_position')->unsigned();

          //Foreign keys
          $table->foreign('id_type')->references('id')->on('cards_types')->onDelete('cascade');
          $table->foreign('id_player')->references('id')->on('players')->onDelete('cascade');
          $table->foreign('id_team')->references('id')->on('teams')->onDelete('cascade');
          $table->foreign('id_country')->references('id')->on('countries')->onDelete('cascade');
          $table->foreign('id_position')->references('id')->on('positions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cards', function (Blueprint $table) {
            //
        });
    }
}
