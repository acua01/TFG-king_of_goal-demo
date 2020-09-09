<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipsToClubsCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('clubs_cards', function (Blueprint $table) {
          // Relationships
          $table->bigInteger('id_club')->unsigned();
          $table->bigInteger('id_card')->unsigned();

          //Foreign keys
          $table->foreign('id_club')->references('id')->on('clubs')->onDelete('cascade');
          $table->foreign('id_card')->references('id')->on('cards')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('clubs_cards', function (Blueprint $table) {
            //
        });
    }
}
