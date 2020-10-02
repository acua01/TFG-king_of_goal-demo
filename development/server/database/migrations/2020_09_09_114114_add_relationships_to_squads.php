<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipsToSquads extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('squads', function (Blueprint $table) {
            // Relationships
            $table->bigInteger('id_club')->unsigned();

            //Foreign keys
            $table->foreign('id_club')->references('id')->on('clubs')->onDelete('cascade');

            $table->unique(['name', 'id_club'], 'name_club_index');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('squads', function (Blueprint $table) {
            //
        });
    }
}
