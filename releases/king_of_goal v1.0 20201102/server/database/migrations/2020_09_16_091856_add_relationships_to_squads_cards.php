<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipsToSquadsCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('squads_cards', function (Blueprint $table) {
            // Relationships
            $table->bigInteger('id_squad')->unsigned();
            $table->bigInteger('id_club_card')->unsigned()->nullable(true);

            //Foreign keys
            $table->foreign('id_squad')->references('id')->on('squads')->onDelete('cascade');
            $table->foreign('id_club_card')->references('id')->on('clubs_cards')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('squads_cards', function (Blueprint $table) {
            //
        });
    }
}
